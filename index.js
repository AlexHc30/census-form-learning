let nameInput = document.querySelector("#firstname");
function displayName() {

}

function displayGender() {
  let genders = document.getElementsByName("gender");

  for (let i=0; i<genders.length; i++) {
    if (genders[i].checked) {
      console.log(genders[i].value);
    }
  }
}


//1. Afiseaza in consola toate nivelele de educatie selectate
function displayEducation() {
let education = document.getElementsByName("education");

  for (let x=0; x<education.length; x++) {
    if (education[x].checked) {
      console.log(education[x].value);
    }
  }
}

//2. Afiseaza continutul din special mentions doar daca are mai mult de 30 de caractere
function displaySpecialMentions() {
  let mentions = document.getElementById('mentions');
  if (mentions.textLength > 30) { 

    console.log(mentions.value);  
  }
}

//3. Cand apesi pe submit, daca nu au fost completate numele, prenumele si cnp-ul, sa scri textul "Eroare <camp_lipsa>" in consola\
let lastNameInput = document.querySelector("#lastname");
let cnp = document.querySelector("#cnp");
let emptyField = '';


function missingValues() {
  if (nameInput.value == "") {
    emptyField = '<first name> ';
    nameInput.classList.add("errorInput");
  }
  if (lastNameInput.value == "") {
    lastNameInput.classList.add("errorInput");
    emptyField += '<last name> ';
  }
  if (cnp.value == "") {
    cnp.classList.add("errorInput");
    emptyField += '<CNP> ';
  }
  let error = document.querySelector("#mandatoryFieldsError");
  if (emptyField) {
    error.innerText = `Error, the following values are missing: ${emptyField}`;
  } else {
    error.innerText = "";
    cnp.classList.remove("errorInput");
  }
  emptyField = '';
}

//4. Dupa ce ai scris numele sau prenumele si ai iesit din input (onchange), sa verifici ca textul scris sa nu contina cifre. Daca contine, "Eroare <camp>" in consola
function invalidNames (name) {
  if (/\d/.test(name.value)) {
    if (name.value === nameInput.value) {
      console.log(name.classList);
      nameInput.classList.add("errorInput");
      let error = document.getElementById("firstNameError");
      error.innerText = "Error! The first name you entered contains numbers.";
    }
    if (name.value === lastNameInput.value) {
      lastNameInput.classList.add("errorInput");
      let error = document.getElementById("lastNameError");
      error.innerText = "Error! The last name you entered contains numbers.";
    }
  } else {
    if (name.value === nameInput.value) {
      nameInput.classList.remove("errorInput");
      let error = document.getElementById("firstNameError");
      error.innerText = "";
    }
    if (name.value === lastNameInput.value) {
      lastNameInput.classList.remove("errorInput");
      let error = document.getElementById("lastNameError");
      error.innerText = "";
    }
  }
}

function submitHandler() {
  displayEducation();
  displaySpecialMentions();
  displayGender();
  missingValues();
}
