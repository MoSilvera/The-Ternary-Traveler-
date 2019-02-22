import interestsObject from "./interestsObject"

const eventListenerAdd = () => {
    let formContainer = document.getElementById("save--button")
    formContainer.addEventListener("click", ()=>{
        let name = document.getElementById("inputName").value
        let description = document.getElementById("inputDescription").value
        let placeId = document.getElementById("selectLocation").value
        let newObject = interestsObject(name, description, placeId)
        fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
        })
        .then(location.reload())
   }

    )}


export default eventListenerAdd