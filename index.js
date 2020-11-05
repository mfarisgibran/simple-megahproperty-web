import { properties } from './properties.js'

const propertyListElement = document.getElementById('property-list')

console.log(properties[0])

properties.forEach((property) => {
  const propertyElement = document.createElement('div')
  propertyElement.innerHTML = `
  <h1>${property.name}</h1>
  <h2>${property.price}</h2> 
  <img src='/images/mfarisgibran-house.webp' height='100'>
  `
  propertyListElement.appendChild(propertyElement)
})
