/**
* Counts the number of products in an array that fall within a specified price range.
*
* @param {Array<Object>} products - An array of product objects.
* @param {number} minPrice - The minimum price for the price range.
* @param {number} maxPrice - The maximum price for the price range.
* @returns {number} The count of products within the specified price range.
*/
function countProductsInPriceRange(products, minPrice, maxPrice) {
    const productsInRange = products.filter((product) => {
        const unitPrice = product.unitPrice;
        return unitPrice >= minPrice && unitPrice <= maxPrice;
    });
    return productsInRange.length;
}
/**
 * Filters an array of products based on the product names.
 *
 * @param {Array<Object>} products - An array of product objects.
 * @param {string} filterString - The string to filter product names.
 * @param {boolean} startsWith - Indicates whether to filter names that start with the filterString (default is true).
 * @param {boolean} toLowerCase - Indicates whether to convert the product name and filter string to lower case (default is false).
 * @returns {Array<Object>|string} An array of products whose names match the filterString, or a message indicating that there are no products with the specified filter.
 *
 */
function NameFiltering(products, filterString, startsWith = true, toLowerCase = false) {
    // Filter products based on the specified criteria
    const filteredProducts = products.filter((product) => {
        const productName = product.name;
        if (startsWith) {
            return toLowerCase ? productName.toLowerCase().startsWith(filterString.toLowerCase()) : productName.startsWith(filterString); 
        } else {
            return toLowerCase ? productName.toLowerCase().endsWith(filterString.toLowerCase()) : productName.endsWith(filterString)
        }
    });

    return  filteredProducts.length > 0 ? filteredProducts :  "There are no products with the specified filter";
}
/**
 * Gets the name of a product based on its ID from an array of products.
 *
 * @param {Array<Object>} products - An array of product objects.
 * @param {number} productId - The ID of the product to retrieve the name for.
 * @returns {string} The name of the product with the specified ID, or a message indicating that there is no product with the specified ID.
 */
function getProductNameById(products, productId) {
    const product = products.find((product) => product.id === productId);
    return product ? product.name : 'There is no product with the specified ID';
}
/**
 * Counts the number of active (non-discontinued) products in an array.
 *
 * @param {Array<Object>} products - An array of product objects.
 * @returns {number} The count of active products (discontinued: false).
 */
function countActiveProducts(products) {
    const activeProducts = products.filter((product) => !product.discontinued);
    return activeProducts.length;
}
/**
 * Gets the name of the most expensive or cheapest product in an array based on the indicator.
 *
 * @param {Array<Object>} products - An array of product objects.
 * @param {string} indicator - A string indicating whether to find the most "expensive" or "cheap" product.
 * @returns {string|null} The name of the most expensive or cheapest product, or null if the array is empty.
 */
function getExtremeProduct(products, indicator) {
    if (products.length === 0) {
        return null;
    }
    let extremeProduct = products[0]; 
    for (const product of products) {
        if (indicator === "expensive" && product.unitPrice > extremeProduct.unitPrice) {
            extremeProduct = product;
        } else if (indicator === "cheap" && product.unitPrice < extremeProduct.unitPrice) {
            extremeProduct = product;
        }
    }

    return extremeProduct.name;
}





