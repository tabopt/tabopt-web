import React from 'react';
import logo from '../../assets/images/logo/tabopt.png';
import { Input} from 'antd';
import { FaRegNewspaper } from "react-icons/fa";
import { IoVideocamOutline, IoGlobeOutline, IoImagesOutline } from "react-icons/io5";
import { TbBasketSearch } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[100vh] w-full">
        <div className="flex justify-end items-center p-2 px-3 ">
          <div>
            <Link to="/sign-in" className="px-3 py-2  w-full hover:bg-blue-300 rounded-full text-base bg-[#148ccd] text-white flex items-center gap-2 font-medium" > <FiUser/> Sign in </Link>
          </div>
        </div>
        <div className='h-[calc(100%_-44px)] w-full  px-3'>
          <div className=' flex justify-center items-center w-full h-full -mt-[50px]'>
            <div className=' search-box lg:w-[832px] flex flex-col justify-center gap-2'>
              <div className="logo flex justify-center">
                <img src={logo} alt="tabopt" className="w-44" />
              </div>
              <div>
                <div className=' text-center mt-2'>
                  <h3 className='text-[#232A31] text-[40px] leading-[48px] font-normal'>Good afternoon!</h3>
                </div>
                <div className='mt-1 text-center'>
                  <p className='sm:text-sm text-xs text-gray-500 leading-5 font-medium'>Today is February 14</p>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-1 mt-3'>
                  <div className=' relative w-full'>
                    <Input id='field-name' name='name' allowClear placeholder="Search the web"  className='flex-grow h-[52px] w-full pl-4 pb-[7px] border text-[20px] bg-transparent text-[#807f7f] outline-none rounded-full focus-within:border-gray-400 focus-within:shadow-none  font-medium hover:border-gray-300 outline-0 hover:shadow-md'  /> {/*allowClear*/}
                  </div>
                  <button className='bg-[#148ccd] px-6 font-medium  rounded-full  text-white h-[50px]' onClick={()=>{navigate("/results/web");}} >Search</button>
                </div>
                <div className='flex flex-wrap justify-center  items-center gap-3'>
                  <button className='rounded-full px-[12px] py-[9px] whitespace-nowrap border border-[#e0e4e9] text-sm text-[#464e56] hover:border-[#148ccd] hover:text-[#148ccd] hover:bg-[#148ccd20] font-bold flex gap-1 items-center'> <IoGlobeOutline className='text-base'/> Web</button>
                  <button className='rounded-full px-[12px] py-[9px] whitespace-nowrap border border-[#e0e4e9] text-sm text-[#464e56] hover:border-[#148ccd] hover:text-[#148ccd] hover:bg-[#148ccd20] font-bold flex gap-1 items-center'> <IoImagesOutline className='text-base'/> Images</button>
                  <button className='rounded-full px-[12px] py-[9px] whitespace-nowrap border border-[#e0e4e9] text-sm text-[#464e56] hover:border-[#148ccd] hover:text-[#148ccd] hover:bg-[#148ccd20] font-bold flex gap-1 items-center'> <IoVideocamOutline className='text-base'/> Videos</button>
                  <button className='rounded-full px-[12px] py-[9px] whitespace-nowrap border border-[#e0e4e9] text-sm text-[#464e56] hover:border-[#148ccd] hover:text-[#148ccd] hover:bg-[#148ccd20] font-bold flex gap-1 items-center'> <FaRegNewspaper className='text-base'/> News</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
