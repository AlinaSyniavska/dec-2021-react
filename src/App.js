import {CatForm, Cats, DogForm, Dogs} from "./components";
import cssApp from './App.module.css';

function App() {

    return (
        <div>
            <div className={cssApp.container}>
                <div>
                    <CatForm/>
                    <Cats/>
                </div>

                <div>
                    <DogForm/>
                    <Dogs/>
                </div>
            </div>
        </div>
    );
}

export default App;
