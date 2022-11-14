window.onload = function() {
    const docs = document.getElementById('docs');
    const origin = location.origin;
    docs.apiDescriptionUrl = `https://raw.githubusercontent.com/cloudflare/api-schemas/main/openapi.json`;
  };