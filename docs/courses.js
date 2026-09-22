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
        "category": CATEGORY_SCIENCES,
        "osp": 1
    },
    {
        "name": "Kemia",
        "id": "ke",
        "grade": "",
        "category": CATEGORY_SCIENCES,
        "osp": 1
    },
    {
        "name": "MA1: Peruslaskutoimitukset",
        "id": "ma1",
        "grade": "",
        "category": CATEGORY_SCIENCES,
        "osp": 1
    },
    {
        "name": "MA2: Geometria",
        "id": "ma2",
        "grade": "",
        "category": CATEGORY_SCIENCES,
        "osp": 1
    },
    {
        "name": "MA3: Yhtälöt ja prosenttilaskenta",
        "id": "ma3",
        "grade": "",
        "category": CATEGORY_SCIENCES,
        "osp": 1
    },
    {
        "name": "MA4: Talous ja tilastot",
        "id": "ma4",
        "grade": "",
        "category": CATEGORY_SCIENCES,
        "osp": 1
    },
    {
        "name": "Digi 1",
        "id": "digi1",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS,
        "osp": 1
    },
    {
        "name": "Digi 2",
        "id": "digi2",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS,
        "osp": 1
    },
    {
        "name": "Englanti 1",
        "id": "en1",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS,
        "osp": 1.5
    },
    {
        "name": "Englanti 2",
        "id": "en2",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS,
        "osp": 1.5
    },
    {
        "name": "Ruotsi",
        "id": "ru",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS,
        "osp": 1
    },
    {
        "name": "Taide ja luova ilmaisu",
        "id": "tli",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS,
        "osp": 1
    },
    {
        "name": "Äidinkieli 1 / S2 1",
        "id": "ai1",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS,
        "osp": 2
    },
    {
        "name": "Äidinkieli 2 / S2 2",
        "id": "ai2",
        "grade": "",
        "category": CATEGORY_COMMUNICATIONS,
        "osp": 2
    },
    {
        "name": "Yhteiskunnassa ja kansalaisena toimiminen",
        "id": "yht1",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES,
        "osp": 2
    },
    {
        "name": "Työelämässä toimiminen",
        "id": "yht2",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES,
        "osp": 2
    },
    {
        "name": "Opiskelu- ja urasuunnitteluvalmiudet",
        "id": "yht3",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES,
        "osp": 1
    },
    {
        "name": "Yrittäjyys ja yrittäjämäinen toiminta",
        "id": "yht4",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES,
        "osp": 1
    },
    {
        "name": "Liikunta ja terveystieto sekä työkyvyn ja hyvinvoinnin edistäminen",
        "id": "yht5",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES,
        "osp": 2
    },
    {
        "name": "Kestävän kehityksen edistäminen",
        "id": "yht6",
        "grade": "",
        "category": CATEGORY_SOCIAL_STUDIES,
        "osp": 1
    }
];

const ELECTIVE_COURSES = JSON.parse(localStorage.getItem(ELECTIVE_COURSES_KEY)) ?? [
    {
        "name": "",
        "id": "elective1",
        "grade": "",
        "osp": 1.5
    },
    {
        "name": "",
        "id": "elective2",
        "grade": "",
        "osp": 1.5
    },
    {
        "name": "",
        "id": "elective3",
        "grade": "",
        "osp": 1.5
    },
    {
        "name": "",
        "id": "elective4",
        "grade": "",
        "osp": 1.5
    },
    {
        "name": "",
        "id": "elective5",
        "grade": "",
        "osp": 1.5
    },
    {
        "name": "",
        "id": "elective6",
        "grade": "",
        "osp": 1.5
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
        calculateTotals();
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

function populateTables() {
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
        inputField.placeholder = "-";
        inputField.addEventListener("focusout", () => {
            course.name = inputField.value;
            localStorage.setItem(ELECTIVE_COURSES_KEY, JSON.stringify(ELECTIVE_COURSES));
        })
        // Add cell for osp (default 1.5)
        const ospCell = row.insertCell();
        const ospSelect = document.createElement("select");
        [1, 1.5, 3].forEach(osp => {
            const option = document.createElement("option");
            option.value = osp;
            option.textContent = osp;
            if (osp === 1.5) {
                option.selected = "selected";
            }
            ospSelect.appendChild(option);

        })
        ospCell.addEventListener("change", () => {
            course.osp = ospSelect.value;
            localStorage.setItem(ELECTIVE_COURSES_KEY, JSON.stringify(ELECTIVE_COURSES));
            calculateTotals();
        })
        ospCell.appendChild(ospSelect);
        // Add cell for course grade
        const gradeCell = row.insertCell();
        const select = document.createElement("select");
        select.addEventListener("change", () => {
            course.grade = select.value;
            localStorage.setItem(ELECTIVE_COURSES_KEY, JSON.stringify(ELECTIVE_COURSES));
            calculateTotals();
        });
        GRADES.forEach(grade => {
            const option = document.createElement("option");
            option.value = grade;
            option.textContent = grade;
            select.appendChild(option);
        });
        gradeCell.appendChild(select);
        // Load values for the course name and grade
        inputField.value = course.name;
        select.value = course.grade;
    });
   
}

function configureResetButton() {
    const resetProgressButton = document.getElementById("resetProgressBtn");
    resetProgressButton.addEventListener("click", (e) => {
        if (confirm("Nollataanko kaikki kurssitiedot?")) {
            localStorage.removeItem(MANDATORY_COURSES_KEY);
            localStorage.removeItem(ELECTIVE_COURSES_KEY);
            calculateTotals();
            location.reload();
        }
    });
}
