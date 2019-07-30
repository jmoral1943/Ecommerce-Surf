let x = document.forms["contact-us"]["firstName"];
let y = document.forms["contact-us"]["lastName"];
let l = document.forms["contact-us"]["email"];
let k = document.forms["contact-us"]["item"];

const validateForm = () => {
  if ( x.value == "") {
    x.style.border = "1px solid red";
  }
  if ( y.value == "") {
    y.style.border = "1px solid red";
  }
  if ( l.value == "") {
    l.style.border = "1px solid red";
  }
  if ( k.value == "") {
    k.style.border = "1px solid red";
  }
  if ( x.value !== "") {
    x.style.border = "unset";
  }
  if ( y.value !== "") {
    y.style.border = "unset";
  }
  if ( l.value !== "") {
    l.style.border = "unset";
  }
  if ( k.value !== "") {
    k.style.border = "unset";
  }

}

const submitForm = () => {
  if (x.value == "" || y.value == "" || l.value == "" || k.value == "") {
    alert("Fill the form out entirely");
    validateForm();
  }
  return false;
}

const form = document.forms["contact-us"];
form.addEventListener('change', validateForm);
// form.addEventListener('submit', submitForm(event));