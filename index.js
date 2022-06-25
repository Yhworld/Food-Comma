const fetchfood = () => {
    fetch("https://foregoing-typhoon-scissor.glitch.me/db.json")
    .then((res) => res.json())
    .then((data) => {
         getMeal(data.Meals)
         getCategories(data.Meals)
    })
}
fetchfood();

const getMeal = (meals) => {

    const mealCopy = [...meals.slice(0,4)]


    mealCopy.forEach(meal => {
    let card = document.createElement("li")
    card.className = "card "

    card.style.listStyle = "none"

    card.innerHTML = `
    <img src= "${meal.image}">
    <div class = "content">
        <h4>${meal.name}</h4>
    </div>
    `
    document.querySelector(".popular").appendChild(card)
    });
}

const getCategories = (categories) => {
    const copyCategories = [...categories.slice(0, 2)]
    copyCategories.forEach(category => {
        let products = document.createElement("li")
        products.className = "products" 
        
        products.style.listStyle = "none"

        products.innerHTML = `
        <img src = "${category.image}">
        <div class = "content"> 
        <h4>${category.name}</h4>
        <br>
        <p>${category.duration }mins</p>`

        document.querySelector(".redirect").appendChild(products)
    });   
}