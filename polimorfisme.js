class Kucing{
    bersuara(){
        console.log("Meong ... ");
    }
}

class Anjing{
    bersuara(){
        // console.log("Guk guk ... ");
        console.log("Heyyy antek antek asing ...");
    }
}

class hamster{
    bersuara(){
        console.log("Sik Sik ... ");
    }
}

const hewan = [new Kucing(), new Anjing()];
hewan.forEach(hewan => hewan.bersuara());

const hewan3 = new hamster();
hewan3.bersuara();

//buat file baru PolimorfismePPLG
//buat 2 method skillCoding, levelCoding
