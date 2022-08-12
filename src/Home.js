import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src="https://scx2.b-cdn.net/gfx/news/hires/2018/ruralenviron.jpg"/>

        <div className='home_row'>
            <Product 
            id = {1}
            title="Pink T-Shirt Girls"
            price={999.00} 
            image="https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/g/u/gucci-girls-pink-cotton-t-shirt-307495-eac9fbd12d056b7993cfebf7aab6d6e72d8202f1.jpg"
            rating={3}
            />
            <Product
            id = {2}
            title="Cotton Tie Dye T-Shirt in Blue (IN-TREND)"
            price={889.00} 
            image="https://tse1.mm.bing.net/th?id=OIP.LQPKy0_aqGyAs7v_5mK4TgHaHa&pid=Api&P=0"
            rating={5}
            />
          
        </div>

        <div className='home_row'>
        <Product
            id = {3}
            title="Baby Soft Cotton full sleeves Shirt(Blue)"
            price={560.00} 
            image="https://www.totscart.com/image/cache/catalog/product/clothing-accessories/baby-clothes/tops-t-shirts/ollypop-full-sleeves-tee-text-print-green/3615903a-500x500.jpg"
            rating={4}
            />

        <Product
            id = {4}
            title="TurtleNeck Handmade Knit Sweater (HIGHLY RECOMMENDED) "
            price={2499.00} 
            image="https://tse2.mm.bing.net/th?id=OIP.BGMc825b_O3QvIvjhxSVdgHaJ3&pid=Api&P=0"
            rating={4}
            />

        <Product
            id = {5}
            title="Skinny unisex pure cotton Cargo Pants"
            price={1289.00}
            image="https://i.pinimg.com/736x/4d/6b/20/4d6b206b9a779067dae4996d3f6a4074.jpg"
            rating={3}
            />
        </div>

        <div className='home_row'>
        <Product
            id = {6}
            title="Purest cotton (recycled) Regular fit Casual Shirt"
            price={1499.00} 
            image="https://tse2.mm.bing.net/th?id=OIP.h7k175QqFewgrSzHb-uDSwHaHa&pid=Api&P=0"
            rating={4}
            />
        </div>

      </div>
    </div>
  )
}

export default Home
