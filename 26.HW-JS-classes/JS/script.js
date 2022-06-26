/*1) Создать класс разработчик, у которого будут свойства: имя, язык программирования, метод, который в консоль выводит фразу "'имя' работает с'язык программирования'".А также класс студента, который будет расширен с помощью класса разработчика.Добавьте туда свойство: номер группы.*/

class FrontendDeveloper {
    constructor(options) {
        this.name = options.name
        this.programmingLanguage = options.programmingLanguage
    }
    characteristic = function() {
        console.log(this.name,
            " работает с ",
            this.programmingLanguage
        )
    }
}

const webDeveloper = new FrontendDeveloper({
    name: "Hannes",
    characteristic: "",
    programmingLanguage: "JS"
});
webDeveloper.characteristic()

class Student extends FrontendDeveloper {
    constructor(options) {
        super(options)
        this.age = options.age
        this.groupNumber = options.groupNumber
        this.Type = "Student"
    };

}
let student = new Student({
    name: "Jacob",
    programmingLanguage: "Python",
    age: 27,
    groupNumber: 7
})
console.log(student);









/*2) Написать метод, который будет к строкам добавлять восклицательный знак в конце*/
String.prototype.addedDot = function() {
    return `${this}!`
}
console.log("Add an exclamation mark to every string".addedDot());









/*3) Написать метод, который будет делить число на два*/
const array = new Array(10, 16, 306);

Array.prototype.ourMap = function() {

    return this.map(item => item / 2)
}
console.log(array.ourMap())