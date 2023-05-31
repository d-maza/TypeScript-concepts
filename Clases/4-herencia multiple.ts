import { Person } from "./2-implement vs extends";


interface Animal {
    spice: string
}

class Human implements Person ,Animal {
name: string = 'David'
age: number = 47
spice: string= 'Human'

}
