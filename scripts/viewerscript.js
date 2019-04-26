/* 
Karnbir Saini
ICS3UR-B
April 25, 2019
Student Viewer JS:
- retrieves all announcement and student variables from LocalStorage
- uses for loop with if statements to match announcement variables against student variables
- if match is true:
	- concentates string (allAnnouncements) variable with the announcement's Time/Date Stamp, Title, and Details
- displayAnn() function displays string in HTML div element
https://github.com/sskarn/announcementsapp-student
*/

var studentGrade;
var studentGender;
var studentClub;
var studentNumber;
// creates student profile vars
var annTitle = [];
var annDetails = [];
var annGrade = [];
var annGender = [];
var annClub = [];
var annDateTime = [];
var annStudentNumber = [];
// creates announcement vars (with array)
var allAnnouncements = "";
// creates allAnnouncements string var that is concentated with all matching announcements later on

/*
function readStorage()
- loads Announcement and Student LocalStorage keys into JS vars (JSON.parse for announcements to support arrays)
*/

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

/*
function displayAnn()
- for loop with parameters including:
	- an index var being created
	- index var being less than the length of the annDetails array
	- index var being concentated by 1 after each loop is completed
- 3 nested if statements which test for:
	1. Announcement Grade = Student Grade or if Announcement is intended for all grades
	2. Announcement Gender = Student Gender or if Announcement is intended for all genders
	3. Announcement Club = Student Club or if Announcement is intended for all students + or Announcement Student Number = Student Number (club cannot be selected for Student Number targeting to work)
- If all if statements are true, then the allAnnouncements string is concentated with the matching announcement's Time/Date Stamp, Title, and Details with <h2>, <h3, and <p> tags
- After the for loop runs, the filteredannouncements div tag is set to the string variable allAnnouncements, resulting in all matching announcements being displayed to the student
*/

function displayAnn() {
	for (var index = 0; index < annDetails.length; index += 1) {
		if (annGrade[index] === studentGrade || annGrade[index] === "allgrades") {
			if (annGender[index] === studentGender || annGender[index] === "allgenders") {
				if (annClub[index] === studentClub || annClub[index] === "allstudents" || annStudentNumber[index] === studentNumber) {
					allAnnouncements += "<h2>" + annDateTime[index] + "</h2>" + "<h3>" + annTitle[index] + "</h3>" + "<p>" + annDetails[index] + "</p>";
				}
			}
		}
	}
	document.getElementById("filteredannouncements").innerHTML = allAnnouncements;
}

/*
function start() (onLoad when webpage is opened in order to display filtered announcements in div)
- loads readStorage() and displayAnn() functions in order
*/

function start() {
	readStorage();
	displayAnn();
}
