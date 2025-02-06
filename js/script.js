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
