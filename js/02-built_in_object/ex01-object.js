let person=new Object();

person.name='홍길동';
person.age=20;
person.getPerson=function(){
    console.log('person:',this);
    return `이름:${this.name},나이:${this.age}`;
}



console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.getPerson());
console.log(this);
