// Code your solution in this file!
function distanceFromHqInBlocks(arg) {
    return Math.abs(arg-42);
}

function distanceFromHqInFeet(arg) {
    let blocks = Math.abs(arg-42);
    return blocks*264;

}

function distanceTravelledInFeet(arg1, arg2) {
    let blocks = Math.abs(arg1-arg2);
    return blocks*264;
}

function calculatesFarePrice(start, destination) {
    let blocks = distanceTravelledInFeet(start, destination);
    
    return blocks <= 400 ? 0
    : blocks>400 && blocks<=2000 ? (blocks-400)*0.02
    : blocks>2000 && blocks<=2500 ? 25
    : "cannot travel that far";

}

