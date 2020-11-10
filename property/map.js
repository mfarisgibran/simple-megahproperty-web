import { selectedProperty } from './index.js'

console.log(selectedProperty)

mapboxgl.accessToken =
  'pk.eyJ1IjoibWZhcmlzZ2licmFuIiwiYSI6ImNraGJya255dDAxb3gycXJyeGtkYzZiMDkifQ.X_LDYlGazaVHv4Uff3H1PQ'

const latLng = [
  selectedProperty.location.geolocation.lng, // longitude
  selectedProperty.location.geolocation.lat // latitude
]

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: latLng,
  zoom: 15
})

const marker = new mapboxgl.Marker().setLngLat(latLng).addTo(map)
