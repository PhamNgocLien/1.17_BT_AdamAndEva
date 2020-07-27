class Apple {
    constructor() {
        this.weight = 10;
    }

    decrease (){
        this.weight--;
    }
    isEmpty (){
        if (this.weight == 0) {
            return true;
        } else {
            return false;
        }
    }
    getWeight () {
        return this.weight;
    }
}