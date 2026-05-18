import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import {useState} from 'react'
const Collection = () => {

    const {products} = useContext(ShopContext);
    const [ShowFilter, setShowFilter] = useState(false);

    return (
        <div className='flx flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* filter option */}
            <div className='w-full sm:w-1/4 border p-4 rounded-lg'>
            <p className='font-bold text-lg mb-4'>Filter by</p>
            {/* categories */}
            <div classname={`border-b py-2 cursor-pointer${ShowFilter ?'':'hidden'}sm:block`}>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className='flex flex-col gap-2 text-sm text-gray-600'>
                    <p className='flex gap-2'>
                        <input className='w-4' type="checkbox" value={'men'}/> Men
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-4' type="checkbox" value={'Women'}/> women
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-4' type="checkbox" value={'Kids'}/> kids
                    </p>
            </div>
        </div>
        {/* SubCategory Filter*/}
         <div classname={`border-b py-2 cursor-pointer${ShowFilter ?'':'hidden'}sm:block`}>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className='flex flex-col gap-2 text-sm text-gray-600'>
                    <p className='flex gap-2'>
                        <input className='w-4' type="checkbox" value={'men'}/> Men
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-4' type="checkbox" value={'Women'}/> women
                    </p>
                    <p className='flex gap-2'>
                        <input className='w-4' type="checkbox" value={'Kids'}/> kids
                    </p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Collection
