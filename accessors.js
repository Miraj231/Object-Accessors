// Getters code stard is here
const person = {
   firstName: "Jone",
   lastName: "Doe",
   language: "en",
   get lang(){
    return this.firstName + " " + this.lastName;
   }
}

console.log(person.lang);

//Getters code end is here

//Setter code stard is here
const person2 = {
    firstName: "Mahady",
    lastName: "Hasan",
    language:"",
    set lang(props){
        this.language = props;
    }
}
console.log(person);
//Setter code end is here


// Object.defineProperty() method stard is here
const person3 = {
    firstName: "Jomela",
    lastName: "Begum",
}
Object.defineProperty(person3, "fullName",{
    get: function(){
        return this.firstName + ' ' + this.lastName;
    }
});
console.log(person3);
//Object.defineProperty() method end is here