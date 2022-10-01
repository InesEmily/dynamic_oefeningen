import './App.css';

import {CAR_DATA, CITIES_DATA, NUMBER_DATA, PERSON_DATA, PICTURES_DATA, PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {PicturesPage} from "./pages/PicturesPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NumbersPage} from "./pages/NumbersPage";
import PropTypes from "prop-types";
import {CarsPage} from "./pages/CarsPage";
import {PersonPage} from "./pages/PersonPage";



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
                <Tab>Personen</Tab>

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
                    <NumbersPage numbers={NUMBER_DATA} />
                </TabPanel>
                <TabPanel>
                    <CarsPage cars={CAR_DATA}/>
                </TabPanel>
                <TabPanel>
                    <PersonPage persons={PERSON_DATA} cities={CITIES_DATA}/>
                </TabPanel>
        </Tabs>
        </>


    );
}

export default App;

