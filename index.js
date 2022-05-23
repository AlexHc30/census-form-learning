let nameInput = document.querySelector("#firstname");
function displayName() {
  
  console.log(nameInput.value);
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
  if ( nameInput.value == "" || lastNameInput.value == "" || cnp.value == "" ) {
  //  console.log("error, missing values");
    if (nameInput.value == "") {
      emptyField = '<first name> ';
    }
    if (lastNameInput.value == "") {
      emptyField += '<last name> ';
    }
    if (cnp.value == "") {
      emptyField += '<CNP> ';
    }
    console.log(`Error, the following values are missing: ${emptyField}`);
  }
 emptyField = '';
}

//4. Dupa ce ai scris numele sau prenumele si ai iesit din input (onchange), sa verifici ca textul scris sa nu contina cifre. Daca contine, "Eroare <camp>" in consola
function invalidName(name) {
  let nameVerify = String(name.value); //aici mi-a luat ceva sa-mi dau seama ca trebuie "name.value" si nu doar "name....
  for (let i = 0; i < nameVerify.length; i++) {
    if (!isNaN(nameVerify.charAt(i))) {
      if (nameVerify === nameInput.value) {
      console.log("Error! The first name you entered contains numbers.") } else if (nameVerify === lastNameInput.value) {
        console.log("Error! The last name you entered contains numbers.")
      }
    }
  } 
}

function submitHandler() {
  displayEducation();
  displaySpecialMentions();
  displayGender();
  missingValues();
}
