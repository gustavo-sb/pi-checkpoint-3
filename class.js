const student = require('./modules/studentConstructor')
const studentsList = require('./modules/students')

let reactjsClass = {
  name: 'React JS',
  passingGrade: 6,
  maxAbsence: 10,
  students: studentsList,

  addStudent(name, absence, rating) {
    this.students.push(new student(name, absence, rating))
    console.log(`Aluno ${name} adicionado`)
  },

  approved(student) {
    if (student.average() >= this.passingGrade && student.absence < this.maxAbsence) {
      console.log(`Aluno ${student.name} aprovado`)
      return true
    } else if (student.absence === this.maxAbsence && student.average() >= (this.passingGrade * 1.1)) {
      console.log(`Aluno ${student.name} aprovado`)
      return true
    } else {
      console.log(`Aluno ${student.name} reprovado`)
      return false
    }
  },

  allApproved(students) {
    students.map((student) => {
      let name = student.name
      let aprroved = this.approved(student)
      return console.log({
        name,
        aprroved
      })
    })
  }
}

reactjsClass.addStudent('Neymar Jr', 3, [10, 10, 10])

reactjsClass.approved(studentsList[0])

reactjsClass.allApproved(studentsList)
