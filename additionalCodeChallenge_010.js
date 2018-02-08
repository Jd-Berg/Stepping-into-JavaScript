function getAverage (a,b,c,d,e) {

  var average = (a + b + c + d) / 5;
  console.log (average);
  return average;

}

var myResult = getAverage (7,8,9,10,11);
console.log("the average is " + myResult);





function getDifference (a,b) {

  var difference = (a - b);
  console.log (difference);
  return difference;

}

var myResultDifference = getDifference (15,10);
console.log("the difference is " + myResultDifference);





function combineStrings (a,b){

  var a ="jd";
  var b ="berg";
  var strings = (a + b);
  console.log(strings);
  return strings;

}

var myResultStrings = combineStrings(jd,berg);
console.log(myResultStrings);
