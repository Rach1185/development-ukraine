# Forward Ukraine

## Map coordinates
When copying the latitude and longitude coordinates from the URL in Google maps, the first coordinate in the URL will become the second coordinate listed in the geojson:

### URL example from Google Maps:

https://www.google.com/maps/place/1211+Connecticut+Ave+NW+%23700,+Washington,+DC+20036/<strong>@38.9063659,-77.0430985,</strong>17z/data=!3m1!4b1!4m2!3m1!1s0x89b7b7b89990842b:0xf86d3e43f5ff4323

In this case, the coordinates are 38.9063659 and -77.0430985. When entering this into the "coordinates" property, reverse the two coordinates, so it looks like this:

{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [
      -77.0430985,
      38.9063659
    ]
  },
