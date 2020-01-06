
const changeCase = (object, formatter) => {
  if (Array.isArray(object)) {
    return object = object.map(element => {
      element = changeCase(element, formatter)
      return element
    })
  }
  return Object.keys(object).reduce((obj, key) => {
    
    switch(true) {
      case Array.isArray(object[key]):
        obj[formatter(key)] = object[key].map(element => {

          element = changeCase(element, formatter);
          return element;
        })
      break;

      case typeof object[key] === 'object':
        obj[formatter(key)] = changeCase(object[key], formatter)
        break;

        default:
          obj[formatter(key)] = object[key];
    }
    return obj
  }, {})
}

const kebabToCamel = (obj) => {
  return changeCase(obj, (key) => {
    return key.split('-').reduce((attribute, word, index)=> {
      attribute += index ? word[0].toUpperCase() + word.substr(1): word
      return attribute
    }, '')
  })
}

module.exports = {
  kebabToCamel: kebabToCamel
}