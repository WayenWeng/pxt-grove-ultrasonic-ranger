{
    let distance = 0;
    
    while(true)
    {
        distance = Grove_Ultrasonic_Ranger.measureInCentimeters(DigitalPin.P0);
        // distance = Grove_Ultrasonic_Ranger.measureInInches(DigitalPin.P0);
        basic.showNumber(distance);
        basic.pause(1000);
    }
}
