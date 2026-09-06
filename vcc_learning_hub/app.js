const adataContent = {
  x: ["EXPRESSION MATRIX", "adata.X", "形状为 [n_cells, n_genes]。2026 controls 的 X 是 sparse raw counts；提交也必须是非负整数 counts。", [["shape", "(18_400, 18_533)"], ["注意", "不要直接 .toarray()"]]],
  obs: ["CELL METADATA", "adata.obs", "每一行对应一个 cell。比赛 controls 中最重要的列是 target_gene、context 和 ntc_id。", [["index", "cell barcode / stable id"], ["VCC", "target_gene · context · ntc_id"]]],
  var: ["GENE METADATA", "adata.var", "每一行对应一个 gene。var_names 是官方 gene symbols，所有数据必须按名字显式对齐。", [["index", "18,533 official genes"], ["规则", "同维度 ≠ 同顺序"]]],
  layers: ["PARALLEL MATRICES", "adata.layers", "保存与 X 相同 shape 的平行矩阵。常在 layers['counts'] 保留 raw counts，在 X 中进行 normalized analysis。", [["常见", "layers['counts']"], ["shape", "n_cells × n_genes"]]],
  obsm: ["CELL REPRESENTATIONS", "adata.obsm", "保存每个 cell 的多维表示，例如 PCA、UMAP 或模型 embedding；第一维必须等于 n_cells。", [["示例", "X_pca · X_umap · X_state"], ["shape", "(n_cells, embedding_dim)"]]],
  uns: ["UNSTRUCTURED METADATA", "adata.uns", "保存不沿 cell 或 gene 对齐的配置、分析参数和其他元数据。", [["类型", "mapping / nested metadata"], ["用途", "analysis provenance"]]]
};

const search = document.querySelector("#term-search");
const filters = Array.from(document.querySelectorAll(".filter"));
const cards = Array.from(document.querySelectorAll(".term-card"));
const empty = document.querySelector("#term-empty");
let activeFilter = "all";

function filterTerms() {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  cards.forEach(function (card) {
    const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
    const text = (card.textContent + " " + (card.dataset.search || "")).toLocaleLowerCase();
    const show = categoryMatch && (!query || text.includes(query));
    card.hidden = !show;
    if (show) visible += 1;
  });
  empty.hidden = visible !== 0;
}
search.addEventListener("input", filterTerms);
filters.forEach(function (button) {
  button.addEventListener("click", function () {
    activeFilter = button.dataset.filter;
    filters.forEach(function (item) { item.classList.toggle("active", item === button); });
    filterTerms();
  });
});

const tabs = Array.from(document.querySelectorAll(".adata-tab"));
const detail = document.querySelector("#adata-detail");
tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    const data = adataContent[tab.dataset.adata];
    tabs.forEach(function (item) { item.classList.toggle("active", item === tab); });
    const lines = data[3].map(function (line) {
      return '<div class="code-line"><span>' + line[0] + '</span><code>' + line[1] + "</code></div>";
    }).join("");
    detail.innerHTML =
      '<p class="card-kicker">' + data[0] + "</p>" +
      "<h3><code>" + data[1] + "</code></h3>" +
      "<p>" + data[2] + "</p>" + lines;
  });
});

const STORAGE_KEY = "vcc2026-learning-progress-v1";
const tasks = Array.from(document.querySelectorAll("input[data-task]"));
const progressBar = document.querySelector("#roadmap-progress-bar");
const progressPercent = document.querySelector("#roadmap-percent");
const headerBar = document.querySelector("#header-progress-bar");
const headerLabel = document.querySelector("#header-progress-label");

function readProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
  catch (_) { return {}; }
}
function saveProgress() {
  const state = {};
  tasks.forEach(function (task) { state[task.dataset.task] = task.checked; });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function updateProgress() {
  const completed = tasks.filter(function (task) { return task.checked; }).length;
  const percent = tasks.length ? Math.round(completed / tasks.length * 100) : 0;
  progressBar.style.width = percent + "%";
  headerBar.style.width = percent + "%";
  progressPercent.textContent = percent + "%";
  headerLabel.textContent = percent + "%";
  document.querySelectorAll(".phase").forEach(function (phase) {
    const phaseTasks = Array.from(phase.querySelectorAll("input[data-task]"));
    phase.classList.toggle("complete", phaseTasks.length > 0 && phaseTasks.every(function (task) { return task.checked; }));
  });
}

const saved = readProgress();
tasks.forEach(function (task) {
  task.checked = Boolean(saved[task.dataset.task]);
  task.addEventListener("change", function () { saveProgress(); updateProgress(); });
});
updateProgress();

document.querySelector("#reset-progress").addEventListener("click", function () {
  if (!window.confirm("确定要清空当前浏览器中的所有学习进度吗？")) return;
  tasks.forEach(function (task) { task.checked = false; });
  saveProgress();
  updateProgress();
});

const reveals = Array.from(document.querySelectorAll(".reveal"));
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px" });
  reveals.forEach(function (element) { observer.observe(element); });
} else {
  reveals.forEach(function (element) { element.classList.add("visible"); });
}

const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const navSections = navLinks.map(function (link) {
  return document.querySelector(link.getAttribute("href"));
}).filter(Boolean);
if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(function (entries) {
    const visible = entries.filter(function (entry) { return entry.isIntersecting; })
      .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];
    if (!visible) return;
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + visible.target.id);
    });
  }, { rootMargin: "-25% 0px -60%", threshold: [0, 0.15, 0.4] });
  navSections.forEach(function (section) { navObserver.observe(section); });
}
