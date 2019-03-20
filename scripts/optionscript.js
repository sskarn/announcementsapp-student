var annGrade;
var annGender;
var annClub;
var studentNumber;

function getData() {
annGrade = document.getElementById("grade").value;
annGender = document.getElementById("gender").value;
annClub = document.getElementById("club").value;
studentNumber = document.getElementById("student#").value;
alert(annGrade + annGender + annClub + studentNumber);
localStorage.setItem("Grade:", annGrade);
localStorage.setItem("Gender:", annGender);
localStorage.setItem("Club:", annClub);
localStorage.setItem("Student Number:", studentNumber);
}