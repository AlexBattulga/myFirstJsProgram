var HOUR = 12;
var MINUTE = 0;
var PERIOD = 'PM';

if(MINUTE > 30 && PERIOD === 'AM'){
    console.log("It's almost", HOUR + 1, "in the morning");
    }else if(MINUTE > 30 && PERIOD === 'PM'){
        console.log("It's almost", HOUR + 1, "in the evening");
    }else if (MINUTE === 15 && PERIOD === 'AM') {
        console.log("it's quarter after", HOUR, "in the morning");
    }
    else if (MINUTE === 15 && PERIOD === 'PM') {
        console.log("it's quarter after", HOUR, "in the evening");
    }
    else if (MINUTE === 30 && PERIOD === 'AM') {
        console.log("it's half past", HOUR, "in the morning");
    }
    else if (MINUTE === 30 && PERIOD === 'PM') {
        console.log("it's half past", HOUR, "in the evening");
    }
    else if (MINUTE === 5 && PERIOD === 'AM') {
        console.log("it's ", MINUTE, "after", HOUR, "in the morning");
    }
    else if (MINUTE === 5 && PERIOD === 'PM') {
        console.log("it's ", MINUTE, "after", HOUR, "in the evening");
    }
    else if ( HOUR === 12 && MINUTE === 0 && PERIOD === 'AM') {
        console.log("It's midnight");
    }
    else if ( HOUR === 12 && MINUTE === 0 && PERIOD === 'PM') {
        console.log("It's noon");
    }
    else if (MINUTE < 30 && PERIOD === 'AM') {
        console.log("It's just after", HOUR, "in the morning");
    }
    else if (MINUTE < 30 && PERIOD === 'PM') {
        console.log("It's just after", HOUR, "in the evening");
    }
else {
    console.log("Have a good one");
}
