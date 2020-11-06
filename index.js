import { properties } from './properties.js'

const propertyListElement = document.getElementById('property-list')

export const formatRupiah = (price) => {
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
