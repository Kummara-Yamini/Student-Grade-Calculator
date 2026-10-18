
function calculateGrade() {
    const marks = [];

    for (let i = 1; i <= 5; i++) {
        const input = document.getElementById("sub" + i);
        const value = input.value.trim();

        if (value === "") {
            showMessage("Please enter marks for all 5 subjects.");
            input.focus();
            return;
        }

        const mark = Number(value);

        if (!Number.isFinite(mark) || mark < 0 || mark > 100) {
            showMessage("Marks must be between 0 and 100.");
            input.focus();
            return;
        }

        marks.push(mark);
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = total / 5;
    const passed = marks.every(mark => mark >= 35);

    let grade;

    if (!passed) {
        grade = "F";
    } else if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    const status = passed ? "Pass 🎉" : "Fail ❌";

    document.getElementById("result").innerHTML =
        "<h2>Student Result</h2>" +
        "<p>Total Marks: " + total + " / 500</p>" +
        "<p>Percentage: " + percentage.toFixed(2) + "%</p>" +
        "<p>Grade: " + grade + "</p>" +
        "<p>Result: " + status + "</p>";
}

function showMessage(message) {
    document.getElementById("result").textContent = message;
}

function resetForm() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById("sub" + i).value = "";
    }

    document.getElementById("result").textContent = "";
}
