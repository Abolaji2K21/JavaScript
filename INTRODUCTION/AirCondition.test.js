let {AirCondition} = require('./airCondition.js'); 

describe('AirCondition', () => {
    let Aircondition;

    beforeEach(() => {
        myAircondition = new AirCondition();
    });

    test('Check if AC is on', () => {
        myAircondition.setAcOff(true);

        myAircondition.setAcOn(true);
        expect(myAircondition.getAcOn()).toBeTruthy();
    });

    test('Check if AC is off', () => {
        myAircondition.setAcOn(true);

        myAircondition.setAcOff(true);
        expect(myAircondition.getAcOff()).toBeTruthy();
    });

    test('Set temperature with AC on', () => {
        myAircondition.setAcOn(true);
        const initialTemperature = myAircondition.getTemperature();

        const newTemperature = 25;
        myAircondition.setTemperature(newTemperature);

        expect(myAircondition.getTemperature()).toBe(newTemperature);
    });

    test('Set temperature with AC off', () => {
        myAircondition.setAcOn(false);
        const initialTemperature = myAircondition.getTemperature();

        const newTemperature = 25;
        myAircondition.setTemperature(newTemperature);
        expect(myAircondition.getTemperature()).toBe(initialTemperature);
    });

    test('Set temperature with AC on above 30', () => {
        myAircondition.setAcOn(true);

        const initialTemperature = myAircondition.getTemperature();

        const newTemperature = 35;
        myAircondition.setTemperature(newTemperature);
        expect(myAircondition.getTemperature()).toBe(initialTemperature);
    });

    test('Set temperature with AC on below 16', () => {
        myAircondition.setAcOn(true);

        const initialTemperature = myAircondition.getTemperature();

        const newTemperature = 14;
        myAircondition.setTemperature(newTemperature);
        expect(myAircondition.getTemperature()).toBe(initialTemperature);
    });

    test('Set temperature with AC off below 16', () => {
        myAircondition.setAcOn(false);

        const initialTemperature = myAircondition.getTemperature();

        const newTemperature = 14;
        myAircondition.setTemperature(newTemperature);
        expect(myAircondition.getTemperature()).toBe(initialTemperature);
        myAircondition.setAcOff(true);
        expect(myAircondition.getAcOff()).toBeTruthy();
    });

    test('Set temperature with AC off above 30', () => {
        myAircondition.setAcOn(false);

        const initialTemperature = myAircondition.getTemperature();

        const newTemperature = 32;
        myAircondition.setTemperature(newTemperature);
        expect(myAircondition.getTemperature()).toBe(initialTemperature);
        myAircondition.setAcOff(true);
        expect(myAircondition.getAcOff()).toBeTruthy();
    });

    test('Set temperature with invalid parameter', () => {
        myAircondition.setTemperature('invalid');
        expect(myAircondition.getTemperature()).toBe(16);
    });


});