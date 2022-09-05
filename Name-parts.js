"use strict";

// 1: First exercise
// const fullName = "Lasse Godtkjær Andersen";
// let firstSpace = fullName.indexOf(" ");
// let seccondSpace = fullName.lastIndexOf(" ");
// let lenght = fullName.length;

// let firstName = fullName.substring(0, firstSpace);
// let middleName = fullName.substring(firstSpace, seccondSpace).trim();
// let lastName = fullName.substring(seccondSpace, lenght).trim();

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

// 2: Seccond exercise

const fullName = "Lasse Godtkjær Andersen";

getNameParts();

function getNameParts(fullname) {
  let firstSpace = fullName.indexOf(" ");
  let seccondSpace = fullName.lastIndexOf(" ");
  let lenght = fullName.length;

  let firstName = fullName.substring(0, firstSpace);
  let middleName = fullName.substring(firstSpace, seccondSpace).trim();
  let lastName = fullName.substring(seccondSpace, lenght).trim();
  console.log({ firstName, middleName, lastName });
}
