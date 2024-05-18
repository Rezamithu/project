document.getElementById('gradeForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var marks = document.getElementById('marks').value;
  var grade, gpa;

  if (isNaN(marks) || marks < 0 || marks > 100) {
    document.getElementById('result').innerText = 'Please enter a valid mark between 0 and 100.';
    return;
  }

  if (marks >= 80 && marks <= 100) {
    grade = 'A+';
    gpa = 5.0;
  } else if (marks >= 70 && marks < 80) {
    grade = 'A';
    gpa = 4.0;
  } else if (marks >= 60 && marks < 70) {
    grade = 'A-';
    gpa = 3.5;
  } else if (marks >= 50 && marks < 60) {
    grade = 'B';
    gpa = 3.0;
  } else if (marks >= 40 && marks < 50) {
    grade = 'C';
    gpa = 2.0;
  } else if (marks >= 33 && marks < 40) {
    grade = 'D';
    gpa = 1.0;
  } else if (marks >= 0 && marks < 33) {
    grade = 'F';
    gpa = 0.0;
  } else {
    grade = 'Invalid score';
    gpa = 0.0;
  }

  document.getElementById('gradeOutput').textContent = grade;
  document.getElementById('gpaOutput').textContent = gpa;
});
