var car = {
    
    go: function () {
        console.log(this.name + " is moving");
    },

    playMusic: function () {
        console.log(this.name + " is playing music");
    },

    getName: function () {
        return this.name;
    },

    getWheels: function () {
        return this.wheels + " wheels";
    }
};

var BMW = {
	name: "BMW",
	wheels: "winter"
};

BMW.__proto__ = car;

console.log("This is " + BMW.getName());
BMW.go();
BMW.playMusic();
console.log(BMW.getName() + " has " + BMW.getWheels());

var LadaKalina = {
	name: "LadaKalina",
	wheels: "summer",
	go: function () {
        console.log(this.name + " is not moving");
    }
};

LadaKalina.__proto__ = car;

console.log("This is " + LadaKalina.getName());
LadaKalina.go();
LadaKalina.playMusic();
console.log(LadaKalina.getName() + " has " + LadaKalina.getWheels());
