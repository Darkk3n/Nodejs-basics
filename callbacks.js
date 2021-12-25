let fruits = ["Apple", "Banana", "Orange"];

const getFruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log(data);
        });
    }, 3000);

};

const postFruit = (fruit, callbackFunction) => {
    setTimeout(() => {
        fruits.push(fruit);
        callbackFunction();
    }, 2000);
}

postFruit("Pear", getFruits);