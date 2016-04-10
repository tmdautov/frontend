

// use json.parse to convert string to javascript object(json)


function generate_json() {
  var text = '{ "employees" : 
  [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" }]
  }';
  
  var obj = JSON.parse(text);
  
  return obj; 
  
}
