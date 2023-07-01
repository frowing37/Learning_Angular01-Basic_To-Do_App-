export class Model{
    user;
    items;

    constructor(){
        this.user = "Frowi";
        this.items = [
            new toDoItem("Spor",true),
            new toDoItem("Kahvaltı",false),
            new toDoItem("Kitap Okuma",false),
            new toDoItem("Sinema",false),
        ];
        }
}

export class toDoItem{
    description;
    action;

    constructor(description : any,action : any){
        this.description = description;
        this.action = action;
    }
}