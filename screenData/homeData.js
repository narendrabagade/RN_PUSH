export default {
  'links': [{
    'id': 'RECEIVING',
    'title': 'RECEIVING',
    'icon': require('../styles/images/home-receiving-icon.png'),
    'availableForYards' : 'ALL',
    'exceptYards': [],
    'navigationKey' : 'receivingPage'
  },
  {
    'id': 'IMAGES',
    'title': 'IMAGES_PENDING',
    'icon': require('../styles/images/home-image-retake-icon.png'),
    'availableForYards' : 'ALL',
    'exceptYards': [],
    'navigationKey' : 'receivingPage'
  },
  {
    'id': 'SERVICEORDERS',
    'title': 'SERVICE ORDERS',
    'icon': require('../styles/images/home-srvc-order-icon.png'),
    'availableForYards' : 'ALL',
    'exceptYards': [],
    'navigationKey' : 'serviceOrderPage'
  },
  {
    'id': 'SSOREIMAGE',
    'title': 'SUGGEST SERVICE ORDER/REIMAGE',
    'icon': require('../styles/images/home-create-srvc-order-icon.png'),
    'availableForYards' : '',
    'exceptYards': [],
    'navigationKey' : 'suggestServiceOrdersPage'
  },
  {
    'id': 'SALEMOVEOVER',
    'title': 'SALE MOVE OVER',
    'icon': require('../styles/images/home-sale-move-over-icon.png'),
    'availableForYards' : ['201'],
    'exceptYards': [],
    'navigationKey' : 'receivingPage'
  },
  {
    'id': 'LOTSEARCH',
    'title': 'LOT SEARCH',
    'icon': require('../styles/images/home-lot-search-icon.png'),
    'availableForYards' : ['201'],
    'exceptYards': [],
    'navigationKey' : 'receivingPage'
  },
  {
    'id': 'SALEPREPARATION',
    'title': 'SALE PREPARATION',
    'icon': require('../styles/images/home-sales-prep-icon.png'),
    'availableForYards' : ['54'],
    'exceptYards': [],
    'navigationKey' : 'receivingPage'
  }
] }
