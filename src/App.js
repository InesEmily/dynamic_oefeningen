import './App.css';
import {Menuproduct} from "./Menuproduct";
import {PRODUCTS_DATA, PRODUCTS_DATE} from "./data/data";
import {MenuCard} from "./components/MenuCard";



function App() {
    return (
            <div>
                <h1 style={{margin: "2vw"}}>Menu</h1>
                <MenuCard product={PRODUCTS_DATA}/>

            </div>

    );
}

export default App;

