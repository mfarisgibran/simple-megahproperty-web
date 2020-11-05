import { properties } from './properties.js'

const propertyListElement = document.getElementById('property-list')

const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

const formatBedroomText = (numberOfBedrooms) => {
  if (numberOfBedrooms === 0) {
    return 'Studio'
  } else if (numberOfBedrooms === 1) {
    return '1 Bedroom'
  } else {
    return `${numberOfBedrooms} Bedrooms`
  }
}

const formatBathroomText = (numberOfBathrooms) => {
  if (numberOfBathrooms === 1) {
    return '1 Bathroom'
  } else {
    return `${numberOfBathrooms} Bathrooms`
  }
}

const formatLocation = (location) => {
  return `${location.address}, ${location.city}, ${location.province}, ${location.zipCode}`
}

properties.forEach((property) => {
  const propertyElement = document.createElement('div')
  propertyElement.innerHTML = `
  <img src='/images/mfarisgibran-house.webp' height='100'/>
  <h1>${property.name}</h1>
  <h2>${property.type} ${property.subtype}</h2>
  <h3>${formatRupiah(property.price)}</h3>
  <p>${formatBedroomText(property.numberOfBedrooms)} ${formatBathroomText(
    property.numberOfBathrooms
  )} ${property.unitSize} m²</p>
  <p>${formatLocation(property.location)}</p>
  <hr/>
  `
  propertyListElement.appendChild(propertyElement)
})
