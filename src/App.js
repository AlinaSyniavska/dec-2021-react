import './App.css';
import {useState} from "react";
import {CarForm, Cars} from "./components";

function App() {

    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);
    
  return (
    <div className="App">
        <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUpdatedCar={setUpdatedCar} setCarForUpdate={setCarForUpdate}/>
        <hr/>
        <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updatedCar={updatedCar}/>
    </div>

  );
}

export default App;
