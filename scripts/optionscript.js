/* 
Karnbir Saini
ICS3UR-B
April 25, 2019
Student Options JS - Allows student info to be pulled from HTML input, set into LocalStorage keys + displays current student info at the bottom of the page
https://github.com/sskarn/announcementsapp-student
*/

var studentGrade;
var studentGender;
var studentClub;
var studentNumber;
// creates student profile vars
var currentGrade;
var currentGender;
var currentClub;
var currentStudentNumber;
// creates current profile vars to be displayed
var currentProfile = '';
// creates currentProfile empty string var

/*
function getData()
- loads HTML input from student into JS vars (no array required due to only a single value)
- sets JS vars into LocalStorage keys
- displays alert to student to confirm that their settings have been saved
*/

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

/*
function displayProfile() (onLoad when webpage is opened to show student their current profile settings, if there are no settings, then it shows as null)
- current student profile vars are loaded from LocalStorage keys
- currentProfile string is set to html <p> tags of student grade, gender, club, and student number with <br> for new lines
- currentprofile div is set to currentProfile string
*/

function displayProfile() {
	currentGrade = localStorage.getItem("Student Grade:");
	currentGender = localStorage.getItem("Student Gender:");
	currentClub = localStorage.getItem("Student Club:");
	currentStudentNumber = localStorage.getItem("Student Number:");
	currentProfile = "<p>Grade: " + currentGrade + "<br>Gender: " + currentGender + "<br>Club: " + currentClub + "<br>Student Number: " + currentStudentNumber;
	document.getElementById("currentprofile").innerHTML = currentProfile;
}

/*
function update() (onClick when submit button is clicked in HTML, resulting in settings being updated and currentProfile being updated)
- runs getData() and displayProfile() in order
*/

function update() {
	getData();
	displayProfile();
}
