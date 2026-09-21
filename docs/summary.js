function calculateTotals() {
    var completedMandatoryOsp = 0
    var completedElectiveOsp = 0
    MANDATORY_COURSES.forEach(course => {
        var completed = course.grade !== "" ? Number(course.osp) : 0;
        completedMandatoryOsp += completed;
    });

    ELECTIVE_COURSES.forEach(course => {
        var completed = course.grade !== "" ? Number(course.osp) : 0;
        completedElectiveOsp += completed;
    })

    mandatorySummary = document.getElementById("mandatorySummary");
    mandatorySummary.textContent = `Pakollisia suoritettu: ${completedMandatoryOsp} / 26 osp`;

    electiveSummary = document.getElementById("electiveSummary");
    electiveSummary.textContent = `Valinnaisia suoritettu: ${completedElectiveOsp} / 9 osp`;
}

calculateTotals();