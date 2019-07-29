const validateForm = () => {
  let x = document.forms["contact-us"]["firstName"].value;
  let y = document.forms["contact-us"]["lastName"].value;
  let l = document.forms["contact-us"]["email"].value;
  let k = document.forms["contact-us"]["item"].value;
  if (x == "" || y == "" || l == "" || k == "") {
    alert("Name must be filled out");
    return false;
  }
}