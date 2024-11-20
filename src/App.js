/* eslint-disable no-unused-vars */
import Nav from "./navigation/Nav";
import Product from "./products/Product";
import Recmd from "./recomnd/Recmd";
import Sidebar from "./sidebar/Sidebar";

import data from './db/data';

import { useState } from "react";
// import Category from "./sidebar/category/Category";
import Card from "./components/Card";

function App() {
  const [ selectCategory, setSelectCategory ] = useState(null);

  //.........Input filter..............
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  const filteredData = data.filter(data => data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));

  //----------Radio filter...............
  const handleChange = (event) => {
    setSelectCategory(event.target.value)
  } 

  //.......Button Filter............
  const handleClick = event => {
    setSelectCategory(event.target.value)
  }

  function filterrData(data, selected, query) {
    let filtedData = data;

    //filtering input data
    if(query) {
      filtedData =filteredData
    }

    //selected Filter
    if(selected) {
      filtedData = filtedData.filter(({category,color, company, newPrice, title}) => category ===selected || color ===selected || company === selected || newPrice ===selected || title=== selected)
    }

    return filtedData.map(({img, title, star, reviews, prevPrice, newPrice, company,color, category})=> (<Card 
    
      key={Math.random()}
      img={img} 
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      company={company}
      color={color}
      category={category}
    
    />))
  }

  const result = filterrData(data, selectCategory, query);

  return (
    < >
      <Sidebar handleChange={handleChange} />
      <Nav />
      <Recmd />
      <Product />
    </>
  );
}

export default App;
