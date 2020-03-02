module.exports = (function() {
    const ones = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };
    const tens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };

    return function toReadable(number) {
        if (number === 0) return "zero";

        if (number < 20) return ones[number];

        let o = number % 10;
        let t = (number - o) % 100;
        if (number < 100) {
            return number % 10
                ? `${tens[t]} ${toReadable(number - t)}`
                : `${tens[t]}`
        }

        let h = (number - t - o) % 1000;
        if (number < 1000) {
            return number % 100
                ? `${ones[h / 100]} hundred ${toReadable(number - h)}`
                : `${ones[h / 100]} hundred`;
        }
    };
})();
