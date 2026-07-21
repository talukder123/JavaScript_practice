
const University = {
    name: 'Daffodil Internatinal University',
    student: 25000,
    dept : {
        total_dept: 20,
        software : {
            head_prof: 'Alice',
            total_student: 2700
        },

        cse : {
            head_prof: 'Bob',
            total_student: 3000
        }
    }
}

// get the total student of swe
console.log(University.dept['software']['total_student']);

// get the head_prof of cse
console.log(University.dept.cse.head_prof);