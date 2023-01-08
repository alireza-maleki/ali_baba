
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import axios from 'axios';

import classes from "./AutomaticScrollButton.module.css";

import Gifts from '../gifts/Gifts';
import Tools from '../tools & hardware/Tools';
import Energy from '../energy/Energy';
import Accessory from '../accessory/Accessory';
import Cunsumer from '../cunsumer/Cunsumer';
import Category from "../category/Category";



export default function AutomaticScrollButton(props) {
  const [value, setValue] = React.useState(0);

  const [categorys, setCategorys] = useState();

  const [gifts, setGifts] = useState(false);
  const [tools, setTools] = useState(false);
  const [energy, setEnergy] = useState(false);
  const [accessory, setAccessory] = useState(false);
  const [cunsumer, setCunsumer] = useState(false);
  const [category, setCategory] = useState(false);

  let offset = 5;
  const [pokemon, setPokemon] = useState([]);
  

  const loadMorePokemon = () => {

    axios.get(`http://192.168.0.206:1212/v1/scrol-data/${offset}/3`).then(({ data }) => {
      
      const newPokemon = [];
      data.forEach((item) => newPokemon.push(item));
      setPokemon(newPokemon);

    });

    offset += 5;

  };


  const handelScroll = (e) => {

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMorePokemon(window.innerHeight);
    }

    console.log()

  }



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setCategorys(props.products);
    setGifts((true));

    loadMorePokemon();
    window.addEventListener('scroll', handelScroll)

    scrollWindowHandler()

  }, [])



  const giftHandler = () => {
    console.log(categorys)

    setEnergy(false);
    setAccessory(false);
    setTools(false);
    setCunsumer(false);
    setCategory(false);

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setGifts(true);
  }

  const toolsHandler = () => {
    console.log(categorys)

    setGifts(false);
    setEnergy(false);
    setAccessory(false);
    setCunsumer(false);
    setCategory(false);

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setTools(true);
  }

  const energyHandler = () => {
    console.log(category)

    setGifts(false);
    setTools(false);
    setAccessory(false);
    setCunsumer(false);
    setCategory(false);

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setEnergy(true);
  }

  const accessorysHandler = () => {
    console.log(category)

    setGifts(false);
    setTools(false);
    setEnergy(false);
    setCunsumer(false);
    setCategory(false);

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setAccessory(true);

  }

  const cunsumerHandler = () => {
    console.log(category)

    setGifts(false);
    setTools(false);
    setEnergy(false);
    setAccessory(false);
    setCategory(false);

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setCunsumer(true);
  }

  const categoryHandler = () => {
    console.log(category)

    setGifts(false);
    setTools(false);
    setEnergy(false);
    setAccessory(false);
    setCunsumer(false);

    // ### Scroll To Top
    window.scrollTo(0, 1600);

    setCategory(true);
  }

  // ################################
  const scrollWindowHandler = () => {

    window.addEventListener("scrollY", (e) => {
      console.log(e)
    })

  }


  return (
    <>
      <div className={classes.tabs}>

        <Box onClick={scrollWindowHandler} sx={{ bgcolor: 'background.paper' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            // variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab className={classes.gif} onClick={giftHandler} label="لاین گرم" />
            <Tab onClick={toolsHandler} label="لاین سرد" />
            <Tab onClick={energyHandler} label="کافی شاپ" />
            <Tab onClick={accessorysHandler} label="خدمات مرتبط" />
            <Tab onClick={cunsumerHandler} label="آماده سازی" />
            <Tab onClick={categoryHandler} label="All categoris" />


          </Tabs>
        </Box>

      </div>
      {gifts ? <Gifts products={pokemon} /> : ''}
      {tools ? <Tools products={props.products} /> : ''}
      {energy ? <Energy products={props.products} /> : ''}
      {accessory ? <Accessory products={props.products} /> : ''}
      {cunsumer ? <Cunsumer products={props.products} /> : ''}
      {/* {category ? <Category products={props.products} /> : ''} */}
    </>

  );
}



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }

