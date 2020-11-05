import { properties } from './properties.js'

const propertyListElement = document.getElementById('property-list')

const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}

properties.forEach((property) => {
  const propertyElement = document.createElement('div')
  propertyElement.innerHTML = `
  <h1>${property.name}</h1>
  <h2>${formatRupiah(property.price)}</h2> 
  <img src='/images/mfarisgibran-house.webp' height='100'>
  `
  propertyListElement.appendChild(propertyElement)
})
