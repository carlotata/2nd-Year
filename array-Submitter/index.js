var submitButton = document.querySelector("#submit");
var deleteButton = document.querySelector("#delete");
var editButton1 = document.querySelector("#edit1");
var editButton2 = document.querySelector("#edit2");
var displayArray = document.querySelector("#displayInput");
var arrSubmit = JSON.parse(localStorage.getItem("savedArray")) || [];

function updateDisplay() {
  displayArray.innerHTML = arrSubmit.join(", ");
  localStorage.setItem("savedArray", JSON.stringify(arrSubmit));
}

function submitInput() {
  var input = submitButton.value.trim();

  if (input !== "") {
    arrSubmit.push(input);
    updateDisplay();
    submitButton.value = "";
  } else {
    swal("INPUT NEEDED", "", "error");
  }
}

function deleteInput() {
  var input = deleteButton.value.trim();
  var index = arrSubmit.indexOf(input);

  if (index !== -1) {
    arrSubmit.splice(index, 1); // Fix: Use index, not input
    updateDisplay();
  } else {
    swal("INPUT NOT FOUND", "", "error");
  }
  deleteButton.value = "";
}

function editInput() {
  var input1 = editButton1.value.trim();
  var input2 = editButton2.value.trim();
  var index = arrSubmit.indexOf(input1);

  if (input1 === "" || input2 === "") {
    swal("INPUT NEEDED", "", "error");
  } else if (index !== -1) {
    arrSubmit[index] = input2; // Fix: Replace value directly at the index
    updateDisplay();
  } else {
    swal("INPUT NOT FOUND", "", "error");
  }

  editButton1.value = "";
  editButton2.value = "";
}

function clearInput() {
  arrSubmit = []; // Clear the array as well
  updateDisplay();
}

function display() {
  updateDisplay();
}

window.onload = display;
