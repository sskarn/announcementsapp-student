var annGrade;
var annGender;
var annClubs;
var studentNumber;

function getData() {
annGrade = document.getElementById("grade").value;
annGender = document.getElementById("gender").value;
annClubs = document.getElementById("clubs").value;
studentNumber = document.getElementById("student#").value;
alert(annGrade + annGender + annClubs + studentNumber);
}