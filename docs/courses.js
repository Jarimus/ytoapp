const MANDATORY_COURSES = JSON.parse(localStorage.getItem("mandatory")) ?? [
    {
        "name": "MA1: Peruslaskutoimitukset",
        "id": "ma1",
        "grade": "",
    },
    {
        "name": "MA2: Geometria",
        "id": "ma2",
        "grade": ""
    },
    {
        "name": "MA3: Yhtälöt ja prosenttilaskenta",
        "id": "ma3",
        "grade": ""
    },
    {
        "name": "MA4: Talous ja tilastot",
        "id": "ma4",
        "grade": ""
    },
    {
        "name": "Fysiikka",
        "id": "fy",
        "grade": ""
    },
    {
        "name": "Kemia",
        "id": "ke",
        "grade": ""
    },
    {
        "name": "Äidinkieli 1",
        "id": "ai1",
        "grade": ""
    },
    {
        "name": "Äidinkieli 2",
        "id": "ai2",
        "grade": ""
    },
    {
        "name": "Ruotsi",
        "id": "ru",
        "grade": ""
    },
    {
        "name": "Englanti 1",
        "id": "en1",
        "grade": ""
    },
    {
        "name": "Englanti 2",
        "id": "en2",
        "grade": ""
    },
    {
        "name": "Digi 1",
        "id": "digi1",
        "grade": ""
    },
    {
        "name": "Digi 2",
        "id": "digi2",
        "grade": ""
    },
    {
        "name": "Taide ja luova ilmaisu",
        "id": "tli",
        "grade": ""
    },
];

const ELECTIVE_COURSES = JSON.parse(localStorage.getItem("elective")) ?? [
    {
        "name": "",
        "id": "elective1",
        "grade": "",
    },
    {
        "name": "",
        "id": "elective2",
        "grade": "",
    },
    {
        "name": "",
        "id": "elective3",
        "grade": "",
    },
    {
        "name": "",
        "id": "elective4",
        "grade": "",
    },
    {
        "name": "",
        "id": "elective5",
        "grade": "",
    },
    {
        "name": "",
        "id": "elective6",
        "grade": "",
    },
];

const GRADES = ["", "T1", "T2", "H3", "H4", "K5"];

const mandatoryCourseTable = document.getElementById("mandatoryCourseTableBody");

MANDATORY_COURSES.forEach(course => {
    // Insert a new row into the table
    const row = mandatoryCourseTable.insertRow();
    // Add a cell with the name of the group
    const courseCell = row.insertCell();
    courseCell.textContent = course.name;
    // Add a cell for the grade
    const gradeCell = row.insertCell();
    // Create dropdown menu for the grade column
    const select = document.createElement("select");
    // Add an event listener to the dropdown menu that stores grade to local storage
    select.addEventListener("change", () => {
        course.grade = select.value;
        localStorage.setItem("mandatory", JSON.stringify(MANDATORY_COURSES));
    });
    // Attach grades as options to the menu
    GRADES.forEach(grade => {
        const option = document.createElement("option");
        option.value = grade;
        option.textContent = grade;
        select.appendChild(option);
    });
    // Append the dropdown menu to the grade column
    gradeCell.appendChild(select);
    select.value = course.grade;
});

const electiveCourseTable = document.getElementById("electiveCourseTableBody");

ELECTIVE_COURSES.forEach(course => {
    // Add row
    const row = electiveCourseTable.insertRow();
    // Add cell for course name
    const courseCell = row.insertCell();
    const inputField = document.createElement("input");
    courseCell.appendChild(inputField);
    inputField.placeholder = "Kirjoita kurssin nimi";
    inputField.addEventListener("focusout", () => {
        course.name = inputField.value;
        localStorage.setItem("elective", JSON.stringify(ELECTIVE_COURSES));
    })
    // Add cell for course grade
    const gradeCell = row.insertCell();
    const select = document.createElement("select");
    select.addEventListener("change", () => {
        course.grade = select.value;
        localStorage.setItem("elective", JSON.stringify(ELECTIVE_COURSES));
    });
    GRADES.forEach(grade => {
        const option = document.createElement("option");
        option.value = grade;
        option.textContent = grade;
        select.appendChild(option);
    });
    gradeCell.appendChild(select);
    // Load initial values for the course name and grade
    inputField.value = course.name;
    select.value = course.grade;
});