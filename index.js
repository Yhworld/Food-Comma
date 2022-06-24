const fetchfood = () => {
    fetch("https://foregoing-typhoon-scissor.glitch.me/db.json")
    .then((res) => res.json())
    .then((data) => {
        return getMeal(data.Meals)
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
