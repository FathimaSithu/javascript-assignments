// for form login
function formLogin() {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.form.email.value;
    let password = document.form.password.value;
    data = { 'email': email, 'password': password };
    if (email == null || email == "") {
        alert("Please enter your email id");
        return false;
    }
    else if (email.match(emailRegEx) == null) {
        alert("Please enter a valid email");
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
    localStorage.setItem('test_data', JSON.stringify(data));

    
}
function getData(){
    getData = [];
    getData = localStorage.getItem('test_data');
 
}


