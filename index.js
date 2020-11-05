import { properties } from './properties.js'

const propertyListElement = document.getElementById('property-list')

const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
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
  <p>${property.numberOfBedrooms} bd ${property.numberOfBathrooms} ba ${
    property.unitSize
  } m²</p>
  <p>${formatLocation(property.location)}</p>
  <hr/>
  `
  propertyListElement.appendChild(propertyElement)
})
