mapboxgl.accessToken =
  'pk.eyJ1IjoibWZhcmlzZ2licmFuIiwiYSI6ImNraGJya255dDAxb3gycXJyeGtkYzZiMDkifQ.X_LDYlGazaVHv4Uff3H1PQ'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [106.94759, -6.28132],
  zoom: 15
})

const marker = new mapboxgl.Marker().setLngLat([106.94759, -6.28132]).addTo(map)
