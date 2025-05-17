(function() {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const url = prefersLight
    ? 'https://raw.githubusercontent.com/SolidityAI/Bart/refs/heads/main/index_light.html'
    : 'https://raw.githubusercontent.com/SolidityAI/Bart/refs/heads/main/index.html';

  // Fetch the replacement HTML early
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.open();   // Clears current document
      document.write(html);
      document.close();
    })
    .catch(err => console.error('Failed to replace HTML:', err));
})();
