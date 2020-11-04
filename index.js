const properties = [
  {
    price: 2500000000,
    type: 'House',
    name: `M Faris Gibran's House`,
    owner: `Djoko Sri Martoyo`,
    developer: '',
    yearBuilt: 1997,
    lotSize: 700,
    unitSize: 450,
    numberOfBedrooms: 4,
    numberOfBathrooms: 4,
    parkingLot: true,
    listOfNearestObject: [
      'Superindo',
      'Fresh Market',
      'SMP 123',
      'SD Al-Azhar',
      'Jatibening Toll Gate',
      'Indomaret',
      'Alfamart',
      'ATM',
      'Pertamina Petrol Station',
    ], // Array
    location: {
      address: 'Jl. H. Gemin No. 47',
      city: 'Bekasi',
      province: 'Jawa Barat',
      zipCode: '17421',
      country: 'Indonesia',
      geolocation: {
        lat: -6.28132,
        long: 106.94759,
      }, //Object
    },
  },

  {
    price: 1400000000,
    type: 'Apartment',
    subtype: '2 BR Type A',
    name: 'Vasaka Nines',
    owner: 'Waskita',
    developer: 'Waskita',
    yearBuilt: 2018,
    lotSize: 0,
    unitSize: 46,
    numberOfBedrooms: 2,
    numberOfBathrooms: 1,
    parkingLot: true,
    listOfNearestObject: [
      'Teraskota',
      'Giant BSD',
      'Pasar Modern',
      'The Breeze BSD',
      'ICE BSD',
    ], // Array
    location: {
      address: 'CBD Serpong Lot I No. 9',
      city: 'Tangerang Selatan',
      province: 'Banten',
      zipCode: '',
      country: 'Indonesia',
      geolocation: {
        lat: -6.2937617,
        long: 106.6623471,
      }, //Object
    },
  },

  {
    price: 0,
    type: '',
    name: ``,
    owner: ``,
    developer: '',
    yearBuilt: 2000,
    lotSize: 0,
    unitSize: 0,
    numberOfBedrooms: 0,
    numberOfBathrooms: 0,
    parkingLot: true,
    listOfNearestObject: [''], // Array
    location: {
      address: '',
      city: '',
      province: '',
      zipCode: '',
      country: '',
      geolocation: {
        lat: 0,
        long: 0,
      }, //Object
    },
  },
]
