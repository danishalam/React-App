//To get All prpduct from JSON.....
export const getAllProducts = (json, products = []) => {
    if (json.hasOwnProperty("children")) {
        json.children.forEach(element => {
            getAllProducts(element, products);
        });
    } else {
        products.push(json);
    }
    return products;

}

//To get the Product which is expiring soon.....
export const getExpiringProducts = (productsList, arrayOfExpiringProducts = []) => {
    productsList.filter(function (element) {
        var warrantyP = element.warrantyPeriod.charAt(0);

        if (isNaN(warrantyP)) {
            warrantyP = 0;
        } else {
            warrantyP = parseInt(warrantyP);
        }

        var extendedW = element.extendedWarranty.charAt(0);

        if (isNaN(extendedW)) {
            extendedW = 0;
        } else {
            extendedW = parseInt(extendedW)
        }

        var orderedDate = new Date(element.orderedDate);
        var year = orderedDate.getFullYear();
        var month = orderedDate.getMonth();
        var day = orderedDate.getDate();
        var expiryDate = new Date(year + (warrantyP + extendedW), month, day)

        if (expiryDate < new Date()) {
            arrayOfExpiringProducts.push(element);
        }
    });
    return arrayOfExpiringProducts;
}

//To get the products which has expired.....
export const getExpiredProducts = allProducts => {
    var expiredProduct = allProducts.filter(function(element) {
      var warrantyP = element.warrantyPeriod.charAt(0);
      if (isNaN(warrantyP)) {
        warrantyP = 0;
      } else {
        warrantyP = parseInt(warrantyP);
      }
  
      var extendedW = element.extendedWarranty.charAt(0);
  
      if (isNaN(extendedW)) {
        extendedW = 0;
      } else {
        extendedW = parseInt(extendedW);
      }
  
      var orderedDate = new Date(element.orderedDate);
      var year = orderedDate.getFullYear();
      var month = orderedDate.getMonth();
      var day = orderedDate.getDate();
      var expiryDate = new Date(year + (warrantyP + extendedW), month, day);
  
      var currentDate = new Date();
  
      const diffTime = Math.abs(currentDate.getTime() - expiryDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffDays);
  
      if (diffDays <= 120) {
        return element;
      }
    });
    console.log("ExpiredProducts", expiredProduct);
    return expiredProduct;
  };