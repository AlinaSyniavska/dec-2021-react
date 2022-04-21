const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: action.payload, id: Date.now()}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload)}

        case 'addDog' :
            return { ...state, dogs: [...state.dogs, { name: action.payload, id: Date.now() }] }
        case 'deleteDog' :
            // return { ...state, dogs: state.dogs.filter(dog => dog.id !== action.payload) }
            const index = state.dogs.findIndex(dog => dog.id === action.payload)
            state.dogs.splice(index, 1)
            return {...state}

        default:
            throw new Error('Unknown Action')
    }
}

export {
    reducer
}