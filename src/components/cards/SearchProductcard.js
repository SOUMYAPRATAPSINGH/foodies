import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'
import { Minus, Plus, StarEmp, StarFill } from '../icons/CommonIcons'


const SearchProductcard = ({ item }) => {

    const dispatch = useDispatch()

    const [quan, setQuan] = useState(1)

    const fillStars = []

    for (let i = 0; i < parseInt(item.ratings); i++) {
        fillStars.push(i);
    }
    const emptyStars = []
    for (let i = 5; i > fillStars.length; i--) {
        emptyStars.push(i)
    }

    function decQuan() {
        if (quan === 1) {
            setQuan(1)
        }
        else {

            setQuan((current) => current - 1)
        }
    }
    function incQuan() {
        if (quan === 10) {
            setQuan(10)
        }
        else {
            setQuan((current) => current + 1)
        }
    }



    function addToCartHandler() {

        const data = {
            item: item,
            quantity: quan,

        }
        dispatch(addToCart(data))
    }


    return (
        <div className='col-span-1 bg-white p-3 border-b-2 md:border-none sm:rounded-xl sm:shadow relative'>
            <div  className="cursor-pointer">
                <div className='grid grid-cols-12 gap-4  min-h-[120px] items-center'>
                    <div className='col-span-5
                   md:col-span-4'>
                        <img src={item.FoodImg} alt='piz1' className='w-full h-auto my-auto' />
                    </div>
                    <div className='col-span-7 md:col-span-8 '>
                        <h1 className='font-bold text-base md:text-lg text-black '>{item.name}</h1>
                        <p className='hidden md:block text-sm text-gray-600'>{item.description}</p>
                        <div className='flex justify-StarFillt md:my-2 items-center'>
                            {
                                fillStars.map((data, index) => {
                                    return (
                                        <StarFill key={index} />
                                    )
                                })
                            }
                            {
                                emptyStars.map((data, index) => {
                                    return (
                                        <StarEmp key={index} />
                                    )
                                })
                            }
                            <span className='text-sm md:text-base ml-2 font-bold text-prime'>{item.ratings}</span>
                        </div>

                        <h1 className='text-base md:text-lg font-bold text-prime mb-10 md:mb-0'>₹<span className='ml-1'>{item.price}</span></h1>

                        <div className='absolute bottom-3 right-3 flex items-center justify-center gap-3 z-20'>

                            <div className='flex justify-center items-center rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] text-prime font-semibold px-1'>
                                <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-l-[30px]' onClick={decQuan}><Minus /></motion.button>
                                <input type='text' className="bg-white w-8 px-2 focus:outline-none text-center" value={quan} readOnly />
                                <motion.button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-r-[30px]' onClick={incQuan}><Plus /></motion.button>

                            </div>
                            <motion.button onClick={addToCartHandler} whileTap={{ scale: 0.9 }} className='bg-prime text-white px-3 py-1 text-sm rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] font-bold flex items-center justify-center ' on>ADD</motion.button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchProductcard