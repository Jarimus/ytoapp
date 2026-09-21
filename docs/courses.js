const CATEGORY_COMMUNICATIONS = "communications";
const CATEGORY_SCIENCES = "sciences";
const CATEGORY_SOCIAL_STUDIES = "social_studies";
const MANDATORY_COURSES_KEY = "mandatory";
const ELECTIVE_COURSES_KEY = "elective"
const GRADES = ["", "T1", "T2", "H3", "H4", "K5"];

const MANDATORY_COURSES = JSON.parse(localStorage.getItem(MANDATORY_COURSES_KEY)) ?? [
    {
        "name": "Fysiikka",
        "id": "fy",
        "grade": "",
        "category": CATEGORY_SCIENCES
    },
    {
        "name": "Kemia",
        "id": "ke",
        "grade": "",
        "category": CATEGORY_SCIENCES
    },
    {
        "name": "MA1: Peruslaskutoimitukset",
        "id": "ma1",
        "grade": "",
        "category": CATEGORY_SCIENCES
    },
    {
        "name": "MA2: Geometria",
        "id": "ma2",
        "grade": "",
        "category": CATEGORY_SCIENCES
    },
    {
        "name": "MA3: Yhtälöt ja prosenttilaskenta",
        "id": "ma3",
        "grade": "",
        "category": CATEGORY_SCIENCES
    },
    {
        "name": "MA4: Talous ja tilastot",
        "id": "ma4",
        "grade": "",
        "category": CATEGORY_SCIENCES
    },
    {
        "name": "Digi 1",
        "id": "digi1",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS
    },
    {
        "name": "Digi 2",
        "id": "digi2",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS
    },
    {
        "name": "Englanti 1",
        "id": "en1",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS
    },
    {
        "name": "Englanti 2",
        "id": "en2",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS
    },
    {
        "name": "Ruotsi",
        "id": "ru",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS
    },
    {
        "name": "Taide ja luova ilmaisu",
        "id": "tli",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS
    },
    {
        "name": "Äidinkieli 1",
        "id": "ai1",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS
    },
    {
        "name": "Äidinkieli 2",
        "id": "ai2",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS
    },
    {
        "name": "Yhteiskunnassa ja kansalaisena toimiminen",
        "id": "yht1",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES
    },
    {
        "name": "Työelämässä toimiminen",
        "id": "yht2",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES
    },
    {
        "name": "Opiskelu- ja urasuunnitteluvalmiudet",
        "id": "yht3",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES
    },
    {
        "name": "Yrittäjyys ja yrittäjämäinen toiminta",
        "id": "yht4",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES
    },
    {
        "name": "Liikuna ja terveystieto sekä työkyvyn ja hyvinvoinnin edistäminen",
        "id": "yht5",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES
    },
    {
        "name": "Kestävän kehityksen edistäminen",
        "id": "yht6",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES
    }
];

const ELECTIVE_COURSES = JSON.parse(localStorage.getItem(ELECTIVE_COURSES_KEY)) ?? [
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

function addCourseToTable(tableID, course) {
    const courseTable = document.getElementById(tableID)
    // Insert a new row into the table
    const row =courseTable.insertRow();
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
        localStorage.setItem(MANDATORY_COURSES_KEY, JSON.stringify(MANDATORY_COURSES));
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
}

MANDATORY_COURSES.forEach(course => {
    switch (course.category) {
        case CATEGORY_SCIENCES:
            addCourseToTable("sciencesTable", course)
            break;
    
        case CATEGORY_COMMUNICATIONS:
            addCourseToTable("communicationsTable", course)
            break;

        case CATEGORY_SOCIAL_STUDIES:
            addCourseToTable("socialStudiesTable", course)
            break;

        default:
            break;
    }
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
        localStorage.setItem(ELECTIVE_COURSES_KEY, JSON.stringify(ELECTIVE_COURSES));
    })
    // Add cell for course grade
    const gradeCell = row.insertCell();
    const select = document.createElement("select");
    select.addEventListener("change", () => {
        course.grade = select.value;
        localStorage.setItem(ELECTIVE_COURSES_KEY, JSON.stringify(ELECTIVE_COURSES));
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