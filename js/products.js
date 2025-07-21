var bool = false;

function show1() {
    document.getElementById("focus1").style.display = "block";
    bool = true;
    if(bool==true) {
        document.getElementById("focus2").style.display = "none";
        document.getElementById("focus3").style.display = "none";
        document.getElementById("focus4").style.display = "none";
    }
}

function show2() {
    document.getElementById("focus2").style.display = "block";
    bool = true;
    if(bool==true) {
        document.getElementById("focus1").style.display = "none";
        document.getElementById("focus3").style.display = "none";
        document.getElementById("focus4").style.display = "none";
    }
}

function show3() {
    document.getElementById("focus3").style.display = "block";
    bool = true;
    if(bool==true) {
        document.getElementById("focus1").style.display = "none";
        document.getElementById("focus2").style.display = "none";
        document.getElementById("focus4").style.display = "none";
    }
}

function show4() {
    document.getElementById("focus4").style.display = "block";
    bool = true;
    if(bool==true) {
        document.getElementById("focus1").style.display = "none";
        document.getElementById("focus2").style.display = "none";
        document.getElementById("focus3").style.display = "none";
    }
}
