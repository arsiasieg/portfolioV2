import { Technologie } from "./technologie.model";

export class Project {
    id: number;
    title: string;
    image: string;
    description : string;
    technologies : Technologie[];
    statut: string;
    github: string|undefined;
    link: string|undefined;

    constructor(
        id: number,
        title: string,
        image: string,
        description: string,
        technologies: Technologie[],
        statut: string,
        github: string|undefined,
        link: string|undefined){
            this.id = id;
            this.title = title;
            this.image = image;
            this.description = description;
            this.technologies = technologies;
            this.statut = statut;
            this.github = github;
            this.link = link;
    }
}