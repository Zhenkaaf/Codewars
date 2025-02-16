function doubleChar(str) {
    /*  console.log(
        [...str]
            .map((char) => {
                return char + char;
            })
            .join("")
    ); */
    /*  console.log(
        [...str].reduce((acc, char) => {
            return acc + char + char;
        }, "")
    ); */
    /*  for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    } */
}

doubleChar("123456asd"); // "112233445566");
doubleChar("%^&*("); //"%%^^&&**((");
doubleChar("illuminati"); // "iilllluummiinnaattii");
doubleChar("1337"); // "11333377");
doubleChar("Adidas"); // "AAddiiddaass");
doubleChar("abcd"); // "aabbccdd");

/****************************************************************************************** */
class PowerStation {
    constructor(batteryCapacity, maximumInput, maximumOutput) {
        this.batteryCapacity = batteryCapacity;
        this.maximumInput = maximumInput;
        this.maximumOutput = maximumOutput;
        this.batteryLevel = batteryCapacity;
        this.inputPower = 0;
        this.outputs = new Map();
    }

    updateInput(voltage, current) {
        this.inputPower = Math.min(voltage * current, this.maximumInput);
    }

    connectOutput(outputId) {
        this.outputs.set(outputId, 0);
    }

    updateOutput(outputId, voltage, current) {
        if (this.outputs.has(outputId)) {
            this.outputs.set(outputId, voltage * current);
        }
    }

    disconnectOutput(outputId) {
        this.outputs.delete(outputId);
    }

    updateBatteryLevel(capacityLeft) {
        this.batteryLevel = capacityLeft;
    }

    get batteryPercentage() {
        return Number(
            ((this.batteryLevel / this.batteryCapacity) * 100).toFixed(1)
        );
    }

    get totalOutputPower() {
        return [...this.outputs.values()].reduce(
            (sum, power) => sum + power,
            0
        );
    }

