module.exports = function toReadable (number) {
  
    let zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let tenth = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number < 20) return zeroToNineteen[number - 1];
    else if (number < 100) {
        let tenthIndex = number.toString()[0] - 1;
        let zeroToNineteenIndex = number.toString()[1];
        return tenth[tenthIndex] + zeroToNineteen[zeroToNineteenIndex];

    } else if(number < 999){
        return zeroToNineteen[number[0]] + 'hundred' + tenth[number[1]] + zeroToNineteen[number[2]];
     }

}
