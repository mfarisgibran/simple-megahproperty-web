import { properties } from '../properties.js'
import { formatRupiah } from '../index.js'

const query = new URLSearchParams(window.location.search)
const id = Number(query.get('id'))

const selectedProperty = properties.find((property) => {
  if (id === property.id) {
    return property
  }
})

const propertyPrice = document.getElementById('property-price')

propertyPrice.innerText = selectedProperty.price
