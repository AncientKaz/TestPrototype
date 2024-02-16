function clearAll() {
    document.getElementById('personalInfo').reset();
}

function locationFind() {
    const zip = document.getElementById('zipcde').value;
    const zipPattern = /^\d{5}$/;
    const locationElement = document.getElementById('returnLocation');

    if (zipPattern.test(zip)){
        locationElement.textContent = "Location Successful.";
    } else {
        locationElement.textContent = "Location Unsuccessful.";
    }
}

function goNext() {
    window.location.href = "section2.html";
}

const gotoNextButton = document.getElementById('gotoNextButton');
if (gotoNextButton) {
    gotoNextButton.addEventListener('click', goNext);
} else {
    console.error("Not found!");
}

function goNext_2() {
    window.location.href = "section3.html";
}

const gotoNextButton_2 = document.getElementById('gotoNextButton_2');
if (gotoNextButton_2) {
    gotoNextButton_2.addEventListener('click', goNext_2);
} else {
    console.error("Not found!");
}

function goBack() {
    window.location.href = "section2.html";
}

const gotoLastButton = document.getElementById('gotoLastButton');
if (gotoLastButton) {
    gotoLastButton.addEventListener('click', goBack);
} else {
    console.error("Not found!");
}

function goFirst() {
    window.location.href = "Term_Project_Prototype.html";
}

const gotoFirst = document.getElementById('gotoFirst');
if (gotoFirst) {
    gotoFirst.addEventListener('click', goFirst);
} else {
    console.error("Not found!");
}

function goBack_2() {
    window.location.href = "Term_Project_Prototype.html";
}

const gotoPrev = document.getElementById('gotoPrev');
if (gotoPrev) {
    gotoPrev.addEventListener('click', goBack_2);
} else {
    console.error("Not found!");
}

const form_a = document.getElementById('personalInfo');
const form_b = document.getElementById('homeInfo');
const form_c = document.getElementById('quotegen');

// Event listener: Database (Section 1)
form_a.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fname = document.getElementById('fname').value;
    const midname = document.getElementById('midname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phnnum = document.getElementById('phnnum').value;

    localStorage.setItem('fname', fname);
    localStorage.setItem('midname', midname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('email', email);
    localStorage.setItem('phnnum', phnnum);
});