    get timeRemaining() {
        const netPower = this.inputPower - this.totalOutputPower;
        if (netPower === 0) return "99:59";
        const hours = Math.ceil(this.batteryLevel / Math.abs(netPower));
        const minutes = (hours * 60) % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}`;
    }

    get status() {
        if (
            this.totalOutputPower > this.maximumOutput ||
            this.inputPower > this.maximumInput
        ) {
            return "overload";
        } else if (this.inputPower > this.totalOutputPower) {
            return "charging";
        } else if (this.totalOutputPower > this.inputPower) {
            return "discharging";
        } else {
            return "idle";
        }
    }
}
/**************************************************************************************** */

function billboard(name, price = 30) {
    /*  console.log(
        [...name].reduce((acc) => {
            return acc + price;
        }, 0)
    ); */
}

billboard("Jeong-Ho Aristotelis"); // 600);
billboard("Abishai Charalampos"); // 570);
billboard("Idwal Augustin"); // 420);
billboard("Hadufuns John", 20); // 260);
billboard("Zoroaster Donnchadh"); // 570);
billboard("Claude Miljenko"); // 450);
billboard("Werner Vígi", 15); // 165);
billboard("Anani Fridumar"); // 420);
billboard("Paolo Oli"); // 270);
billboard("Hjalmar Liupold", 40); // 600);
billboard("Simon Eadwulf"); // 390);

/********************************************************************************************** */

function sayHello(name, city, state) {
    /*  console.log(
        "Hello, " +
            name.join(" ") +
            "! " +
            "Welcome to " +
            city +
            ", " +
            state +
            "!"
    ); */
    /*  console.log(`Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`); */
}

sayHello(["John", "Smith"], "Phoenix", "Arizona"); // 'Hello, John Smith! Welcome to Phoenix, Arizona!')
sayHello(["Franklin", "Delano", "Roosevelt"], "Chicago", "Illinois"); // 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
sayHello(["Wallace", "Russel", "Osbourne"], "Albany", "New York"); // 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')

/*************************************************************************************************** */

function reverseWords(str) {
    /* console.log(
        str
            .split(" ")
            .map((item) => [...item].reverse().join(""))
            .join(" ")
    ); */
}

reverseWords("The quick brown fox jumps over the lazy dog."); // 'ehT kciuq nworb xof spmuj revo eht yzal .god', `Input: "The quick brown fox jumps over the lazy dog."`);
reverseWords("apple"); // 'elppa', `Input: "apple"`);
reverseWords("a b c d"); // 'a b c d', `Input: "a b c d"`);
reverseWords("  double  spaced  words  "); // '  elbuod  decaps  sdrow  ', `Input: "  double  spaced  words  "`);

/*********************************************************************************************************************** */

function descendingOrder(n) {
    /* const strOfNumbers = n.toString();
    const arrOfNumbers = strOfNumbers.split("").map((item) => Number(item));
    arrOfNumbers.sort((a, b) => b - a);
    console.log(Number(arrOfNumbers.join(""))); */
    /* console.log(
        Number(
            n
                .toString()
                .split("")
                .sort((a, b) => a - b)
                .reverse()
                .join("")
        )
    ); */
}

descendingOrder(0); // 0)
descendingOrder(1); // 1)
descendingOrder(111); // 111)
descendingOrder(15); // 51)
descendingOrder(1021); // 2110)
descendingOrder(123456789); // 987654321)

/********************************************************************************************************************* */

function deleteNth(arr, n) {
    /*  const collectionMap = new Map();
    const resArr = [];
    arr.forEach((item) => {
        const valueOfKey = collectionMap.get(item) || 0;
        if (valueOfKey < n) {
            collectionMap.set(item, valueOfKey + 1);
        }
    });
    console.log(collectionMap);
    for (let i = 0; i < arr.length; i++) {
        if (collectionMap.get(arr[i]) > 0) {
            resArr.push(arr[i]);
            collectionMap.set(arr[i], collectionMap.get(arr[i]) - 1);
        }
    }
    console.log(resArr); */
    /* arr.filter((item) => {
        const valueOfKey = collectionMap.get(item) || 0;
        if (valueOfKey < n) {
            collectionMap.set(item, valueOfKey + 1);
        }
    });
    for (const [key, value] of collectionMap.entries()) {
        for (let i = 1; i <= value; i++) {
            resArr.push(key);
        }
    } */
}

deleteNth([20, 37, 20, 21], 1); // [20,37,21])
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); // [1, 1, 3, 3, 7, 2, 2, 2])
deleteNth([12, 39, 19, 39, 39, 19, 12], 1); // [12, 39, 19])

/*************************************************************************************************** */

function solution(string) {
    /* if (string.length === 0) {
        return "";
    }
    const res = string.split("").map((char) => {
        if (char === char.toUpperCase()) {
            return " " + char;
        } else {
            return char;
        }
    });
    console.log(res.join("")); */
}

solution(""); // "", );
solution("camelCasing"); // "camel Casing",);
solution("camelCasingTest"); // "camel Casing Test", );

/************************************************************************************* */

function generateHashtag(str) {
    /*     const trimedStr = str.replace(/\s+/g, " ").trim();
    if (trimedStr.length === 0) return false;
    const res = trimedStr
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1));
    const result = "#" + res.join("");
    if (result.length > 140) {
        return false;
    }
    console.log(result); */
}

generateHashtag(""); //, false, "Expected an empty string to return false")
generateHashtag(" ".repeat(200)); //, false, "Still an empty string")
generateHashtag("Do We have A Hashtag"); //, "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
generateHashtag("Codewars"); //, "#Codewars", "Should handle a single word.")
generateHashtag("Codewars Is Nice"); //, "#CodewarsIsNice", "Should remove spaces.")
generateHashtag("Codewars is nice"); //, "#CodewarsIsNice", "Should capitalize first letters of words.")
generateHashtag("code" + " ".repeat(140) + "wars"); //, "#CodeWars")
generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
); //, false, "Should return false if the final word is longer than 140 chars.")
generateHashtag("a".repeat(139)); //, "#A" + "a".repeat(138), "Should work")
generateHashtag("a".repeat(140)); //, false, "Too long")

/*************************************************************************************** */
function wave(str) {
    /*  const result = [];
    const arr = str.split("");
    if (arr.length === 0) return [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") continue;
        let newChar = arr[i].toUpperCase();
        const copyOfArr = [...arr];
        copyOfArr.splice(i, 1, newChar);
        result.push(copyOfArr.join(""));
    }
    console.log(result); */
}

//["Hello", "hEllo", "heLlo", "helLo", "hellO"];
wave("hello");

//["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
wave("codewars");

//[];
wave("");

//["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
wave("two words");

//[" Gap ", " gAp ", " gaP "];
wave(" gap ");

/************************************************************************************ */

function titleCase(title, minorWords) {
    /* if (title.length === 0) return "";
    const exceptions = new Set(
        (minorWords || "").split(" ").map((word) => word.toLowerCase())
    );
    const capitalize = (word) => {
        const newWord =
            word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
        return newWord;
    };
    const res = title.split(" ").map((word, index) => {
         if (!exceptions.has(word.toLowerCase()) || index === 0) {
            return capitalize(word);
        } else {
            return word.toLowerCase();
        }
    });
    console.log(res.join(" ")); */
}

titleCase(""); //, '')
titleCase("a clash of KINGS", "a an the of"); //, 'A Clash of Kings')
titleCase("THE WIND IN THE WILLOWS", "The In"); //, 'The Wind in the Willows')
titleCase("the quick brown fox"); //, 'The Quick Brown Fox')

/*************************************************************************************** */

/* var num = 2;
function func(num) {
    var num;//var не переопределяет параметр, поэтому остаётся 10.
    console.log(num);
    num = 5;
}
func(10);
console.log(num);//Глобальная num = 2 не меняется */

/*********************************************************************** */
/* console.log(+"1" + "1" + 2); //'112'
console.log("A" - "B" + "2"); //"A" - "B" → обе буквы не числа, при вычитании получается NaN. NaN + "2" → NaN приводится к строке "NaN" и конкатенируется.
console.log("A" - "B" + 2); //NaN + 2 → NaN (любая операция с NaN даёт NaN */
/******************************************************************************** */

//A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
const decodeWord = (str, offset = 10) => {
    /* if (offset === 0) {
        return str;
    }
    const res = str.split("").map((char) => {
        if (char.toUpperCase() === char) {
            return char;
        }
        return String.fromCharCode(
            char.charCodeAt(0) + offset > 122
                ? char.charCodeAt(0) + offset - 26
                : char.charCodeAt(0) + offset
        );
    });
    return res.join(""); */
};

/* console.log(decodeWord("Abcd", 0)); //Abcd
console.log(decodeWord("Abcd", 1)); //Acde
console.log(decodeWord("50km", 2)); //50mo
console.log(decodeWord("z", 1)); //a
console.log(decodeWord("world", 1));
console.log(decodeWord("abcd5", 2)); */

/***************************************************************************** */

function expandedForm(num) {
    /* const zeros = [];
    const res = [];
    while (num > 0) {
        let oneDigit = num % 10;
        if (oneDigit !== 0) {
            res.unshift(oneDigit + zeros.join(""));
        }
        num = Math.floor(num / 10);
        zeros.push(0);
    }
    console.log(res.join(" + ")); */
}

expandedForm(12); //, "10 + 2");
expandedForm(42); //, "40 + 2");
expandedForm(70304); //, "70000 + 300 + 4");
/********************************************************************* */
String.prototype.camelCase = function () {
    /* console.log(this); // this — объект String, а не примитивная строка
    console.log(this instanceof String); // true
    if (this.toString() === "") return "";
    console.log(
        this.split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join("")
    ); */
};

"test case".camelCase(); //, "TestCase");
"camel Case method".camelCase(); //, "CamelCaseMethod");
"say hello".camelCase(); //, "SayHello");
"camel case word".camelCase(); //, "CamelCaseWord");
"".camelCase(); //, "");
/************************************************************************** */

function toCamelCase(str) {
    /* if (str === "") return "";
    console.log(
        str
            .split(/[_-]/)
            .map((word, index) => {
                if (index === 0 && word[0] === word[0].toLowerCase()) {
                    return word;
                } else {
                    return word[0].toUpperCase() + word.slice(1);
                }
            })
            .join("")
    ); */
}

toCamelCase(""); //, '', "An empty string was provided but not returned")
toCamelCase("the_stealth_warrior"); //, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
toCamelCase("The-Stealth-Warrior"); //, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
toCamelCase("A-B-C"); //, "ABC", "toCamelCase('A-B-C') did not return correct value")
/******************************************************************************************** */

function cakes(recipe, available) {
    /*  for (let [key, value] of Object.entries(recipe)) {
        if (!available.hasOwnProperty(key) || available[key] < value) {
            console.log(0);
            return 0;
        }
    }
    let minAmountOfCakes = Infinity;
    for (let [key, value] of Object.entries(recipe)) {
        minAmountOfCakes = Math.min(
            minAmountOfCakes,
            Math.floor(available[key] / value)
        );
    }
    console.log(minAmountOfCakes);
    return minAmountOfCakes; */
}

cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
); //, 2);
cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
); //, 0);

/**************************************************************************************** */
function scramble(str1, str2) {
    /*     const existingChars = new Map();
    str1.split("").forEach((char) =>
        existingChars.has(char)
            ? existingChars.set(char, existingChars.get(char) + 1)
            : existingChars.set(char, 1)
    );

    for (neededChar of str2) {
        if (
            !existingChars.has(neededChar) ||
            existingChars.get(neededChar) === 0
        ) {
            return false;
        }
        existingChars.set(neededChar, existingChars.get(neededChar) - 1);
    }
    return true; */
}

/* console.log(scramble("rkqodlw", "world")); //, true );
console.log(scramble("cedewaraaossoqqyt", "codewars")); //, true );
console.log(scramble("katas", "steak")); //, false); */

/******************************************************************************** */
function domainName(url) {
    /*     if (!url.startsWith("http")) {
        url = "https://" + url;
    }
    const hostname = new URL(url).hostname;
    const domain = hostname.replace(/^www\./, "").split(".")[0];
    console.log(domain); */
}

domainName("http://google.com"); //, "google");
domainName("http://google.co.jp"); //, "google");
domainName("www.xakep.ru"); //, "xakep");
domainName("https://youtube.com"); //, "youtube");
/******************************************************************************** */
function sumStrings(a, b) {
    /*  const intA = BigInt(a);
    const intB = BigInt(b);
    console.log((intA + intB).toString()); */
}
sumStrings("123", "456"); //,'579')

/********************************************************************* */
/* document.querySelector(".test2").addEventListener("click", () => {
    console.log("cliiiiiiiiick");
});
for (let i = 0; i < 25e8; i++) {
    if (i % 10e7 === 0) console.log(`Итерация: ${i}`);
}
console.log("Цикл завершён"); */
/************************************************************************* */

/* async function getState(promise) {
    console.log(promise);
    return Promise.race([
        promise.then(
            () => "fulfilled",
            () => "rejected"
        ),
        new Promise((resolve) => setTimeout(() => resolve("pending"), 0)),
    ]);
}

(async () => {
    console.log(await getState(Promise.resolve())); // === "fulfilled"
    console.log(await getState(Promise.reject())); // === "rejected"
    console.log(await getState(new Promise(() => {}))); // === "pending"
})(); */

/* Метод then() принимает до двух функций:
1 (onFulfilled) — вызывается, если промис успешно выполнен (fulfilled). В неё передаётся результат промиса.
2 (onRejected) — вызывается, если промис был отклонён (rejected). В неё передаётся причина ошибки. 
В данном случае, поскольку промис создаётся с помощью Promise.resolve(), 
он сразу переходит в состояние fulfilled, и вызывается первая функция. 
Если промис отклонён, будет вызвана вторая функция.*/
/************************************************************************************************ */
function comp(array1, array2) {
    /*     for (let i = 0; i < array1.length; i++) {
        let squaredNum = array1[i] ** 2;
        array2.forEach((item, index) => {
            if (item === squaredNum) {
                array2.splice(index, 1);
            }
        });
    }

    console.log(!array2.length); */
    /*  const arr1 = array1.map((item) => item ** 2).sort((a, b) => a - b);
    const arr2 = [...array2].sort((a, b) => a - b);
    const isTheSame = arr1.every((item, index) => item === arr2[index]);
    console.log(isTheSame); */
}

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
comp(a, b);
comp(
    [2, 10, 9, 5, 3, 3, 1, 0, 7, 3, 5, 10, 6, 1, 8],
    [1, 36, 4, 9, 49, 9, 9, 25, 100, 100, 64, 1, 1, 25, 81]
);

/******************************************************************************* */
