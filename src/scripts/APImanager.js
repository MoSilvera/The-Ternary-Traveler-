const APImanager = {
    post: (newobject) => {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newobject)
        })
    },
    delete: (objectId) => {
        return fetch(`http://127.0.0.1:8088/interests/${objectId}`, {
            method: "DELETE"
        })
    },
    fetchInterests: () => {
        return fetch("http://localhost:8088/interests?_expand=place")
            .then(res => res.json())
    }
}

export default APImanager