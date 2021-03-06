const fetchfood = () => {
    fetch("https://foregoing-typhoon-scissor.glitch.me/db.json")
    .then((res) => res.json())
    .then((data) => {
         getMeal(data.Meals)
         getJunk(data.Meals)
         getLunch(data.Meals)
         getBreakfast(data.Meals)
         getMeat(data.Meals)
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

const getLunch = (categories) => {
    const copyCategories = [...categories.slice(2, 4)]
    copyCategories.forEach(category => {
        let item = document.createElement("li")
        item.className = "item" 

         let lunchClick = document.getElementById("two")
         lunchClick.addEventListener("click", () => {
            let mainfile = document.querySelector(".mainfile")

            mainfile.style.display = "none"

            let lunchfile = document.querySelector(".lunchMeal")
            lunchfile.style.display = "initial"
        

        item.innerHTML = `
        <img src = "${category.image}">
        <div class = "content1"> 
        <h4>${category.name}</h4>
        <br>
        <p>${category.duration }mins</p>
        `

        document.querySelector(".lunchfile").appendChild(item)
})

        item.addEventListener("click", (e) => {
            e.preventDefault()
            let fullPage = document.querySelector(".lunchMeal");
            fullPage.style.display = "none"

            let lunchItem = document.createElement("div")

            lunchItem.className = "lunchitem"


            lunchItem.innerHTML = `
            <img src = "${category.image}">
            <div class = "choice1">
            <h2>${category.name}</h2>
            <br>
            <h3>Description</h3>
            <p>${category.description}</p>
            <br>
            <h3>Methods</h3>
            <p>${category.method}</p>
            <br>
            <h3>Cooking Duration</h3>
            <p>${category.duration} mins <p>
              `
            document.querySelector(".lunchh").append(lunchItem)

        })
    });   
}

const getBreakfast = (categories) => {
    const copyCategories = [...categories.slice(4, 6)]
    copyCategories.forEach(category => {
        let item2 = document.createElement("li")
        item2.className = "item2" 

        let breakClick = document.getElementById("one")
         breakClick.addEventListener("click", () => {
         let mainfile = document.querySelector(".mainfile")

            mainfile.style.display = "none"

            let breakfile = document.querySelector(".breakMeal")
            breakfile.style.display = "initial"
    
        item2.innerHTML = `
        <img src = "${category.image}">
        <div class = "content1"> 
        <h4>${category.name}</h4>
        <br>
        <p>${category.duration }mins</p>
        `

        document.querySelector(".breakfile").appendChild(item2)
})

        item2.addEventListener("click", (e) => {
            e.preventDefault()
            let fullPage = document.querySelector(".breakMeal");
            fullPage.style.display = "none"

            let breakItem = document.createElement("div")

            breakItem.className = "breakitem"


            breakItem.innerHTML = `
            <img src = "${category.image}">
            <div class = "choice2">
            <h2>${category.name}</h2>
            <br>
            <h3>Description</h3>
            <p>${category.description}</p>
            <br>
            <h3>Methods</h3>
            <p>${category.method}</p>
            <br>
            <h3>Cooking Duration</h3>
            <p>${category.duration} mins <p>
              `
            document.querySelector(".break").append(breakItem)

        })
})}

const getMeat = (categories) => {
    const copyCategories = [...categories.slice(6, 7)]
    copyCategories.forEach(category => {
        let item3 = document.createElement("li")
        item3.className = "item3" 

        let steakClick = document.getElementById("four")
         steakClick.addEventListener("click", () => {
         let mainfile = document.querySelector(".mainfile")

            mainfile.style.display = "none"

            let steakfile = document.querySelector(".steakMeal")
            steakfile.style.display = "initial"
    
        item3.innerHTML = `
        <img src = "${category.image}">
        <div class = "slide1"> 
        <h4>${category.name}</h4>
        <br>
        <p>${category.duration }mins</p>
        `

        document.querySelector(".steakfile").appendChild(item3)
})

        item3.addEventListener("click", (e) => {
            e.preventDefault()
            let fullPage = document.querySelector(".steakMeal");
            fullPage.style.display = "none"

            let steakItem = document.createElement("div")

            steakItem.className = "breakitem"


            steakItem.innerHTML = `
            <img src = "${category.image}">
            <div class = "choice3">
            <h2>${category.name}</h2>
            <br>
            <h3>Description</h3>
            <p>${category.description}</p>
            <br>
            <h3>Methods</h3>
            <p>${category.method}</p>
            <br>
            <h3>Cooking Duration</h3>
            <p>${category.duration} mins <p>
              `
            document.querySelector(".steakk").append(steakItem)

        })
})}

const getSnacks = (categories) => {
    const copyCategories = [...categories.slice(7, 8)]
    copyCategories.forEach(category => {
        let item4 = document.createElement("li")
        item4.className = "item4" 

        let snacksClick = document.getElementById("three")
         snacksClick.addEventListener("click", () => {
         let mainfile = document.querySelector(".mainfile")

            mainfile.style.display = "none"

            let snacksfile = document.querySelector(".snackMeal")
            snacksfile.style.display = "initial"
    
        item4.innerHTML = `
        <img src = "${category.image}">
        <div class = "slide2"> 
        <h4>${category.name}</h4>
        <br>
        <p>${category.duration }mins</p>
        `

        document.querySelector(".snacksfile").appendChild(item4)
})

        item4.addEventListener("click", (e) => {
            e.preventDefault()
            let fullPage = document.querySelector(".snackMeal");
            fullPage.style.display = "none"

            let snackItem = document.createElement("div")

            snackItem.className = "breakitem"


            snackItem.innerHTML = `
            <img src = "${category.image}">
            <div class = "choice4">
            <h2>${category.name}</h2>
            <br>
            <h3>Description</h3>
            <p>${category.description}</p>
            <br>
            <h3>Methods</h3>
            <p>${category.method}</p>
            <br>
            <h3>Cooking Duration</h3>
            <p>${category.duration} mins <p>
              `
            document.querySelector(".snackk").append(snackItem)

        })
})}  
