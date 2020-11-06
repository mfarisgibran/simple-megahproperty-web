export const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(price)
}

export const formatBedroomText = (numberOfBedrooms) => {
  if (numberOfBedrooms === 0) {
    return 'Studio'
  } else if (numberOfBedrooms === 1) {
    return '1 Bedroom'
  } else {
    return `${numberOfBedrooms} Bedrooms`
  }
}

export const formatBathroomText = (numberOfBathrooms) => {
  if (numberOfBathrooms === 1) {
    return '1 Bathroom'
  } else {
    return `${numberOfBathrooms} Bathrooms`
  }
}

export const formatLocation = (location) => {
  return `${location.address}, ${location.city}, ${location.province}, ${location.zipCode}`
}
