import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from '../components/icons/CommonIcons';
import FoodCard from '../components/cards/FoodCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FoodData } from '../assets/Data/FoodData';
import banPot from '../assets/images/banner/ban-1.jpg'
import bannerImg from '../assets/images/banner/banner.png'
import drawAll from '../assets/images/drawer/all.png';
import drawPizza from '../assets/images/drawer/pizza.png';
import drawBurger from '../assets/images/drawer/burger.png';
import drawPasta from '../assets/images/drawer/spaguetti.png';
import drawFries from '../assets/images/drawer/fried-potatoes.png';
import drawDrink from '../assets/images/drawer/drink.png';

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const [drawerActive, setDrawerActive] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (drawerActive === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((item) => item.category === drawerActive));
    }
  }, [drawerActive, products]);

  const menuItems = [
    { category: 'all', image: drawAll, text: 'All' },
    { category: 'pizza', image: drawPizza, text: 'Pizza' },
    { category: 'burger', image: drawBurger, text: 'Burger' },
    { category: 'pasta', image: drawPasta, text: 'Pasta' },
    { category: 'fries', image: drawFries, text: 'French Fries' },
    { category: 'drinks', image: drawDrink, text: 'Drinks' },
  ];

  const handleDrawerClick = (category) => {
    setDrawerActive(category);
  };

  return (
    <div className='px-5 pt-20 lg:pt-16 sm:px-10 md:px-16 lg:px-24'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='flex items-center order-2 col-span-1 py-5 sm:py-0 sm:order-1'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-3xl sm:text-[5vw] font-bold leading-tight'>Choosing Quality Food</h1>
            <p className='w-full my-4 text-xs font-semibold leading-4 text-gray-400 sm:my-10 md:w-5/6 md:leading-7 sm:text-sm md:text-base'>It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is established fact that reader will be distracted by the readable content of a page when looking at its layout.</p>
            <Link to={`/menu`}>
              <motion.button whileHover={{ scale: 1.05 }} className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'>
                <span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Discover menu</span>
                <span className=' absolute -top-[1px] sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'>
                  <ArrowRight />
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
        <div className='order-1 hidden col-span-1 py-5 sm:order-2 sm:block'>
          <img src={bannerImg} alt="" className="w-full h-full mr-auto lg:w-10/12 -scale-x-100" />
        </div>
      </div>

      {/* Menu Categories */}
      <div className='py-4 mt-0 sm:mt-10'>
        <div className='flex items-center justify-center py-3 sm:py-5'>
          <h1 className='text-2xl font-bold sm:text-4xl'>Our Menus</h1>
        </div>
        <div className='flex flex-wrap items-center justify-center py-2 sm:flex-nowrap gap-x-2 sm:gap-5 sm:py-4'>
          {menuItems.map((menuItem) => (
            <motion.div
              key={menuItem.category}
              whileHover={drawerActive === menuItem.category ? '' : { scale: '0.9' }}
              onClick={() => handleDrawerClick(menuItem.category)}
              className={`font-bold cursor-pointer px-4 py-3 flex flex-col justify-center items-center ${drawerActive === menuItem.category ? 'font-black activeclass' : ''
                }`}
            >
              <img
                src={menuItem.image}
                alt={menuItem.text}
                className={`w-7 sm:w-10 ${drawerActive === menuItem.category ? 'opacity-100' : 'opacity-50'} pointer-events-none`}
              />
              <p className='mt-3 text-xs sm:text-sm'>{menuItem.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filtered Products */}
      <div className='px-5 md:px-10 pb-10 sm:py-10'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-10'>
          {filteredProducts.slice(0, 3).map((item) => (
            <FoodCard item={item} key={item.id} />

          ))}
        </div>
      </div>

      {/* About Foodies Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <div className='hidden col-span-1 py-5 sm:block'>
          <img src={banPot} alt="" className="w-full h-full mr-auto lg:w-10/12 -scale-x-100" />
        </div>
        <div className='flex items-center col-span-1 py-5 sm:py-0'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-2xl font-bold leading-tight text-center sm:text-4xl sm:text-left'>About Foodies</h1>
            <div className="my-3 sm:hidden">
              <img src={banPot} alt="" className="w-1/2 aspect-square mx-auto my-5 " />
            </div>
            <p className='w-full my-3 text-xs font-semibold leading-4 text-gray-400 sm:my-10 md:w-5/6 md:leading-7 sm:text-sm md:text-base'>It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is established fact that reader will be distracted by the readable content of a page when looking at its layout.</p>
            <Link to={`/about`}>
              <motion.button whileHover={{ scale: 1.05 }} className='mt-2 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 sm:px-5 sm:py-3'>
                <span className='mr-6 text-xs font-medium uppercase sm:mr-10 sm:font-bold sm:text-sm'>Learn More</span>
                <span className=' absolute -top-0.5 sm:-top-0 -right-0.5 sm:-right-1 p-1 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'>
                  <ArrowRight />
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Awesome Dishes Section */}
      <div className='px-5 my-5 md:px-10'>
        <div className='flex flex-col items-center justify-center py-3 sm:py-5'>
          <h1 className='text-2xl font-bold text-center sm:text-4xl'>Our Awesome Dishes</h1>
          <p className='w-full my-5 text-xs font-semibold text-center text-gray-400 sm:w-2/3 md:w-1/2 sm:mx-auto sm:text-sm sm:leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est voluptatibus, pariatur voluptates ea architecto numquam hic nobis sunt aperiam.</p>
        </div>
        <div className='relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10'>
          {FoodData.slice(0, 6).map((item) => (
            <FoodCard item={item} key={item.id} />
          ))}
        </div>
        <div className='flex items-center justify-center p-10'>
          <Link to={`/menu`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className='mt-5 sm:mt-0 transition duration-300 ease-in-out bg-prime w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3'
            >
              <span className='mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm'>Explore More</span>
              <span className='absolute -top-[1px] sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50'>
                <ArrowRight />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
