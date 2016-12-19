"use strict";
// processForm
function processForm(event){
  // 0) prevent default of the page refreshing
  event.preventDefault();
  // 1) get all the form data
  // const form = document.querySelector("form");
  // const input_arr = Array.from(form.querySelectorAll("input"));
  let firstName = $("#firstName").val().trim();
  let lastName = $("#lastName").val().trim();
  // console.log(firstName);
  // console.log(lastName);

  // 2) validate data
  // TO DO

  //3) upload the data to firebase!
  let personRef = database.ref().push();
  personRef.set({
    firstName: firstName,
    lastName: lastName,
  });

  // 4) clear form & alert user?
  $("#firstName").val("");
  $("#lastName").val("");

}; // closes the processForm function

// --------- Event Listeners ----------
$("button[class$='submit']").on("click", processForm);
