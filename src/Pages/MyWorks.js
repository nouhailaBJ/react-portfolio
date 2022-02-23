import React from 'react'
import { useState } from 'react'
import portfolios from '../components/allPortfolio'
import Categories from '../components/Categories'
import MenuItems from '../components/MenuItems'
import Title from '../components/Title'

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];


function MyWorks() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All")
    {
      setMenuItems(portfolios);
      return ;
    }
    const filtredData = portfolios.filter((item) => {
      return item.category === category;
    })
    setMenuItems(filtredData)
  }
  return (
    <div className='PortfolioPage'>
        <div className='title'>
            <Title title={'Portfolio'} span={'portfolios'} />
        </div>
        <div className='portfolios-data'>
            <Categories  filter={filter} categories={categories} />
            <MenuItems menuItem={menuItems}/>
        </div>
    </div>
  )
}

export default MyWorks