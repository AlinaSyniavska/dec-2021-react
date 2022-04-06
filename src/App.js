import './App.css';

import {Comments, Posts, Users} from './components';


function App() {
    return (
        <div className="App">
            <div className={'top'}>
                <Users/>
                <Posts/>
            </div>
            <div className={'bottom'}>
                <Comments/>
            </div>
        </div>
    );
}

export default App;
