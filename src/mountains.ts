// declare infterface called Mountain that contains name- string, and height- num
interface Mountain {
    name: string;
    height: number;
};

// declare an array called mountains which is an array of type Mountain, filled in with table data
const mountains: Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];

// declare a function called findNameOfTallestMountain. Takes one parameter, an array of Mountain objects.
// it returns a string, name of the tallest mountain in the array
// if the argument is empty it returns an empty string
const findNameOfTallestMountain = (mountainArray: Mountain[]): string => {
    if (mountainArray.length === 0) {
      return "";
    }

    let tallestMountainName: string = "";
    let tallestMountainHeight: number = 0;

    for (const mountain of mountainArray) {
        if (mountain.height > tallestMountainHeight) {
            tallestMountainHeight = mountain.height;
            tallestMountainName = mountain.name;
        };
    };
    return tallestMountainName
};

// call findNameOfTallestMountain, passing it the mountains array as an argument
const tallestMountainName = findNameOfTallestMountain(mountains);
// store the result of the function call in a variable then console.log the vartiable
console.log(tallestMountainName);

// export mountain interface and the findNameOfTallestMountain function
export {Mountain, findNameOfTallestMountain };
