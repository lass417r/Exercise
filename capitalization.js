// Given a single name string in an unknown case, e.g. “peter” or “PETER” -
//create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

//Hint: use substring, toUpperCase, toLowerCase and simple string concatenation

// ----- Exercise - capitalize( str ) -----

const name = "lAsSe";

capitalize(name);

function capitalize(str) {
  let capitalizedName = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  console.log(`My name is ${capitalizedName}`);
}
