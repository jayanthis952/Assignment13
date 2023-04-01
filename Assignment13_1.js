let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "95" },
    { name: "Oscar", marks: "64" },
    { name: "Kevin", marks: "48" },
];

// function to calculate grades based on marks
function calculateGrade(marks) {
    if (marks > 90) {
        return "A";
    } else if (marks > 80) {
        return "B";
    } else if (marks > 70) {
        return "C";
    } else if (marks > 60) {
        return "D";
    } else if (marks > 50) {
        return "E";
    } else {
        return "F";
    }
}

// map grades of each student
let grades = students.map((student) => ({
    name: student.name,
    grade: calculateGrade(parseInt(student.marks)),
}));

// group students according to grades
let groups = grades.reduce((acc, student) => {
    if (!acc[student.grade]) {
        acc[student.grade] = [student];
    } else {
        acc[student.grade].push(student);
    }
    return acc;
}, {});

// display output
console.log(groups);
