import { properties } from '../properties.js'
import { formatRupiah } from '../lib.js'

const query = new URLSearchParams(window.location.search)
const id = Number(query.get('id'))

const selectedProperty = properties.find((property) => {
  if (id === property.id) {
    return property
  }
})

const propertyPrice = document.getElementById('property-price')
propertyPrice.innerText = formatRupiah(selectedProperty.price)

const propertyNearestObjects = document.getElementById(
  'property-nearest-objects'
)

selectedProperty.listOfNearestObject.forEach((nearestObject) => {
  const nearestObjectElement = document.createElement('li') // HTML Element
  nearestObjectElement.innerText = nearestObject // 'Superindo'
  propertyNearestObjects.appendChild(nearestObjectElement)
})
