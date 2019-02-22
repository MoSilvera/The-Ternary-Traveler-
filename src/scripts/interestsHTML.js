let interestsHTML = (interest) => {
        return `
        <section id="interest--${interest.id}">
            <h2>${interest.name}</h2>
            <p>${interest.description}</p>
            <div>Location: ${interest.place.name}</div>
            <button id="delete--button--${interest.id}">Delete</button>
        </section>
        `
    }


export default interestsHTML