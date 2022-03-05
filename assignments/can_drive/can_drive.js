function CanDrive(hasDrivingLiscence, isTired, isSober) {
    switch(true){
        case(!hasDrivingLiscence && !isTired && isSober):
            console.log("You cannot Drive");
            break;
        case(hasDrivingLiscence && !isTired && isSober):
            console.log("you can Drive");
            break;
        case(hasDrivingLiscence && isTired && !isSober):
            console.log("You should't Drive");
            break;
        default:
        console.log("You Cannot be Tired and Sober at the same time ! or You left some details to be filled !");
        
    }
}

module.exports = CanDrive;
