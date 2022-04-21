import {Animals, Form} from "./components";
import cssApp from './App.module.css'
import {useAnimalReducer} from "./hooks";

/*const reducer = (state, action) => {
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
}*/

function App() {

    // const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const [state, dispatch] = useAnimalReducer();

    return (
        <div>

            <div className={cssApp.container}>
                <div>
                    <Form title={'Cat'} type={'addCat'} dispatch={dispatch}/>
                    <Animals animals={state.cats} type={'deleteCat'} dispatch={dispatch}/>
                </div>

                <div>
                    <Form title={'Dog'} type={'addDog'} dispatch={dispatch}/>
                    <Animals animals={state.dogs} type={'deleteDog'} dispatch={dispatch}/>
                </div>
            </div>

        </div>
    );
}

export default App;
