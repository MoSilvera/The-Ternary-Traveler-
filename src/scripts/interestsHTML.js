let interestHTML = (interest) => {
        return `
        <section id="interest--${interest.id}">
            <h2>${interest.name}</h2>
            <div>${interest.description}</div>
            <div>${interest.place.name}</div>
            <button id="delete--button--${interest.id}">Delete</button>
        </section>
        `
    }


export default interestHTML