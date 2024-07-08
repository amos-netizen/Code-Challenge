//Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

  // > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.//
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;

    if(typeof speed !== "number || isNaN(speed) || speed < 0"){
        console.log("Invalid speed");
        return;
    }
    if (speed < speedLimit) {
        console.log("OK");
    }else{
        //calculate the number of demerit points
        let points = (speed - speedLimit) /kmPerPoint;
        // round off to the nearest whole number
        points = points - (points % 1);
        if  (points > maxPoint) {
            console.log("License Suspended");
        }else{
            console.log(`points: $(points)`);
        }
    }
}