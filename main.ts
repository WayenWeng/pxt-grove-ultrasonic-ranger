
/**
 * Functions to operate Grove Ultrasonic Ranger module.
 */
//% weight=10 color=#9F79EE icon="\uf108"
namespace Grove_Ultrasonic_Ranger
{   
    /**
     * Measure distance in centimeters
     * @param pin signal pin of ultrasonic ranger module
     */
    //% blockId=ultrasonic_centimeters block="distance in cm|%pin"
    export function measureInCentimeters(pin: DigitalPin): number
    {
        let duration = 0;
        let RangeInCentimeters = 0;
        
        pins.digitalWritePin(pin, 0);
        // control.waitMicros(2);
        control.waitMicros(200);
        pins.digitalWritePin(pin, 1);
        // control.waitMicros(5);
        control.waitMicros(15);
        pins.digitalWritePin(pin, 0);
        
        duration = pins.pulseIn(pin, PulseValue.High);
        
        RangeInCentimeters = duration * 153 / 29 / 2 / 100;
        
        return RangeInCentimeters;
    }
    
    /**
     * Measure distance in inches
     * @param pin signal pin of ultrasonic ranger module
     */
    //% blockId=ultrasonic_inches block="distance in inch|%pin"
    export function measureInInches(pin: DigitalPin): number
    {
        let duration = 0;
        let RangeInCentimeters = 0;
        
        pins.digitalWritePin(pin, 0);
        // control.waitMicros(2);
        control.waitMicros(200);
        pins.digitalWritePin(pin, 1);
        // control.waitMicros(5);
        control.waitMicros(15);
        pins.digitalWritePin(pin, 0);
        
        duration = pins.pulseIn(pin, PulseValue.High);
        
        RangeInCentimeters = duration * 153 / 74 / 2 / 100;
        
        return RangeInCentimeters;
    }
}