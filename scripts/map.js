document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([-23.550520, -46.633308], 13);
  
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
   
    var recyclingCenters = [
      { lat: -23.55652, lng: -46.637099, name: "Ecoponto, Liberdade" },
      { lat: -23.539283, lng: -46.622342, name: "Ecoponto, Mendes Caldeira" },  
      { lat: -23.527086, lng: -46.648514, name: "Ecoponto, Barra Funda" },
      { lat: -23.520902, lng: -46.64351, name: "Ecoponto, General Flores" }
    ];
  
   
    recyclingCenters.forEach(function(center) {
      L.marker([center.lat, center.lng]).addTo(map)
        .bindPopup(center.name);
    });
  });
  