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

  // 2) validate data
  // TO DO!!

  //3) upload the data to firebase!
  let personRef = database.ref().push();
  personRef.set({
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    timeStamp: moment().unix(), // save the time as a unix number
  });

  // 4) clear form & alert user?
  $("#firstName").val("");
  $("#lastName").val("");
  $("input[name=gender]:checked").prop('checked', false);
  $("#age").val("");

}; // closes the processForm function

// --------- Event Listeners ----------
$("button[class$='submit']").on("click", processForm);
