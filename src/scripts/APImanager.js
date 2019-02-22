const APImanager = (objectId) => {
    return fetch(`http://127.0.0.1:8088/interests/${objectId}`, {
            method: "DELETE"
    })
}

export default APImanager