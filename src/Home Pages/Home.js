import React from 'react'
import "./Home.css";
import Product from './Product'
import { useStateValue } from '../StateProvider';

function Home() {

  const [{basket}, dispatch] = useStateValue();
  console.log(basket)
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://m.media-amazon.com/images/I/71kIHrrewuL._SX3000_.jpg' alt=''/>
            <div className='home_row'>
              <Product title='Apple MacBook Air Laptop M3 Chip, 8GB RAM' price={1199} image='https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg' rating={4}/>
              <Product title='PHILIPS Air Fryer NA120/00, uses up to 90% less fat, 1500W, 4.2 Liter, Large' price={69.99} rating={3} image='https://m.media-amazon.com/images/I/414ly0wsjYL._SX679_.jpg'/>
              <Product image='https://m.media-amazon.com/images/I/71GLMJ7TQiL._SX679_.jpg' title='Apple iPhone 13 (128GB) - Starlight' price={799} rating={3}/>
              <Product title='KENT Grand RO Water Purifier | RO + UV LED + UF + TDS Control | ISI Marked | 8L Tank | 20 LPH Flow | White' price={89.99} rating={5} image='https://m.media-amazon.com/images/I/61p8i0azkvL._SX679_.jpg'/>

            </div>
            <div className='home_row'>
            <Product title='Pure Home + Living Ivory Honeycomb Pearl Finish Ceramic Vase - Medium | Real & Artificial Flower Pot for Home Decor, Office & Living Room' price={19.99} rating={5} image='https://m.media-amazon.com/images/I/71nXEFS57TL._SX679_.jpg' />
            <Product title='Praahi Lifestyle Decorative Oblong Glass Vase for Flower | Paprika Pink | Real & Artificial Flower Pot for Home Decor, Office & Living Room Centerpieces| 7.2 inches | Gifting- Diwali Gift/Office Gift' price={29.99} rating={4} image='https://m.media-amazon.com/images/I/71lrjtbGypL._SX679_.jpg'/>


            </div>

            <div className='home_row'>
            <Product title='WLIVE Dresser for Bedroom with 5 Drawers, Wide Bedroom Dresser with Drawer Organizers, Chest of Drawers, Fabric Dresser for Living Room, Closet, Hallway, Dark Grey' price={59.99} rating={5} image='https://m.media-amazon.com/images/I/91vB+rcYzkL._AC_SX679_.jpg' />


            </div>
            <div className='home_row'>
            <Product title="Hanes Men's Hoodie, EcoSmart Fleece Hoodie, Hooded Sweatshirt for Men" price={19.99} rating={4} image='https://m.media-amazon.com/images/I/61JckjKagSL._AC_SX679_.jpg'/>
            <Product title='Crocs Unisex-Adult Classic Clogs | Black | Size 7, 8, 9, 10' price={31.99} rating={3} image='https://m.media-amazon.com/images/I/81LPwvQLXJL._AC_SX695_.jpg' />
            <Product title="Gildan Men's Crew T-Shirts, Multipack, Style G1100" price={9.99} rating={2} image='https://m.media-amazon.com/images/I/51wDsZxtTLL._AC_SX679_.jpg' />





            </div>

        </div>
          
        

      
    </div>
  )
}

export default Home
