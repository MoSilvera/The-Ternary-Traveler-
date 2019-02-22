import interestsObject from "./interestsObject"
import APImanager from "./APImanager"

const eventListenerAdd = () => {
    let formContainer = document.getElementById("save--button")
    formContainer.addEventListener("click", ()=>{
        let name = document.getElementById("inputName").value
        let description = document.getElementById("inputDescription").value
        let placeId = document.getElementById("selectLocation").value
        let newObject = interestsObject(name, description, placeId)
        APImanager.post(newObject)
        .then(location.reload())
   }

    )}


export default eventListenerAdd