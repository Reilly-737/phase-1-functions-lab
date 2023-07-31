function distanceFromHqInBlocks(pickupLoca){
const hqLocation = 42;
return Math.abs(pickupLoca - hqLocation);
}
function distanceFromHqInFeet(someValue){
 const blocksFromHq = distanceFromHqInBlocks(someValue);
 const feetPerBlock = 264;
 return blocksFromHq * feetPerBlock;
}

function distanceTravelledInFeet(start, destination){
 const feetPerBlock = 264; 
 const blocksTravelled = Math.abs(destination - start);
 return blocksTravelled * feetPerBlock
}

function calculatesFarePrice(start, destination){
 const feetPerBlock = 264; 
 const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
  
 if (distanceInFeet <= 400) {
    return 0;
 } else if (distanceInFeet > 400 && distanceInFeet <= 2000){
    const feetOver400 = distanceInFeet - 400;
    return feetOver400 * 0.02;
 } else if (distanceInFeet > 200 && distanceInFeet <= 2500){
    return 25;
 } else { 
    return 'cannot travel that far';
 }
}