function validateform() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var name = document.myform.name.value;
  var email = document.myform.email.value;
  var password = document.myform.password.value;
  var confirmPassword = document.myform.confirmPassword.value;
  var gender = document.myform.gender.value;

  const education = document.querySelectorAll('input[type=checkbox]');
  let isChecked = false;

  education.forEach((edu) => {
  if (edu.checked) {
    isChecked = true;
  }
});

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  }
  else if ((email == null || email == "")) {
    alert("Email can't be blank");
    return false;
  }
  else if (email.match(emailRegex) == null) {
    alert("Please enter a valid email");
    return false;
  }

  else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  else if (password !== confirmPassword) {
    alert("Password didnt match");
    return false;
  }

 else if(gender.length == 0){

  alert("Please select your gender.");
  return false;
 }

 else if(!isChecked){
  alert("Please select your education.");
  return false;
 }
}