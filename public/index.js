window.onload = function() {
    const docs = document.getElementById('docs');
    const origin = location.origin;
    docs.apiDescriptionUrl = `https://api.cyberjake.xyz/cors?api_url=api.cloudflare.com/schemas.json&allowed_origin=${origin}`;
  };
