function buildObject() {

    let price = 0;

    if (document.getElementById("item").value === "dog") {
        price = 9.9;
    } else if (document.getElementById("item").value === "cat") {
        price = 29.9;
    } else {
        price = 65;
    }

    let myObject = {

        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        city: document.getElementById("city").value,
        street: document.getElementById("street").value,
        zipcode: document.getElementById("zipcode").value,
        item: document.getElementById("item").value,
        item_price: price,
        num_item: document.getElementById("item-num").value,
        total_price: (parseInt(document.getElementById("item-num").value) * price),
    }

    document.getElementById("total-price").value = parseInt(document.getElementById("item-num").value) * price;
    console.log(myObject);
}

function returnPrice() {
    let price = 0;

    if (document.getElementById("item").value === "dog") {
        price = 9.9;
    } else if (document.getElementById("item").value === "cat") {
        price = 29.9;
    } else {
        price = 65;
    }
    document.getElementById("item-price").value = price;
}