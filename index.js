const fetchfood = () => {
    fetch("https://foregoing-typhoon-scissor.glitch.me/db.json")
    .then((res) => res.json())
    .then((data) => {
         getMeal(data.Meals)
         getJunk(data.Meals)
         getLunch(data.Meals)
         getBreakfast(data.Meals)
         getMeatk(data.Meals)
         getSnacks(data.Meals)
    })
}
fetchfood();

const getMeal = (meals) => {

    const mealCopy = [...meals.slice(0,4)]
    console.log(mealCopy)

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



const getJunk = (categories) => {


    const copyCategories = [...categories.slice(0, 2)]
    copyCategories.forEach(category => {

        let cut = category.ingredients.split('.').join('\n')
        console.log(cut);

       

        let products = document.createElement("li")
        products.className = "products" 

         let render = document.getElementById("five")
        render.addEventListener("click", () => {
            let mainfile = document.querySelector(".mainfile")

            mainfile.style.display = "none"

            let junkfile = document.querySelector(".mainjunk")
            junkfile.style.display = "initial"

        products.style.listStyle = "none"

        products.innerHTML = `
        <img src = "${category.image}">
        <div class = "content1"> 
        <h4>${category.name}</h4>
        <br>
        <p>${category.duration }mins</p>`

        document.querySelector(".redirect").appendChild(products)
    })

        products.addEventListener("click", (e) => {
            e.preventDefault()
            let fullPage = document.querySelector(".mainjunk");
            fullPage.style.display = "none"

            let junkItem = document.createElement("div")

            junkItem.className = "junkitem"


            junkItem.innerHTML = `
            <img src = "${category.image}">
            <div class = "content2">
            <h2>${category.name}</h2>
            <br>
            <h3>Description</h3>
            <p>${category.description}</p>
            <br>
            <h3>Methods</h3>
            <p>${cut}</p>
            <br>
            <h3>Cooking Duration</h3>
            <p>${category.duration} mins <p>
            `
            document.querySelector(".junk").append(junkItem)

        })
    });   
}


