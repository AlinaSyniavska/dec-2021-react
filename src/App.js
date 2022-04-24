import {Routes, Route, Navigate} from 'react-router-dom'
import {MainLayout} from "./layouts";
import {CarsPage, CreateCarPage, UpdateCarPage} from "./pages";

import './App.module.css';

function App() {

  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'cars'}/>}/>
            <Route path={'cars'} element={<CarsPage/>}/>
            <Route path={'create_car'} element={<CreateCarPage/>}/>
            <Route path={'update_car'} element={<UpdateCarPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
