class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        return key % this.size;
    }

    insert(key) {
        let index = this.hash(key);

        while (this.table[index] !== undefined) {
            index =(index + 1) % this.size;
        }

        this.table[index] = key;
    }

    display() {
        for (let i=0; i<this.size; i++) {
            console.log(i,"=>",this.table[i]);
        }
    }
}

let ht = new HashTable(10);

ht.insert(25);
ht.insert(35);
ht.insert(45);

ht.display();