function out(){
    var current_cg = parseFloat(document.getElementById("current_cgpa").value);
    var complete_course = parseFloat(document.getElementById("completed_course").value);
    var course_t = parseFloat(document.getElementById("course_taken").value);
    var course1 = parseFloat(document.getElementById("course1").value);
    var course2 = parseFloat(document.getElementById("course2").value);
    var course3 = parseFloat(document.getElementById("course3").value);
    var course4 = parseFloat(document.getElementById("course4").value);
    var course5 = parseFloat(document.getElementById("course5").value);

    var calc = current_cg * complete_course;
    var total_cg = calc+course1+course2+course3+course4+course5;
    var result = total_cg / (course_t + complete_course);
    let final = result.toFixed(2);
    window.alert("Your CGPA is " + final);
}
