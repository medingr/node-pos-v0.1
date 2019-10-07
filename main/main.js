module.exports = function main(inputs) {
    console.log("Debug Info");
   

    // var productList = populateProductList(inputs); 
    var printReceipt = printInventory (inputs);

    function printInventory (inputs){
       var productList = populateProductList(inputs); 
      let ReceiptToPrint = '***<store earning no money>Receipt ***\n' ;
      productList.forEach(product => {
        let nameOfProduct = 'Name: ' + product.Name;
        let quantityOfProduct = ', Quantity: ' + product.Count;
        let unitPrice = ', Unit price: ' + product.Price;
        let productSubTotal = ', Subtotal: ' + product.Subtotal;
        let total = total + productSubTotal;
        let finalDetails = nameOfProduct + quantityOfProduct + unitPrice + productSubTotal + total +  '/\n';
        ReceiptToPrint = ReceiptToPrint.concat(finalDetails);
    });

    var adults_sum = 0, children_sum = 0;

array.forEach(function(obj){
    adults_sum += obj["adults"];
    children_sum += obj["children"];
});

        return ReceiptToPrint;
    };

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

};