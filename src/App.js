import {CatForm, Cats} from "./components";
import cssApp from './App.module.css';
import {useState} from "react";

function App() {

    return (
        <div>
            <div className={cssApp.container}>
                <div>
                    <CatForm/>
                    <Cats/>
                </div>


            </div>
        </div>
    );
}

export default App;
