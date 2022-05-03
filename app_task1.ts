import {ILaunchRocket, IUser} from "./interfaces";


const newUser: Partial<IUser<string, string>> = {
    name: "Max",
    age: 18,
    gender: 'male'
}

const myRocket: ILaunchRocket = {
    mission_name: "Starlink-15 (v1.0)",
    launch_date_local: "2020-10-24T11:31:00-04:00",
    launch_site: {
        site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    links: {
        article_link: null,
        video_link: "https://youtu.be/J442-ti-Dhg"
    },
    rocket: {
        rocket_name: "Falcon 9",
        first_stage: {
            cores: [
                {
                    flight: 7,
                    core: {
                        reuse_count: 6,
                        status: "unknown"
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: "Satellite",
                    payload_mass_kg: 15400,
                    payload_mass_lbs: 33951.2
                }
            ]
        }
    }
}

//-----------------------------------------------------------------------------






// Class

class Book {
    constructor(public title: string, private author: string, private datePublication: number) {
        /*        this.title = title;
                this.author = author;
                this.datePublication = datePublication;*/
    }

    getAuthor(): string {
        return  this.author;
    }
}

/*const newBook1: Book = {title: 'The Little Prince', author: 'Antoine De Saint-Exupery', datePublication: 1943, getAuthor(): string {
    return this.author;
    }};*/

let newBook2 = new Book('Winnie-The-Pooh', 'A. A. Milne', 1926);
console.log(newBook2.getAuthor());