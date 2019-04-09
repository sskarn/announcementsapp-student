var studentGrade;
var studentGender;
var studentClub;
var studentNumber;
var annTitle;
var annDetails;
var annGrade;
var annGender;
var annClub;

function readStorage() {
	studentGrade = localStorage.getItem("Student Grade:");
	studentGender = localStorage.getItem("Student Gender:");
	studentClub = localStorage.getItem("Student Club:");
	studentNumber = localStorage.getItem("Student Number:");
	annTitle = localStorage.getItem("Title:");
	annDetails = localStorage.getItem("Details:");
	annGrade = localStorage.getItem("Grade:");
	annGender = localStorage.getItem("Gender:");
	annClub = localStorage.getItem("Club:");
}
	
function displayAnnOne() {
	if (annGrade === studentGrade && annGender === studentGender && annClub === studentClub) {
		document.getElementById("title").innerHTML = annTitle;
		document.getElementById("details").innerHTML = annDetails;
	}

function start() {
	readStorage();
	displayAnnOne();
}