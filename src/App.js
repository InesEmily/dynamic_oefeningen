import logo from './logo.svg';
import './App.css';

function Menuproduct(props){
    const {productName} = props;
    return <div>{productName}</div>
}
function App() {
    return (

            <div>
                <h1>Menu</h1>
                <Menuproduct productName ='cola'></Menuproduct>
                <Menuproduct productName ='water'></Menuproduct>
                <Menuproduct productName ='bier'></Menuproduct>
                <Menuproduct productName ='wijn'></Menuproduct>

            </div>

    );
}

export default App;

