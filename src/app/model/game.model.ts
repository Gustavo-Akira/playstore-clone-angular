export default class Game{
    label: string;
    price: string;
    image: string;
    gameType: string;
    constructor(label: string, price: string, image: string, gameType: string){
        this.label = label;
        this.price = price;
        this.image =image;
        this.gameType = gameType;
    }
}