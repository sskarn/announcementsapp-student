var studentGrade;
var studentGender;
var studentClub;
var studentNumber;
var annTitle = [];
var annDetails = [];
var annGrade = [];
var annGender = [];
var annClub = [];
var annDateTime = [];
var annStudentNumber = [];
var allTitlesDetails = "";

function readStorage() {
	studentGrade = localStorage.getItem("Student Grade:");
	studentGender = localStorage.getItem("Student Gender:");
	studentClub = localStorage.getItem("Student Club:");
	studentNumber = localStorage.getItem("Student Number:");
	annTitle = JSON.parse(localStorage.getItem("AnnTitle:"));
	annDetails = JSON.parse(localStorage.getItem("AnnDetails:"));
	annGrade = JSON.parse(localStorage.getItem("AnnGrade:"));
	annGender = JSON.parse(localStorage.getItem("AnnGender:"));
	annClub = JSON.parse(localStorage.getItem("AnnClub:"));
	annStudentNumber = JSON.parse(localStorage.getItem("AnnStudentNumber:"));
	annDateTime = JSON.parse(localStorage.getItem("AnnDateTime:"));
}

function displayAnn() {
	for (var index = 0; index < annDetails.length; index += 1) {
		if (annGrade[index] === studentGrade || annGrade[index] === "allgrades") {
			if (annGender[index] === studentGender || annGender[index] === "allgenders") {
				if (annClub[index] === studentClub || annClub[index] === "allstudents" || annStudentNumber[index] === studentNumber) {
					allTitlesDetails += "<h2>" + annDateTime[index] + "</h2>" + "<h3>" + annTitle[index] + "</h3>" + "<p>" + annDetails[index] + "</p>";
				}
			}
		}
	}
	document.getElementById("filteredannouncements").innerHTML = allTitlesDetails;
}

function start() {
	readStorage();
	displayAnn();
}
