const student = {
    name: 'kodom ali',
    money: '5000',
    study: 'Math',
    subjects:  ['calculs','algebra','geometry'],
    exam: function(){
        return this.name + ' is participeting in the exam' ;
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatdey: function(amount){
        this.money = this.money - amount;
        return this.money;
    }
}

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('algebra');
// console.log(reExam);
const remaining = student.treatdey(900);
console.log(remaining);