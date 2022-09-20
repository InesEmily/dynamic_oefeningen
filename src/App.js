import './App.css';
import {Menuproduct} from "./Menuproduct";

function App() {
    return (

            <div>
                <h1>Menu</h1>
                <Menuproduct productName ='cola' productPrice={1}></Menuproduct>
                <Menuproduct productName ='water'productPrice={1}></Menuproduct>
                <Menuproduct productName ='bier'productPrice={1}></Menuproduct>
                <Menuproduct productName ='wijn'productPrice={2}></Menuproduct>
                <Menuproduct productName ='cava'productPrice={3}></Menuproduct>




            </div>


    );
}

export default App;

