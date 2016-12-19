// helper functions located here

/*
* @param height{number} - height in inches
*@param weight{number} - weight in pounds
*/
function calcBMI(height, weight){
  let bmi = (weight * 0.45) / Math.pow(height * 0.025 , 2);
  bmi = Math.round(bmi * 10) / 10;
  return bmi;
}
