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

export const getExpireProducts = (productsList, arrayOfExpiredProducts = []) => {
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

        // warranty expiry time

        var orderedDate = new Date(element.orderedDate);
        var year = orderedDate.getFullYear();
        var month = orderedDate.getMonth();
        var day = orderedDate.getDate();
        var expiryDate = new Date(year + (warrantyP + extendedW), month, day)

        if (expiryDate < new Date()) {
            arrayOfExpiredProducts.push(element);
        }
    });
    return arrayOfExpiredProducts;
}