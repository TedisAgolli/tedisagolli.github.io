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

  let shieldsVisualParams = {};
  ["label", "logo", "color", "style"].forEach(e => {
    let formVal = document.getElementById(e).value.trim();
    if (formVal != "") {
      shieldsVisualParams[e] = formVal;
    }
  });

  console.log(shieldsVisualParams);

  let shieldsParams = new URLSearchParams({
    ...shieldsVisualParams,
    url: googleMapsUrl,
    query: "$.rows[0].elements[0].duration_in_traffic.text"
  });

  let shieldsBaseQuery = "https://img.shields.io/badge/dynamic/json?";
  let shieldsFullQuery = shieldsBaseQuery + shieldsParams;
  let badge = document.getElementById("badge");
  badge.src = shieldsFullQuery;
  let genUrl = document.getElementById("generatedUrl");
  genUrl.value = shieldsFullQuery;
}
