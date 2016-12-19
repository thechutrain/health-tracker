"use strict";
// processForm
function processForm(event){
  // 0) prevent default of the page refreshing
  event.preventDefault();
  // 1) get all the form data
  let firstName = $("#firstName").val().trim();
  let lastName = $("#lastName").val().trim();
  let gender = $("input[name=gender]:checked").val();
  let age = $("#age").val().trim();
  let weight = $("#weight").val().trim();
  // console.log(weight);
  // calculate the height in inches
  let height_feet = $("#height_feet :selected").val();
  let height_inches = $("#height_inches :selected").val();
  let total_height = Number(height_feet) * 12 + Number(height_inches);
  // calculate BMI
  let bmi = calcBMI(total_height, weight);


  // console.log(total_height);
  // console.log(typeof feet);

  // 2) validate data
  // TO DO!!

  //3) upload the data to firebase!
  let personRef = database.ref().push();
  personRef.set({
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    weight: weight,
    height: total_height,
    bmi: bmi,
    timeStamp: moment().unix(), // save the time as a unix number
  });

  // 4) clear form & alert user?
  $("#firstName").val("");
  $("#lastName").val("");
  $("input[name=gender]:checked").prop('checked', false);
  // $("select[name=height_feet]:selected").prop("selectedIndex", 0);
  $("#weight").val("");
  $("#age").val("");


}; // closes the processForm function

// --------- Event Listeners ----------
$("button[class$='submit']").on("click", processForm);
