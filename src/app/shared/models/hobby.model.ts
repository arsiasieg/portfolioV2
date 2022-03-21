export class Hobby {
    id: number;
    icon: string;
    description :string;

    constructor(id: number, icon: string, description: string){
        this.id = id;
        this.icon = icon;
        this.description = description;
    }
}