class Human {
    constructor() {
        this.name = '';
        this.gender = 'Male';
        this.weight = 70;
    }

    isMale () {
        if (this.gender == 'Male') {
            return true;
        } else {
            this.gender = 'Female'
            return false;
        }
    }
    setGender (gender) {
        this.gender = gender;
    }
    checkApple (apple) {
        apple.weight;
    }
    eat (apple) {
        if (apple.isEmpty() == false) {
            apple.decrease();
            this.weight++;
        }
    }
    say (str) {
        console.log(str);
    }
    getName () {
        alert(this.name);
    }
    setName (name) {
        this.name = name;
    }
    getWeight () {
        alert(this.weight);
    }
    setWeight (weight) {
        this.weight = weight;
    }
}

