import { User, UserBuilder } from "./bilder";

export function show() : void {
 const user: User = new UserBuilder("Admin")
    .setPhone("0123456789")
    .setAge(26)
    .setAddress("india")
    .build();
 console.log(user.Name + " " + user.Age + " " + user.Phone + " " + user.Address);
}

show();

