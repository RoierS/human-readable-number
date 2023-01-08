module.exports = function toReadable (number) {
    let zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenToNinety = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let tenToNinetyIndex = number.toString()[0] - 1;
    let zeroToNineteenIndex = number.toString()[1];
    let getSecondIndex = number.toString()[2];
    let getFirstIndex = number.toString()[1] - 1;
    let getZeroIndex = number.toString()[0];
    let getTeen = Number(number.toString().slice(1));
    let tens = Math.floor(number / 10);
    
    if(number < 20) {
        return zeroToNineteen[number];
    } else if((number == 20) || (number == 30) || (number == 40) || (number == 50) || (number == 60) || (number == 70) || (number == 80) || (number == 90)){
        return `${tenToNinety[tens - 1]}`;
    } else if(number == 100 || number == 200 || number == 300 || number == 400 || number == 500 || number == 600 || number == 700 || number == 800 || number == 900) {
        return `${zeroToNineteen[number / 100]} hundred`;
    } else if (number < 100) {
        return `${tenToNinety[tenToNinetyIndex]} ${zeroToNineteen[zeroToNineteenIndex]}`;
    } else if (number < 120) {
        return `${zeroToNineteen[getZeroIndex]} hundred ${zeroToNineteen[getTeen]}`;
    } else if(getSecondIndex == '0'){
        return `${zeroToNineteen[getZeroIndex]} hundred ${tenToNinety[getFirstIndex]}`
    } else if((number < 220 && number > 200) || (number < 320 && number > 300) || (number < 420 && number > 400) || (number < 520 && number > 500) || (number < 620 && number > 600) || (number < 720 && number > 700) || (number < 820 && number > 800) || (number < 920 && number > 900)) {
        return `${zeroToNineteen[getZeroIndex]} hundred ${zeroToNineteen[getTeen]}`;
    } else if(number < 1000) {
        return `${zeroToNineteen[getZeroIndex]} hundred ${tenToNinety[getFirstIndex]} ${zeroToNineteen[getSecondIndex]}`;
    } 
}


