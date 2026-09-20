class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        return key % this.size;
    }

    insert(key){
        let index = this.hash(key);
        this.table[index] = key;
    }

    display() {
        for (let i=0; i<this.size; i++) {
            console.log(i,"=>",this.table[i]);
        }
    }
}

let ht = new HashTable(5);

ht.insert(10);
ht.insert(21);
ht.insert(35);

ht.display();