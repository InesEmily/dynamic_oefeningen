import './App.css';

import { CAR_DATA, NUMBER_DATA, PICTURES_DATA, PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {PicturesPage} from "./pages/PicturesPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NumbersPage} from "./pages/NumbersPage";
import PropTypes from "prop-types";
import {CarsPage} from "./pages/CarsPage";



function Number(props) {
    return null;
}

Number.propTypes = {product: PropTypes.any};

function App() {
    return (
        <>
            <Tabs defaultIndex={0}>
            <TabList>
                <Tab>Menu</Tab>
                <Tab>Pics</Tab>
                <Tab>Numbers</Tab>
                <Tab>Cars</Tab>

            </TabList>

            <TabPanel>
                <h1 style={{margin: "2vw"}}>Menu</h1>
                <MenuCardPage product={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <h1 style={{margin: "2vw"}}>Pictures</h1>
                <PicturesPage picture={PICTURES_DATA}/>
            </TabPanel>
                <TabPanel>
                    <NumbersPage number={NUMBER_DATA} />
                </TabPanel>
                <TabPanel>
                    <CarsPage car={CAR_DATA}/>
                </TabPanel>
        </Tabs>
        </>


    );
}

export default App;

