import interestHTML from "./interestsHTML"
import eventListenerAdd from "./eventListenerAdd"

let listContainer = document.getElementById("listContainer")
eventListenerAdd()
 fetch ("http://localhost:8088/interests?_expand=place")
        .then(res => res.json())
        .then((interestArray) => {interestArray.forEach(interest => {
            listContainer.innerHTML += interestHTML(interest)
            })
        }
        )
