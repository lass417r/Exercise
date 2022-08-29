"use strict";

const fullName = "Lasse Godtkjær Andersen";
let firstSpace = fullName.indexOf(" ");
let seccondSpace = fullName.lastIndexOf(" ");
let lenght = fullName.length;

let firstName = fullName.substring(0, firstSpace);
let middleName = fullName.substring(firstSpace, seccondSpace).trim();
let lastName = fullName.substring(seccondSpace, lenght).trim();

console.log(firstName);
console.log(middleName);
console.log(lastName);
