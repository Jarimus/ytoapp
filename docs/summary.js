

function calculateTotals() {
    var totalMandatoryOsp = 0
    var completedMandatoryOsp = 0
    var totalElectiveOsp = 0
    var completedElectiveOsp = 0
    MANDATORY_COURSES.forEach(course => {
        var completed = course.grade !== "" ? course.osp : 0;
        var total = course.osp;
        completedMandatoryOsp += completed;
        totalMandatoryOsp += total;
    });

    ELECTIVE_COURSES.forEach(course => {
        var completed = course.grade !== "" ? Number(course.osp) : 0;
        var total = Number(course.osp);
        completedElectiveOsp += completed;
        totalElectiveOsp += total;
    })

    mandatorySummary = document.getElementById("mandatorySummary");
    mandatorySummary.textContent = `Pakollisia suoritettu: ${completedMandatoryOsp}/${totalMandatoryOsp}`;

    electiveSummary = document.getElementById("electiveSummary");
    electiveSummary.textContent = `Valinnaisia suoritettu: ${completedElectiveOsp}/9`;
}

calculateTotals();