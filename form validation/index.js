// for form validation
function formValidation() {
    let name = document.myForm.name.value;
    let password = document.myForm.password.value;
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.myForm.email.value;
    let confirmPassword = document.myForm.confirmPassword.value;
    let gender = document.myForm.gender.value;
    const education = document.querySelectorAll('input[type=checkbox]');
    // const qualification = document.querySelectorAll('input[type=checkbox]').value;
    let isChecked = false;
    data = { 'name': name, 'email': email, 'gender': gender };
    
console.log(data);
    education.forEach((edu) => {
        if (edu.checked) {
            isChecked = true;
        }
    });
    // qualification.forEach((qua) => {

    //     console.log(" qualification " + qua);
    // });

    if (name == null || name == "") {
        alert("Please enter your name");
        return false;
    }
    else if (password.length < 6) {
        alert("Please enter atleast 6 characters");
        return false;
    }
    else if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    else if (email == null || email == "") {
        alert("Please enter your email id");
        return false;
    }
    else if (email.match(emailRegEx) == null) {
        alert("Please enter a valid email");
        return false;
    }
    else if (gender.length == 0) {
        alert("Please select a gender");
        return false;
    }
    else if (!isChecked) {
        alert("Please select your education.");
        return false;
    }

    localStorage.setItem('test_data', JSON.stringify(data));
    
    

}
function showData(){
    getData = [];
    getData = localStorage.getItem('test_data');
    alert(getData);
}
function removeData(){
    localStorage.removeItem('test_data');
    }
