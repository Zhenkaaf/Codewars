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

function deleteNth(arr, n) {}

deleteNth([20, 37, 20, 21], 1); // [20,37,21])
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); // [1, 1, 3, 3, 7, 2, 2, 2])
deleteNth([12, 39, 19, 39, 39, 19, 12], 1); // [12, 39, 19])
