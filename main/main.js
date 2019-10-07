module.exports = function main() {
    console.log("Debug Info");
    return 'Hello World!';

    function printInventory (inputs){
    var finalResult = [];
    var sameBarcode = [...new Set(inputs.map(item => Barcode.Group))];

    var count = dataset.inputs(function(n, val) {
    return n + (val === sameBarcode);
    }, 0);

    const sameBarcode = inputs.map(x => x.Barcode);
    sameBarcode.unique();

    }

};