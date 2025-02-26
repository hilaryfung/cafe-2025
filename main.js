const dishes = ["Croissant", "Banana bread", "Pumpkin pie", "Chocolate chip cookie"]
const details = {
    "Croissant": {
        price: "$2.50",
        vegan: false
    },
    "Banana bread": {
        price: "$3.00",
        vegan: true
    },
    "Pumpkin pie": {
        price: "$4.00",
        vegan: true
    },
    "Chocolate chip cookie": {
        price: "$2.50",
        vegan: true
    }
}

const button = document.querySelector("#button")
const disclaimer = document.querySelector("#disclaimer")

const onClick = function() {
    disclaimer.innerHTML = "Croissants are not vegan. Side salad is vegan."
}

button.addEventListener("click", onClick);

for (const dish of dishes)  {
    console.log(dish)
    const node = document.createElement("li");
    document.querySelector("#main-dish-list").appendChild(node);
    node.innerHTML = dish
    node.innerHTML += ` ${details[dish]["price"]}`

    if (details[dish].vegan) {
        node.innerHTML += ` vegan`
    }
}