import React, { useState } from 'react'
import Header from '../../componets/Header/Header'
import ExploreMenu from '../../componets/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../componets/FoodDisplay/FoodDisplay';
import AppDownload from '../../componets/AppDownload/AppDownload';

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home