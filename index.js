import { properties } from './properties.js'
import {
  formatRupiah,
  formatBedroomText,
  formatBathroomText,
  formatLocation
} from './lib.js'

const propertyListElement = document.getElementById('property-list')

const displayProperties = () => {
  properties.forEach((property) => {
    const propertyElement = document.createElement('a')
    propertyElement.classList.add('property')
    propertyElement.setAttribute(
      'href',
      `/property/index.html?id=${property.id}`
    )

    propertyElement.innerHTML = `
    <img class="property-image" src="${
      property.images[0]
    }" height="250" width="350"/>
    <div class="property-info">
    <h1 class="property-name">${property.name}</h1>
    <h2 class="property-price">${formatRupiah(property.price)}</h2>
    <h3>${property.type} ${property.subtype}</h3>
    <p>
    <span>${formatBedroomText(property.numberOfBedrooms)} |</span>
    <span>${formatBathroomText(property.numberOfBathrooms)} |</span>
    <span>${property.unitSize} m²</span>
    </p>
    <p>${formatLocation(property.location)}</p>
    </div>
    `

    propertyListElement.appendChild(propertyElement)
  })
}

displayProperties()
