function logTwoValues(value1, value2) {
  console.log(`The two values are ${value1} and ${value2}.`);
}

function logPhrase(phrase) {
  console.log(phrase);
}

function introduction(name) {
  return `Hi, my name is ${name}.`;
}
console.log(introduction("Ada"));


function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Aki", "Ember.js"));

function logPhrase(name, language) {
  return introductionWithLanguage(name, language);
}

console.log(logPhrase("Aki", "Ember.js"));

function introductionWithLanguageOptional(Gracie, JavaScript = 'JavaScript') {
  return `Hi, my name is ${Gracie} and I am learning to program in ${JavaScript}.`;
}