let fruits = ["Apple", "Banana", "Orange"];

const getFruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log(data);
        });
    }, 1000);

};

const postFruit = (fruit) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fruits.push(fruit);
            let err = false;
            if (!err)
                resolve();
            else
                reject('Something went wrong');
        }, 2000);
    });
}

// postFruit('Pear')
//     .then(getFruits)
//     .catch((err) => {
//         console.log(err);
//     });

const init = async () => {
    try {
        await postFruit('Pear');
        getFruits();
    } catch (error) {
        console.log(error);
    }
}

init();