class Product {
    product:string;
    price:string;
    desc:string;
    buyer:string;
}

function main() {
    if(isValid()) { // if valid
        let product = getProduct(); // get product information
        displayProduct(product); // display the product information
    }
}

function displayProduct (product:Product) {
    let productText = document.createElement("h2");
    productText.innerText = product.product.toString();

    let productPrice = document.createElement("p");
    productPrice.innerText = product.price.toString();

    let productDesc = document.createElement("p");
    productDesc.innerText = product.desc.toString();

    let productBuyer = document.createElement("p");
    productBuyer.innerText = product.buyer.toString();

    let productDiv = document.createElement("div");
    productDiv.classList.add("list");
    productDiv.appendChild(productText);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productDesc);
    productDiv.appendChild(productBuyer);
    let productAdd = document.getElementById("list");
    productAdd.appendChild(productDiv);
}

function isValid():boolean {
    let productValid = getElement("product");
    let priceValid = getElement("price");
    let descValid = getElement("desc");
    let buyerValid = getElement("buyer");
    if (productValid.value == "" || productValid.value == null) {
        alert("Enter a name for the product!");
        return false;
    }
    if (priceValid.value == "" || priceValid.value == null) {
        alert("Enter a price for the product!");
        return false;
    }
    if (descValid.value == "" || descValid.value == null) {
        alert("Enter a description for the product!");
        return false;
    }
    if (buyerValid.value == "" || buyerValid.value == null) {
        alert("Enter a buyer for the product!");
        return false;
    }
    return true;
}

function getElement(id):HTMLInputElement {
    // returns an element as a HTMLInputElement
    return <HTMLInputElement>document.getElementById(id);
}

function getProduct():Product {
    let thisProduct = new Product();

    // get name of product
    let productInput = getElement("product");
    thisProduct.product = productInput.value;

    // get price of product
    let priceInput = getElement("price");
    thisProduct.price = priceInput.value;

    let descInput = getElement("desc");
    thisProduct.desc = descInput.value;

    let buyerInput = getElement("buyer");
    thisProduct.buyer = buyerInput.value;

    // return the product object
    return thisProduct;
}