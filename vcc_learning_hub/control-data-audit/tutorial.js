if (navigator.clipboard && window.isSecureContext) {
  document.querySelectorAll('.copy-code').forEach(function (button) {
    button.hidden = false;
    button.addEventListener('click', async function () {
      try {
        await navigator.clipboard.writeText(button.closest('.code-cell').querySelector('code').textContent);
        button.textContent = '已复制';
      } catch (_) {
        button.textContent = '请选中代码复制';
      }
      setTimeout(function () { button.textContent = '复制代码'; }, 2500);
    });
  });
}
