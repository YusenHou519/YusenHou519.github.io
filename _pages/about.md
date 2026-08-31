---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# About Me

My name is Yusen Hou (侯 宇森). I am a PhD student in the Data Science and Analytics Thrust at [the Hong Kong University of Science and Technology (Guangzhou)](https://www.hkust-gz.edu.cn/), advised by [Prof. Yanlin Zhang](https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/ZHANG-Yanlin/yanlinzhang) and co-supervised by [Prof. Jiguang Wang](https://facultyprofiles.hkust.edu.hk/profiles.php?profile=jiguang-wang-jgwang) at HKUST.

My interests focus on **LLM and AI agent systems for biomedical science** and **computational biology**.

Contact: [yhou925@connect.hkust-gz.edu.cn](mailto:yhou925@connect.hkust-gz.edu.cn)

<span class='anchor' id='news'></span>

# News

- *2026.08* 🎉🎉🎉 Our work [ABLE](paper/ABLE-EMNLP-2026.pdf) was accepted to the **Main conference of [EMNLP 2026](https://2026.emnlp.org/).**
- *2026.08* Our work [BioMaster](https://www.cell.com/patterns/fulltext/S2666-3899(26)00120-0) was selected as the **🔥 Cover Article 🔥** of [Patterns](https://www.cell.com/patterns), Vol. 7, Issue 8.
- *2026.07* Our work [GLMap](https://ai4nucleome.github.io/GLMap/) was accepted for an **oral presentation** at [iscbAI 2026](https://www.iscb-cn.org.cn/web/65/list.html).
- *2026.06* Our work [BioMaster](https://ai4nucleome.github.io/BioMaster/) was accepted by [Patterns](https://doi.org/10.1016/j.patter.2026.101611).
- *2026.04* Two papers were accepted to **ACL 2026**, and one submission was rejected.
- *2025.09* Started my PhD study at **HKUST(GZ)**.
- *2025.07* Finished my MPhil degree defense.
- *2025.07* Our work [Polaris](https://ai4nucleome.github.io/Polaris/) was selected as a poster at **ISMB 2025**.
- *2024.07* Presented "LoopHunter: Enhancing Chromatin Loop Annotation by Focusing on Larger Regions in Hi-C Data" virtually at **ISMB 2024**.

<span class='anchor' id='publications'></span>

# Publications

<p class="pub-note">* denotes equal contribution.</p>

## Workshop & Preprint

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">iscbAI 2026 Oral</div><img src='images/glmap.png' alt="GLMap" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Profiling genomic language models as individuals in a population](paper/GLMap-iscbAI-2026.pdf)

<strong><u>Yusen Hou</u></strong>, Weicai Long, Houcheng Su, Junning Feng, Yanlin Zhang

<em>iscbAI, 2026.</em> <a href="https://www.iscb-cn.org.cn/web/65/list.html"><strong>Oral Presentation</strong></a>

<a href="paper/GLMap-iscbAI-2026.pdf">Paper</a> · <a href="https://ai4nucleome.github.io/GLMap/">Web Page</a> · <a href="https://github.com/ai4nucleome/GLMap">Code</a>
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">bioRxiv</div><img src='images/contextTAD.png' alt="ContextTAD" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ContextTAD: Context-aware boundary learning for TAD calling from Hi-C contact maps](https://www.biorxiv.org/content/10.64898/2026.05.08.723772v1)

Weicai Long\*, <strong><u>Yusen Hou</u></strong>\*, Yanlin Zhang

<em>bioRxiv, 2026.</em>

<a href="https://www.biorxiv.org/content/10.64898/2026.05.08.723772v1">Paper</a> · <a href="paper/contextTAD.pdf">PDF</a> · <a href="https://github.com/ai4nucleome/ContextTAD">Code</a>
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">bioRxiv</div><img src='images/popgenagent.png' alt="PopGenAgent" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PopGenAgent: An Agent-Mediated Workflow for Population Genetics Analyses](https://www.biorxiv.org/content/10.64898/2026.03.02.709209v2)

Houcheng Su, Weicai Long, Junning Feng, <strong><u>Yusen Hou</u></strong>, Yanlin Zhang

<em>bioRxiv, 2026.</em>

<a href="https://www.biorxiv.org/content/10.64898/2026.03.02.709209v2">Paper</a> · <a href="paper/PopGenAgent.pdf">PDF</a> · <a href="https://github.com/ai4nucleome/POPGENAGENT">Code</a>
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">bioRxiv</div><img src='images/polaris-model.png' alt="Polaris" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Polaris: A Universal Framework for Chromatin Loop Annotation from Bulk and Single-cell Contact Maps](https://www.biorxiv.org/content/10.1101/2024.12.24.630215v1)

<strong><u>Yusen Hou</u></strong>, Audrey Baguette, Mathieu Blanchette, Yanlin Zhang

<em>bioRxiv, 2024.</em>

<a href="https://www.biorxiv.org/content/10.1101/2024.12.24.630215v1">Paper</a> · <a href="paper/Polaris.pdf">PDF</a> · <a href="https://ai4nucleome.github.io/Polaris/">Web Page</a> · <a href="https://github.com/ai4nucleome/Polaris">Code</a>
</div></div>

## Conference

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2026 Main</div><img src='images/able.png' alt="ABLE" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ABLE: Representing and Mapping LLMs via Attribution-Based Large-model Embedding](https://arxiv.org/abs/2606.07524)

Zirui Wang, <strong><u>Yusen Hou</u></strong>, Shaofeng Liang, Bowen Tian, Yanlin Zhang, Wenshuo Chen, Yutao Yue

<em>Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP Main), 2026.</em>

<a href="https://arxiv.org/abs/2606.07524">Paper</a> · <a href="paper/ABLE-EMNLP-2026.pdf">PDF</a> · <a href="https://ziiroo1126.github.io/ABLE/">Web Page</a> · <a href="https://github.com/ziiroo1126/ABLE">Code</a> · <a href="https://2026.emnlp.org/">Conference</a>
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026 Main</div><img src='images/genomeqa.png' alt="GenomeQA" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GenomeQA: Benchmarking General Large Language Models for Genome Sequence Understanding](https://aclanthology.org/2026.acl-long.1655/)

Weicai Long\*, <strong><u>Yusen Hou</u></strong>\*, Junning Feng, Houcheng Su, Shuo Yang, Donglin Xie, Yanlin Zhang

<em>Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (ACL Main), 2026.</em>

<a href="https://aclanthology.org/2026.acl-long.1655/">Paper</a> · <a href="paper/GenomeQA.pdf">PDF</a> · <a href="https://github.com/ai4nucleome/GenomeQA">Code</a>
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2026 Findings</div><img src='images/phagebench.png' alt="PhageBench" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PhageBench: Can LLMs Understand Raw Bacteriophage Genomes?](https://arxiv.org/abs/2604.05775)

<strong><u>Yusen Hou</u></strong>\*, Weicai Long\*, Haitao Hu, Houcheng Su, Junning Feng, Yanlin Zhang

<em>Findings of the Annual Meeting of the Association for Computational Linguistics (Findings of ACL), 2026.</em>

<a href="https://arxiv.org/abs/2604.05775">Paper</a> · <a href="paper/PhageBench.pdf">PDF</a> · <a href="https://yusenhou519.github.io/Phage-Bench/">Web Page</a> · <a href="https://github.com/YusenHou519/Phage-Bench">Code</a>
</div></div>

## Journal

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Patterns 2026 Cover</div><img src='images/biomaster.png' alt="BioMaster" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[BioMaster: multi-agent system for automated bioinformatics analysis workflow](https://www.cell.com/patterns/fulltext/S2666-3899(26)00120-0)

Houcheng Su, Junning Feng, Yawen Lu, Yucheng Xu, Jinming Yang, Haojie Lu, Jixin Yang, Xu Yang, Sirui Xie, Weicai Long, Cheng-Rui Wang, <strong><u>Yusen Hou</u></strong>, Tingyu Zhu, Yanlin Zhang

<em>Patterns (Cell Press), 2026.</em> <span class="highlight-red"><strong>Cover Article 🔥🔥🔥</strong></span>

<a href="https://www.cell.com/patterns/fulltext/S2666-3899(26)00120-0">Paper</a> · <a href="paper/BioMaster.pdf">PDF</a> · <a href="https://ai4nucleome.github.io/BioMaster/">Web Page</a> · <a href="https://github.com/ai4nucleome/BioMaster">Code</a>
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Brief. Bioinform. 2026</div><img src='images/nyxbind.png' alt="NyxBind" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[NyxBind: enhancing deep neural representations for transcription factor binding site prediction via contrastive learning](https://europepmc.org/article/med/42007520)

Xu Yang, Qingfa Xiao, Yucheng Xu, Jixin Yang, <strong><u>Yusen Hou</u></strong>, Weicai Long, Miaojun Huang, Yanlin Zhang

<em>Briefings in Bioinformatics, 2026.</em>

<a href="https://europepmc.org/article/med/42007520">Paper</a> · <a href="paper/NyxBind.pdf">PDF</a> · <a href="https://github.com/ai4nucleome/NyxBind">Code</a>
</div></div>

<span class='anchor' id='presentations'></span>

# Presentations

- **Profiling genomic language models as individuals in a population** · Yusen Hou · <a href="https://www.iscb-cn.org.cn/web/65/list.html">Oral Presentation</a> · iscbAI 2026 (2026)
- **LoopHunter: Enhancing Chromatin Loop Annotation by Focusing on Larger Regions in Hi-C Data** · Yusen Hou, Yanlin Zhang · ISMB Poster (2025)
- **Polaris: a universal tool for chromatin loop annotation in bulk and single-cell Hi-C data** · Yusen Hou · <a href="https://ngic2025.aconf.cn/presentation/38.html">Oral Presentation</a> · NGIC 2025 (2025)
- **LoopHunter: Enhancing Chromatin Loop Annotation by Focusing on Larger Regions in Hi-C Data** · Yusen Hou, Yanlin Zhang · ISMB Poster (2024)

<span class='anchor' id='honors-and-awards'></span>

# Honors and Awards

- Postgraduate Studentship, HKUST(GZ) (2025 — Present)
- Postgraduate Studentship, HKUST(GZ) (2023 — 2025)
- MEXT Honors Scholarship for Privately-Financed International Students, Japanese Government (2022 — 2023)

<span class='anchor' id='educations'></span>

# Educations

- Ph.D. Student, Data Science and Analytics, [HKUST(GZ)](https://hkust-gz.edu.cn/) (2025 — Present)
- MPhil, Data Science and Analytics, [HKUST(GZ)](https://hkust-gz.edu.cn/) (2023 — 2025)
- B.Sc., Chemistry, [Lanzhou University](https://www.lzu.edu.cn/) (2018 — 2022)
