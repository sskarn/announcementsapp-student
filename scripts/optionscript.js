var studentGrade;
var studentGender;
var studentClub;
var studentNumber;

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