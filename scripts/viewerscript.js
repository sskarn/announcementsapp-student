var studentGrade;
var studentGender;
var studentClub;
var studentNumber;
var annTitle = [];
var annDetails = [];
var annGrade = [];
var annGender = [];
var annClub = [];

function readStorage() {
	studentGrade = localStorage.getItem("Student Grade:");
	studentGender = localStorage.getItem("Student Gender:");
	studentClub = localStorage.getItem("Student Club:");
	studentNumber = localStorage.getItem("Student Number:");
	annTitle = JSON.parse(localStorage.getItem("Title:"));
	annDetails = JSON.parse(localStorage.getItem("Details:"));
	annGrade = JSON.parse(localStorage.getItem("Grade:"));
	annGender = JSON.parse(localStorage.getItem("Gender:"));
	annClub = JSON.parse(localStorage.getItem("Club:"));
}
	
function displayAnnOne() {
	if (annGrade === studentGrade || annGrade === "allgrades") {
		if (annGender === studentGender || annGender === "allgenders") {
			if (annClub === studentClub || annClub === "allstudents") {
				document.getElementById("title").innerHTML = annTitle;
				document.getElementById("details").innerHTML = annDetails;
			}
		}
	}
}

function start() {
	readStorage();
	displayAnnOne();
}