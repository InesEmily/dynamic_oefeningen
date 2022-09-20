import './App.css';
import {Menuproduct} from "./Menuproduct";
import {PRODUCTS_DATA} from "./data/data";

function App() {
    return (
            <div>
                <h1>Menu</h1>
                <Menuproduct product={PRODUCTS_DATA[0]}/>
                    <Menuproduct product={PRODUCTS_DATA[1]}/>
                        <Menuproduct product={PRODUCTS_DATA[2]}/>
                            <Menuproduct product={PRODUCTS_DATA[3]}/>
                                <Menuproduct product={PRODUCTS_DATA[4]}/>

            </div>

    );
}

export default App;

