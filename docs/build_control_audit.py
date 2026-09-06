"""Regenerate the static tutorial from the published notebook; uses mistune 0.8.x."""
import html
import json
from pathlib import Path
import mistune

ROOT = Path(__file__).resolve().parents[1]
HUB = ROOT / 'vcc_learning_hub'
notebook = json.loads((HUB / 'notebooks/01_control_data_audit.ipynb').read_text())
toc = []
class Renderer(mistune.Renderer):
    def header(self, text, level, raw=None):
        if level == 1:
            return ''
        anchor = 'section-' + str(len(toc) + 1)
        toc.append((anchor, text))
        return f'<h{level} id="{anchor}">{text}</h{level}>\n'

markdown = mistune.Markdown(renderer=Renderer(escape=True))
parts = []
code_count = 0
for cell in notebook['cells']:
    source = ''.join(cell.get('source', []))
    if cell['cell_type'] == 'markdown':
        # Native HTML equations keep this page readable without a CDN or math runtime.
        equations = [
            (r'$$B_{cg}=\sum_{i\in c}X_{ig},\qquad\n\mathrm{CPM}_{cg}=\frac{B_{cg}}{\sum_h B_{ch}}\times 10^6.$$'.replace(r'\n', '\n'),
             '<div class="equation" aria-label="Pseudobulk 与 CPM 公式">B<sub>cg</sub> = ∑<sub>i ∈ c</sub> X<sub>ig</sub><br>CPM<sub>cg</sub> = B<sub>cg</sub> / (∑<sub>h</sub> B<sub>ch</sub>) × 10<sup>6</sup></div>'),
            (r'$$D_{cg}=\frac{\#\{i\in c:X_{ig}>0\}}{N_c}.$$',
             '<div class="equation" aria-label="检测率公式">D<sub>cg</sub> = #{i ∈ c : X<sub>ig</sub> &gt; 0} / N<sub>c</sub></div>'),
        ]
        for i, (latex, _) in enumerate(equations):
            source = source.replace(latex, f'FORMULAPLACEHOLDER{i}')
        source = source.replace('$c$', '`c`').replace('$g$', '`g`')
        rendered = markdown(source)
        for i, (_, equation) in enumerate(equations):
            rendered = rendered.replace(f'<p>FORMULAPLACEHOLDER{i}</p>', equation)
        parts.append('<div class="markdown-cell">' + rendered + '</div>')
    elif cell['cell_type'] == 'code':
        code_count += 1
        parts.append(f'<div class="code-cell"><div class="code-toolbar"><span>Python · {code_count:02d}</span><button type="button" class="copy-code" hidden>复制代码</button></div><pre tabindex="0"><code>{html.escape(source)}</code></pre></div>')
        if cell.get('outputs'):
            raise ValueError('Notebook now contains outputs; review and support their rendering before publishing.')

navigation = ''.join(f'<a href="#{anchor}">{title}</a>' for anchor, title in toc)
page = '''<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="VCC 2026 controls 数据审计实操：pseudobulk、表达覆盖率、联合 PCA 与 ntc_id 结构分析。">
<title>Controls 数据审计实操 · VCC Learning Hub</title>
<link rel="stylesheet" href="tutorial.css">
</head>
<body id="top">
<a class="skip-link" href="#content">跳到正文</a>
<header class="topbar"><a class="brand" href="../">VC <span>VCC 2026 / Learning Hub</span></a><a href="../../">个人主页 ↗</a></header>
<div class="layout">
<aside><nav aria-label="章节目录"><p class="eyebrow">本页目录</p>TOC</nav></aside>
<main id="content">
<div class="intro"><p class="eyebrow">NOTEBOOK 01 / DATA AUDIT</p><h1>读懂 A/B/C controls</h1><p class="lead">从汇总表达与覆盖率，到单细胞 PCA 和 ntc_id 结构。</p>
<div class="tags"><span>9 节分析</span><span>CODECOUNT 个代码单元</span><span>只读数据探索</span></div>
<div class="actions"><a class="button" href="../notebooks/01_control_data_audit.ipynb" download>下载 Notebook ↓</a><a href="../#roadmap">返回学习路线图 →</a></div>
<p class="notice">这是 notebook 的静态阅读版，代码需下载后在 Jupyter 中运行。原文件尚无已保存输出，因此本页不展示计算结果或图表。运行前请将 <code>DATA_DIR</code> 改为你自己的 controls 数据目录。</p></div>
CONTENT
<footer><a href="../">← 返回 Learning Hub</a><a href="#top">返回顶部 ↑</a></footer>
</main></div>
<script src="tutorial.js"></script>
</body></html>
'''
page = page.replace('TOC', navigation).replace('CODECOUNT', str(code_count)).replace('CONTENT', '\n'.join(parts))
assert '$$' not in page and 'FORMULAPLACEHOLDER' not in page
(HUB / 'control-data-audit/index.html').write_text(page)
print(f'Generated {len(toc)} sections, {code_count} code cells')
