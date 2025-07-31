<script>
document.getElementById('btnContato').addEventListener('click', function() {
  // Evento pelo Pixel (navegador)
  fbq('track', 'Lead');
  
  // Evento pela Conversion API (servidor) - via Fetch
  enviarEventoLeadCAPI();
});

function enviarEventoLeadCAPI() {
  const pixelId = '453046866153158';
  const token = 'EAAQFdZAFNq40BPHV0rPmDZCreaWVPptFZBH8eeoPw9g0QEpL6ry5LZB6c9t8ZC57H8IndrFHqKrMHryFgMTgPGxZC8woZAkYaZCxFMc53cWjBxJy0Je9adZBRlM1QbzUskO0VwdFiWTqGvFhdxgSHAXmuCPiXuUAfdsM0WqCVZCiUaAaYhrOZBmzEL94ZB2rlzyVgQZDZD';
  
  const evento = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: window.location.href,
      }
    ]
  };

  fetch(`https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(evento)
  })
  .then(res => res.json())
  .then(data => console.log("Evento Lead enviado:", data))
  .catch(err => console.error("Erro:", err));
}
</script>
