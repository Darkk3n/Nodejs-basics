const print = (data) => {
    console.log(data);
}

const opt = (data) => {
    console.log(data);
    console.log(data);
}
//module.exports enables the methods created in this file, since there's more than one you can give an alias to each method
module.exports.print = print;
module.exports.opt = opt;

