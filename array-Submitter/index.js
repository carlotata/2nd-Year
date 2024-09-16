var submitButton = document.querySelector("#submit");
var deleteButton = document.querySelector("#delete");
var editButton1 = document.querySelector("#edit1");
var editButton2 = document.querySelector("#edit2");
var displayArray = document.querySelector("#displayInput");
var arrSubmit = [];

function submitInput(){
    var input = submitButton.value.trim();

    if(input !== ''){
         arrSubmit.push(input);
         displayArray.innerHTML = arrSubmit.join(", ");
         submitButton.value = "";
    }
}

function deleteInput(){
    var input = deleteButton.value.trim();
    var index = arrSubmit.indexOf(input);

    if(index !== -1){
        arrSubmit.splice(index, 1); // Fix: Use index, not input
        displayArray.innerHTML = arrSubmit.join(", ");
        deleteButton.value = "";
    } else {
        alert("INPUT NOT FOUND");
    }
}

function editInput(){
    var input1 = editButton1.value.trim();
    var input2 = editButton2.value.trim();
    var index = arrSubmit.indexOf(input1);

    if(input1 === "" || input2 === ""){
        alert("INPUT REQUIRED");
    } else if(index !== -1){
        arrSubmit[index] = input2; // Fix: Replace value directly at the index
        displayArray.innerHTML = arrSubmit.join(", ");
    } else {
        alert("ITEM NOT FOUND");
    }

    editButton1.value = "";
    editButton2.value = "";
}

function clearInput(){
    arrSubmit = []; // Clear the array as well
    displayArray.innerHTML = '';
}
