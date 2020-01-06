const { kebabToCamel } = require('./index.js');

const testObj = {
  'first-name': 'foo',
  'last-name': 'bar',
  'alreadyInCamelCase': 'testingCamelCase',
  'address': {
    'house': '23',
    'street': '5'
  },
  'fav-books': [
    {
      'author-name': 'JFK Rowling',
      'complete-title': 'hairy potta'
    },
    {
      'author-name': 'Dante brownie',
      'complete-title': 'The chi chi code'
    },
    {
      'author-name': 'Jordaan peteson',
      'complete-title': '12 rules for a thug life'
    },
    [
      'lord of the rings 1',
      'lord of the rings 2',
      'lord of the rings 3',
      'lord of the rings 4',
    ],
    [
      {
        'author-name': 'writer of game of thrones',
        'complete-title': 'GOT vol - 1 '
      },
      {
        'author-name': 'writer of game of thrones',
        'complete-title': 'GOT vol - 3 '
      }, {
        'author-name': 'writer of game of thrones',
        'complete-title': 'GOT vol - 2'
      }
    ]
  ]
}
console.log(kebabToCamel(testObj));