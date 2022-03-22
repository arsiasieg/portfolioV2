export class User {
    id: number;
	firstname: string;
	lastname: string;
	email: string;
    address: string;
    phone: string;
    description: string;

    constructor(
        id: number,
        firstname: string,
        lastname: string,
        email: string,
        address: string,
        phone: string,
        description: string){
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.address = address;
            this.phone = phone;
            this.description = description;
        }
}