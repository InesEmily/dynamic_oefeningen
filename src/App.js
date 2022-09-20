import './App.css';
import {Menuproduct} from "./Menuproduct";
import {PRODUCTS_DATA} from "./data/data";

function App() {
    return (
            <div>
                <h1>Menu</h1>
                {PRODUCTS_DATA.map(p => <Menuproduct key ={p.name} product={p}/>)}

            </div>

    );
}

export default App;

