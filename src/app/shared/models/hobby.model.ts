export class Hobby {
    id: number;
    iconName: string;
    description :string;

    constructor(id: number, iconName: string, description: string){
        this.id = id;
        this.iconName = iconName;
        this.description = description;
    }
}