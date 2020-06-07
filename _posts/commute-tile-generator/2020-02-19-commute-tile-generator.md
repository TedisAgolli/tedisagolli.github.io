---
layout: page
title: Commute time badge generator
excerpt_separator: <!--more-->
---

<meta charset="utf-8" />
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
<html>
  <script src="/assets/commute/script.js"></script>
  <body>
    <div class="container">
      <div class="row">
        <p style="font-size:1.5rem">
          This form helps you generate a badge that displays the commute time
          between two points. <br/>For example: <img src="/assets/commute/exampleTile.png" />
          <br />
          It uses the
          <a
            href="https://developers.google.com/maps/documentation/distance-matrix/intro"
            >Google Maps API Distance Matrix</a
          >
          to get the travel distance and
          <a href="https://shields.io/">shields.io</a> to generate the badge. I
          built this for people who want to include a commute tile in their
          SharpTools dashboard, but the generated badge can be used for
          anything.
        </p>
      </div>
      <!--more-->
      <div class="row">
        <form class="col-lg-6 offset-lg-3 ">
          <h3 class="text-center">Google Maps</h3>
          <ul>
          <li><p>Pick a place in maps and grab lat, long from the URL <br/><em>/maps/place/$PLACE_NAME/@lat,long</em></p></li>
          <li><p id='adviceText'>Replace API_KEY_HERE with your API in the generated route</p></li>
          </ul>
          <label>Origin</label>
          Lat,Long <input type="text" id="origLatLong" class="form-control" />
          <br />
          <label>Destination</label>
          Lat,Long<input type="text" id="destLatLong" class="form-control" />
          <br />
          <h3 class="text-center"><a href='https://shields.io/'>Shields.io</a></h3>
          <p>The shields.io website has documentation on the possible values</p>
          Label (optional) <input type="text" id="label" class="form-control" />
          <br />
          Logo (optional) <input type="text" id="logo" class="form-control" />
          <br />
          Color (optional) <input type="text" id="color" class="form-control" />
          <br />
          Style (optional) <input type="text" id="style" class="form-control" />
          <br />
          <input
            type="button"
            value="Generate"
            class="btn btn-primary"
            onclick="displayUrl(this.form);return false;"
          />
        </form>
      </div>
      <div class="row">
        <div class="col-lg-6 offset-lg-3 ">
          <div class="row justify-content-center mb-4">
            <img id="badge" src='https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fdistancematrix%2Fjson%3Forigins%3D%26destinations%3D%26key%3DAPI_KEY_HERE%26departure_time%3Dnow%26mode%3Ddriving%26units%3Dimperial&query=%24.rows%5B0%5D.elements%5B0%5D.duration_in_traffic.text' />
          </div>
          <div class="row mb-4">
            <textarea
              class="form-control"
              type="text"
              id="generatedUrl"
              rows="8"
            >https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fdistancematrix%2Fjson%3Forigins%3D%26destinations%3D%26key%3DAPI_KEY_HERE%26departure_time%3Dnow%26mode%3Ddriving%26units%3Dimperial&query=%24.rows%5B0%5D.elements%5B0%5D.duration_in_traffic.text
            </textarea>
          </div>
        </div>
      </div>
    </div>

  </body>

</html>
