/*
* Maintainer: Muhammad Raafay Rashid Khan 
* Email: raafayrashid@icloud.com
*/

/*  
* Function takes a javascript object and recursively applies the supplied formatter
* function.
* @Param object: javascript object that is going to be converted
* @Param formatter: function that changes the notation of keys/attributes of the
* object
*/
const changeCase = (object, formatter) => {
  if (Array.isArray(object)) { // checks if the supplied object is an array
    return object = object.map(element => {
      // if the elements inside the array are objects ( including arrays ) then recursively apply the changeCase function
      //  otherwise return the element ( primative types )
      return typeof element === 'object' ? element = changeCase(element, formatter) : element
    })
  }
  return Object.keys(object).reduce((obj, key) => { // iterate over the keys of the object
    // if the key of the object refer to another nested object, then pass it recursively to the changeCase function
    // otherwise if the key refers to a primitive value return the value
    obj[formatter(key)] = object[key] && typeof object[key] === 'object' ? changeCase(object[key], formatter) : object[key]
    return obj;
  }, {})
}

/* 
* Function converts an object from kebab case to JS friendly camel case
* @Param obj: javascript object
*/
const kebabToCamel = (obj) => {
  return changeCase(obj, (key) => {
    return key.split('-').reduce((attribute, word, index)=> {
      attribute += index ? word[0].toUpperCase() + word.substr(1): word.toLowerCase()
      return attribute
    }, '')
  })
}

/*
* Function converts an object from camel case to kebab case notation
* @Param obj: javascript object
*/
const camelToKebab = (obj) => {
  return changeCase(obj, (key) => {
    return key.split('').reduce((attribute, character, index) => { // convert to char array
      // iterate over key as a string
        if (index === 0) {
          return attribute += character.toLowerCase()
        }
        if (character === character.toUpperCase()) {
          return attribute += `-${character.toLowerCase()}`
        }
        return attribute += character   
    }, '')
  })
}

/* 
* Function converts an object from kebab case to JS friendly camel case
* @Param obj: javascript object
*/
const snakeCaseToCamel = (obj) => {
  return changeCase(obj, (key) => {
    return key.split('_').reduce((attribute, word, index)=> {
      attribute += index ? word[0].toUpperCase() + word.substr(1): word.toLowerCase()
      return attribute
    }, '')
  })
}



/*
* Function converts an object from camel case to kebab case notation
* @Param obj: javascript object
*/
const camelToSnake = (obj) => {
  return changeCase(obj, (key) => {
    return key.split('').reduce((attribute, character, index) => { // convert to char array
      // iterate over key as a string
        if (index === 0) {
          return attribute += character.toLowerCase()
        }
        if (character === character.toUpperCase()) {
          return attribute += `_${character.toLowerCase()}`
        }
        return attribute += character   
    }, '')
  })
}

module.exports = {
  camelToKebab: camelToKebab,
  kebabToCamel: kebabToCamel
}
