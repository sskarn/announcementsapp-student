var studentGrade;
var studentGender;
var studentClub;
var studentNumber;
var currentGrade;
var currentGender;
var currentClub;
var currentStudentNumber;
var currentProfile;

function getData() {
	studentGrade = document.getElementById("grade").value;
	studentGender = document.getElementById("gender").value;
	studentClub = document.getElementById("club").value;
	studentNumber = document.getElementById("student#").value;
	localStorage.setItem("Student Grade:", studentGrade);
	localStorage.setItem("Student Gender:", studentGender);
	localStorage.setItem("Student Club:", studentClub);
	localStorage.setItem("Student Number:", studentNumber);
	alert("Your profile has been saved.");
}

function displayProfile() {
	currentGrade = localStorage.getItem("Student Grade:");
	currentGender = localStorage.getItem("Student Gender:");
	currentClub = localStorage.getItem("Student Club:");
	currentStudentNumber = localStorage.getItem("Student Number:");
	currentProfile = "<p>Grade: " + currentGrade + "<br>Gender: " + currentGender + "<br>Club: " + currentClub + "<br>Student Number: " + currentStudentNumber;
	document.getElementById("currentprofile").innerHTML = currentProfile;
}

function update() {
	getData();
	displayProfile();
}