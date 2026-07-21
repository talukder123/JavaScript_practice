const student = {
    id: 101,
    name: "Abdus Salam",
    age: 22,
    department: "Software Engineering",
    cgpa: 3.79,
    isGraduated: false
};


for (const key in student) {
    const value = student[key];

    console.log(key, value);
}