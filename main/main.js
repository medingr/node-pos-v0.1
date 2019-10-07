module.exports = function main(inputs) {
    console.log("Debug Info");
   

    var productList = populateProductList(inputs); 

    getUniqueBarCodes(inputs);

    function printInventory (inputs){

      let ReceiptToPrint = '***<store earning no money>Receipt ***\n' ;

     //loop through inputs and iterate based on length of unique products 
     // for every loop append details for Name , Quantity ,  unit price and subtotal 
     //by calling functions that will get these values

    };

    function populateProductList(inputs){
        let uniqueBarCodes = getUniqueBarCodes(inputs);
        
        let productList=[];
        for(let uniqueBarCode of uniqueBarCodes){
            let product = inputs
                .filter(input=>input.Barcode === uniqueBarCode)
                [0];
           
            let productCount = inputs.filter(product => product.length );
            product.count=productCount;
            productList.push(product);
        }

        return productList;
    }
    

    function getUniqueBarCodes (inputs){
        var  listOfUniqueBarCodesandPrice = [...new Set( inputs.map(x => x.Barcode))];
        return listOfUniqueBarCodesandPrice;
    }

    ;


    // function countNumberOfProductOccurence (inputs){
    //     var occurs = 0;
  
    //     for (var i=0; i<arr.length; i++) {
    //     if ( 'id' in arr[i] && arr[i].id === id ) occurs++;
    //     }

    // return occurs;
    // }

};