//abstraksi.je es

class Mobil{
    constructor(merek){
        this.merek = merek;
    }

    //method publik
    nyalakan(){
        console.log("nyalakan mobil");
        this.#prosesMesin();
        console.log("mobil siap digunakan");
    }

    //method private
    #prosesMesin(){
        console.log("proses mesin");
    }
}

const mobil = new Mobil("Lamborghini");
mobil.nyalakan();
const mobisport = new Mobil( "Porsche");
mobisport.nyalakan();
const mobilSUV = new Mobil( "McLaren" ); mobilSUV
mobilSUV.nyalakan();