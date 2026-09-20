class HashTable {
    constructor(size) {
        this.table = new Array(size);

        for (let i = 0; i < size; i++) {
            this.table[i] = [];
        }
    }

    hash(key) {
        return key % this.table.length;
    }

    insert(key) {
        let index = this.hash(key);

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key === key) {
                this.table[index][i].count++;
                return;
            }
        }
        this.table[index].push({
            key: key,
            count: 1
        });
    }

    display() {
        for (let i=0; i<this.table.length; i++) {
            console.log(i + "->", this.table[i]);
        }
    }
}

let arr = [10,20,10,30,20,10];

let ht = new HashTable(10);

for (let num of arr) {
    ht.insert(num);
}

ht.display();