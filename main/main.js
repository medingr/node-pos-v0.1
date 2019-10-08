module.exports = function main(inputs) {
    console.log("Debug Info");

    var printReceipt = printInventory (inputs);
    return printReceipt;

};

function printInventory (inputs){
    var productList = populateProductList(inputs); 
    let ReceiptToPrint = '***<store earning no money>Receipt ***\n' ;
    let total = 0;
    
    productList.forEach(product => {
        total +=  product.Subtotal;
        let unit = getUnitOfProduct(product.Unit);
        ReceiptToPrint+=`Name: ${product.Name}, Quantity: ${product.Count}${unit}` +
            `, Unit price: ${product.Price.toFixed(2)} (yuan), Subtotal: ${product.Subtotal.toFixed(2)} (yuan)`+ `\n` ;
    });

    ReceiptToPrint += '----------------------\n' +
                     `Total: ${total.toFixed(2)} (yuan) \n` +
                    '**********************\n';

    return ReceiptToPrint;
};

function getUnitOfProduct (product) {
    return product == "bottle" ? " bottles" : "";
}

function populateProductList(inputs){
    let uniqueBarCodes = getUniqueBarCodes(inputs);
    
    let productList=[];
    for(let uniqueBarCode of uniqueBarCodes){
        let product = inputs
            .filter(input=>input.Barcode === uniqueBarCode)
            [0];
        let productCount = inputs
            .filter(input=> input.Barcode === uniqueBarCode).length;
        let subtotal = productCount * product.Price;
        product.Subtotal= subtotal;
        product.Count= productCount;
        productList.push(product);
    }

    return productList;
};

function getUniqueBarCodes (inputs){
    var  listOfUniqueBarCodesandPrice = [...new Set( inputs.map(x => x.Barcode))];
    return listOfUniqueBarCodesandPrice;
};