//problem 1
function filterEvenNumbers(numbers:number[]): number[]{
    return  numbers.filter((number)=>number % 2 === 0)
}
const result = filterEvenNumbers([1,2,3,4,5,6,])


//problem 2
function reverseString(value:string):string{
    return value.split("").reverse().join("")
}
const result1 = reverseString('typescript')


// problem 3
type StringOrNumber = string | number

function checkType(value:StringOrNumber):string{
    if(typeof value === 'string'){
        return 'string'
    }else{
        return 'number'
    }
}
const result3 : StringOrNumber = checkType('hello')
const result4 : StringOrNumber = checkType(12)


// problem 4
const getProperty = <T, K extends keyof T>(param1: T, param2: K) => {
  return param1[param2];
};


const user = {
    id: 1,
    name: "John Doe", 
    age: 21
}

// console.log(getProperty(user , 'name'));

// problem 5
interface Book{
    title:string
    author:string
    publishedYear:number
    isRead?:boolean
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const toggleReadStatus =(book:Book)=>{
    return {
        ...book , 
        isRead:true 
    }
}
const  toggleReadStatusSee= toggleReadStatus(myBook)




// problem 6
class Person{
    name:string;
    age:number;

    constructor(name:string , age:number ,  ){
        this.name=name
        this.age=age
    }
}
class Student extends Person{
    grade:string;
    constructor(name:string , age:number ,  grade:string){
        super( name,age );
        this.grade = grade
    }
    getDetails(){
        return `Name:${this.name} Age:${this.age} Grade:${this.grade}`
    }
}
const student = new Student("Alice",20, "A");
const getDetails = student.getDetails()



// problem 7 
const getIntersection  = (arr1:number[] , arr2 :number[]):number[] =>{
  const setArray = new Set(arr2)
  return arr1.filter(value=>setArray.has( value))
}

const valueSee = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])


