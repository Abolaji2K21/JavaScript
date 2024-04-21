class AirCondition {
    constructor() {
        this.acOff = false;
        this.acOn = false;
        this.temperature = 16;
    }

    getAcOff() {
        return this.acOff;
    }

    getAcOn() {
        return this.acOn;
    }

    getTemperature() {
        return this.temperature;
    }

    setTemperature(temperature) {
        if (this.getAcOn() && temperature >= 16 && temperature <= 30) {
            this.temperature = temperature;
        }
    }

    increaseTemperature() {
        if (this.acOn && this.temperature < 30) {
            this.temperature++;
        }
    }

    decreaseTemperature() {
        if (this.acOn && this.temperature > 16) {
            this.temperature--;
        }
    }

    setAcOff(acOff) {
        this.acOff = acOff;
    }

    setAcOn(acOn) {
        this.acOn = acOn;
    }
}

module.exports = { AirCondition };