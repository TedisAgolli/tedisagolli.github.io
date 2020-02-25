function displayUrl(form) {
  let origLatLong = document.getElementById("origLatLong").value.trim();
  let destLatLong = document.getElementById("destLatLong").value.trim();
  let apiKey = "API_KEY_HERE";

  let googleParams = new URLSearchParams({
    origins: origLatLong,
    destinations: destLatLong,
    key: apiKey,
    departure_time: "now",
    mode: "driving",
    units: "imperial"
  }).toString();
  let googleMapsBaseUrl =
    "https://maps.googleapis.com/maps/api/distancematrix/json?";
  let googleMapsUrl = googleMapsBaseUrl + googleParams;

  let [label, logo, color, style] = ["label", "logo", "color", "style"]
    .map(e => document.getElementById(e).value.trim())
    .filter(e => e != undefined);
  let shieldsParams = new URLSearchParams({
    label,
    logo,
    color,
    style,
    url: googleMapsUrl,
    query: "$.rows[0].elements[0].duration_in_traffic.text"
  });

  let shieldsBaseQuery = "https://img.shields.io/badge/dynamic/json?";
  let shieldsFullQuery = shieldsBaseQuery + shieldsParams;
  let badge = document.getElementById("badge");
  badge.src = shieldsFullQuery;
  badge.style.display = "block";
  let genUrl = document.getElementById("generatedUrl");
  genUrl.value = shieldsFullQuery;
  genUrl.style.display = "block";
}
