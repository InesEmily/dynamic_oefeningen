import './App.css';
import {Menuproduct} from "./Menuproduct";
import {PRODUCTS_DATA, PRODUCTS_DATE} from "./data/data";
import {MenuCard} from "./components/MenuCard";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";



function App() {
    return (
        <>
            <Tabs defaultIndex={0}>
            <TabList>
                <Tab>Menu</Tab>
                <Tab>Pictures</Tab>
            </TabList>

            <TabPanel>
                <h1 style={{margin: "2vw"}}>Menu</h1>
                <MenuCardPage product={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
        </Tabs>
        </>


    );
}

export default App;

