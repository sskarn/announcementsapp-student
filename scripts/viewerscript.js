var studentGrade;
var studentGender;
var studentClub;
var studentNumber;
var annTitle = [];
var annDetails = [];
var annGrade = [];
var annGender = [];
var annClub = [];
var allDetails = "";
var allTitles = "";

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
	
function displayAnn() {
	for (var index = 0; index < annDetails.length; index += 1) {
		if (annGrade[index] === studentGrade || annGrade[index] === "allgrades") {
			if (annGender[index] === studentGender || annGender[index] === "allgenders") {
				if (annClub[index] === studentClub || annClub[index] === "allstudents") {
					allTitles += annTitle[index] + "<br>";
					allDetails += annDetails[index] + "<br>";
				}
			}
		}
	}		
	document.getElementById("title").innerHTML = allTitles;
	document.getElementById("details").innerHTML = allDetails;
}

function start() {
	readStorage();
	displayAnn();
}