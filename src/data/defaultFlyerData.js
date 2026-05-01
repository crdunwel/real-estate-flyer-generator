/* src/data/defaultFlyerData.js */

const assetBase = import.meta.env.BASE_URL

export const defaultFlyerData = {
    address: '9940 SW 97th Ct',
    city: 'Miami',
    state: 'FL',
    zip: '33176',
    price: '$860,000',

    primaryColor: '#4f73bf',
    accentColor: '#c93c82',

    beds: '4',
    baths: '2',
    sqft: '1,777',
    summary:
        'Well-kept Miami home with a bright layout, generous lot, and strong everyday livability.',
    highlights: [
        'Move-in ready',
        'Recently renovated kitchen',
        'Large 9,470 sq ft lot',
        'Ideal South Miami location',
    ],
    agentName: 'Danny Quintero',
    phone: '305-987-2570',
    email: 'skylinenotaryllc@gmail.com',

    homeImage: `${assetBase}home.webp`,
    agentImage: `${assetBase}danny.jpeg`,
    logoImage: `${assetBase}logo.png`,
}