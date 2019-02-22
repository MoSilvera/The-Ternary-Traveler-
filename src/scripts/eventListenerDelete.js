import APImanager from "./APImanager"
const eventListenerDelete = () => {
    document.getElementById("listContainer").addEventListener("click", () => {
        if (event.target.id.startsWith("delete"))
        {
            let confirmation = confirm("Are you sure you want to delete this interest?")
            if (confirmation)
            {
                let objectid = event.target.id.split("--")[2]
                APImanager.delete(objectid)
                .then(location.reload())
            }
        }
    })
}

export default eventListenerDelete