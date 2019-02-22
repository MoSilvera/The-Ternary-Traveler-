import APImanager from "./APImanager"
import interestsHTML from "./interestsHTML"
let listContainer = document.getElementById("listContainer")
const interestPrint = () => {
    APImanager.fetchInterests()
    .then((interestArray) => {interestArray.forEach(interest => {
        listContainer.innerHTML += interestsHTML(interest)
        })
    }
    )

}

export default interestPrint