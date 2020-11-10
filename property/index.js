import { properties } from '../properties.js'
import {
  formatRupiah,
  formatBedroomText,
  formatBathroomText,
  formatLocation,
} from '../lib.js'

const query = new URLSearchParams(window.location.search)
const id = Number(query.get('id'))

const selectedProperty = properties.find((property) => {
  if (id === property.id) {
    return property
  }
})

const propertyImages = document.getElementById('property-images')
selectedProperty.images.forEach((image) => {
  const imageElement = document.createElement('img')
  imageElement.setAttribute('src', image)
  imageElement.classList.add('property-image')
  propertyImages.appendChild(imageElement)
})

const propertyName = document.getElementById('property-name')
propertyName.innerText = selectedProperty.name

const propertyPrice = document.getElementById('property-price')
propertyPrice.innerText = formatRupiah(selectedProperty.price)

const propertyTypeSubtype = document.getElementById('property-type-subtype')
propertyTypeSubtype.innerText = `${selectedProperty.type} ${selectedProperty.subtype}`

const propertyBedroom = document.getElementById('property-bedroom')
propertyBedroom.innerText = formatBedroomText(selectedProperty.numberOfBedrooms)

const propertyBathroom = document.getElementById('property-bathroom')
propertyBathroom.innerText = formatBathroomText(
  selectedProperty.numberOfBathrooms
)

const propertyUnitSize = document.getElementById('property-unit-size')
propertyUnitSize.innerText = selectedProperty.unitSize

const propertyLocation = document.getElementById('property-location')
propertyLocation.innerText = formatLocation(selectedProperty.location)

const propertyNearestObjects = document.getElementById(
  'property-nearest-objects'
)

selectedProperty.listOfNearestObjects.forEach((nearestObject) => {
  const nearestObjectElement = document.createElement('li') // HTML Element
  nearestObjectElement.innerText = nearestObject // 'Superindo'
  propertyNearestObjects.appendChild(nearestObjectElement)
})
