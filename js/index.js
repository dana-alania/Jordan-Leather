function logIn() {
    document.getElementById("login").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    alert("You have logged in succesfully!");
}

function openFormLogIn() {
    document.getElementById("login").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeFormLogIn() {
    document.getElementById("login").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function chat() {
    document.getElementById("chat").style.display = "block";
}

function closeChat() {
    document.getElementById("chat").style.display = "none"; 
}

function submitted() {
    alert("Your message has been submitted!")
}