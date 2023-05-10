function pageValidation() {
    let fname = document.myPage.fname.value;
    let lname = document.myPage.lname.value;
    let profilePic = document.getElementById("profilePic");
    let inputFile = document.getElementById(inputFile);

    if (fname == null || fname == "") {
        alert("Please enter your first name");
        return false;
    }
    else if (fname.length < 5) {
        alert("First name should be of atleast 5 characters");
        return false;
    }
    else if (lname == null || lname == "") {
        alert("Please enter your last name");
        return false;
    }

}
inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}