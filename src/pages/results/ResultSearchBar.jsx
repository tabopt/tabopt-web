import React from 'react'
import logo from '../../assets/images/logo/tabopt.png';
import { Input} from 'antd';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";
import { IoVideocamOutline, IoGlobeOutline, IoImagesOutline } from "react-icons/io5";
import { TbBasketSearch } from "react-icons/tb";

const ResultSearchBar = () => {
  return (
    <>
        <div className='pt-5 border-b px-3'>
            <div className='w-full  pb-4'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center flex-wrap gap-3 w-full justify-center'>
                        <div className='md:px-6 px-2 order-1'>
                            <div className=' w-28 '>
                                <img src={logo} className='w-full' alt='tabopt Logo'/>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 sm:order-2 order-3 lg:w-[602px]  md:w-[400px] sm:w-[344px] w-full '>
                            <div className=' relative w-full result-close-btn '>
                                <Input id='field-name' name='name' allowClear placeholder="Search the web"  className='flex-grow w-full h-[46px] border-[#e0e4e9] pl-4 pr-[50px] pb-[6px] leading-[24px] border text-[16px] bg-transparent text-[#525252] bg-white outline-none rounded-full focus-within:border-gray-400 focus-within:shadow-none font-medium hover:border-gray-300 outline-0  hover:shadow-md '/>
                                <div className='absolute top-1/2 -translate-y-1/2 right-2 z-10'>
                                    <button className=' w-9 h-8  text-xl text-[#525252d1] hover:text-[#148ccd] border-l border-[#5252527a] flex items-center justify-center '><IoSearch/></button>
                                </div>
                            </div>

                            {/* <button className='bg-[#148ccd] px-4   rounded-full  text-white h-[50px]' >Search</button> */}
                        </div>
                        <div className='md:px-6 px-2 ml-auto sm:order-3 order-2'>
                            <Link to="/" className="px-4 py-1  w-full hover:bg-blue-300 rounded text-base bg-[#148ccd] text-white flex items-center gap-2  hover:shadow-md" > <FiUser/> Sign in </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='lg:mx-44 md:mx-36  sm:mx-[128px]'>
                <div className='flex flex-wrap items-center gap-3'>
                  <button className=' flex gap-1 items-center sm:text-sm text-xs  pt-[9px] pb-[10px] px-3 relative main-link active '> <TbBasketSearch className='text-base md:block hidden'/> All</button>
                  <button className=' flex gap-1 items-center sm:text-sm text-xs  pt-[9px] pb-[10px] px-3 relative main-link '> <IoGlobeOutline className='text-base md:block hidden'/> Web</button>
                  <button className=' flex gap-1 items-center sm:text-sm text-xs  pt-[9px] pb-[10px] px-3 relative main-link '> <IoImagesOutline className='text-base md:block hidden'/> Image</button>
                  <button className=' flex gap-1 items-center sm:text-sm text-xs  pt-[9px] pb-[10px] px-3 relative main-link '> <IoVideocamOutline className='text-base md:block hidden'/> Videos</button>
                  <button className=' flex gap-1 items-center sm:text-sm text-xs  pt-[9px] pb-[10px] px-3 relative main-link '> <FaRegNewspaper className='text-base md:block hidden'/> News</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResultSearchBar