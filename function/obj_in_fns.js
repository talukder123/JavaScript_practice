const student = {
    name: 'Leo',
    isChamp : true,
    total_goal : 21
};


function detail(student) {
    console.log('The player details is =', student);
    console.log(student.name, 'Total Goals is =', student.total_goal);
}

detail(student);