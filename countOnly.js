const assertEqual = function(actual, expected) {
 if (actual === expected) {
   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
 } else {
   console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
 }
};

const countOnly = function(allItems, itemsToCount) {
 const result = {}

for (var item in allItems) {
 if(itemsToCount[item] === true) {
   if (result[item] !== undefined) result[item]++;
   else result[item] = 1;
   }
 }
 return result;
};


//Test code
const firstNames = [
 "Karl",
 "Salima",
 "Agouhanna",
 "Fang",
 "Kavith",
 "Jason",
 "Salima",
 "Fang",
 "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);