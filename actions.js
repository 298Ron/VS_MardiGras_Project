//MEDIA PAGE GALLERY SCRIPT
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
//CONTACTS US PAGE
//Function thath checks if there is - @ in the email line
/* function validateEmail() {

} else {

    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;

}

} */
function validateInputs() {
    var nameInput = document.getElementById("name").value;
    var lastNameInput = document.getElementById("last_name").value;
    var textInput = document.getElementById("contact_us_text").value;
    var emailInput = document.getElementById("email").value;
    if (nameInput == "") {
        alert("Please enter a name");
    } else if (lastNameInput == "") {
        alert("please enter your last name");
    } else if (textInput == "") {
        alert("Please enter your message")
    } else {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (emailInput.match(validRegex)) {

            alert("Message sent succesfuly!");

            document.form1.text1.focus();

            return true;

        } else {

            alert("Invalid email address!");

            document.form1.text1.focus();

            return false;

        }

    }
}
