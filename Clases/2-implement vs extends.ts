

export interface Person {
    name: string,
    age: number
}



export interface Developer extends Person {
    code: string
}

export interface Developer extends Person {
    code: string
    skill: string
}

export class Frontend implements Developer {
    code: string = 'Java'
    name: string = 'Marcos'
    skill: string ='Scrum'

    age: number = 38

}
export class Employees implements Frontend {
    salary: number = 2000
    code: string = 'TypeScrypt'
    name: string = 'David'
    skill: string= 'Jira'
    age: number = 47
    say(){
        console.log(this) 
       }

}

export class Employees2 extends Frontend {
   say(){
    console.log(this) 
   }
}

const worker = new Employees
const worker2 = new Employees2

worker.say()
worker2.say()