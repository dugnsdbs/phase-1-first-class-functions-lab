const returnFirstTwoDrivers = function(array){
  return array.slice(0,2);
}

const returnLastTwoDrivers = function (array){
  return array.slice((array.length-2), (array.length));
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers ];

function createFareMultiplier(number){
   return function fareNumber (fare){
     return fare * number; 
    }
  };


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func){
  if(func === returnFirstTwoDrivers){
    return func(returnFirstTwoDrivers(arrayOfDrivers));
  }else{
    return func(returnLastTwoDrivers(arrayOfDrivers));
  }
}
