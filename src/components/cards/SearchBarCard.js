import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

const SearchBarCard = ({ item }) => {

    const dispatch = useDispatch()

    const [quan, setQuan] = useState(1)

    const [openModal, setOpenModal] = useState(false)


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
    const slug = item.name.replaceAll(" ", "-");





    return (
        <>
            <div className='grid grid-cols-6 gap-2 my-2 rounded-md cursor-pointer hover:bg-prime/10' onClick={() => setOpenModal(!openModal)}>
                <div className='col-span-1 p-1'>
                    <img src={item.FoodImg} alt={item.name} className='rounded-md' />
                </div>
                <div className='flex flex-col items-start justify-start col-span-4 p-1'>
                    <h1 className='text-sm font-bold'>{item.name}</h1>
                    <p className='text-xs text-gray-500'>in <span className='font-bold text-prime'>{item.category}</span></p>
                </div>
               
            </div>
        </>
    )
}

export default SearchBarCard