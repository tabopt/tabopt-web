import React from 'react'
import fav from '../../../../assets/images/icons/download.png'
import boximg from '../../../../assets/images/download.jpeg'
import { Link } from 'react-router-dom'

const locations = [
    { name: "Northern Ireland", path: "/" },
    { name: "Republic", path: "/" },
    { name: "Gaelic Ireland", path: "/" },
    { name: "Prehistoric Ireland", path: "/" },
    { name: "Northern Ireland", path: "/" },
    { name: "Republic", path: "/" },
    { name: "Gaelic Ireland", path: "/" },
    { name: "Prehistoric Ireland", path: "/" }
  ];
const WebResult = () => {
  return (
    <>
      <div className='lg:mx-44 md:mx-36  sm:mx-[128px] pt-7 px-2'>
        <div className='flex flex-col gap-3'>
            <div className='w-full group/link '>
                <div className='flex justify-between items-start gap-3 clear-both'>
                    <div className=' lg:w-[calc(100%_-_96px)] md:w-[calc(100%_-_64px)] w-[calc(100%_-_63px)] '>
                        <a href=''>
                            <div className='flex '>
                                <div className='flex items-center'>
                                    <div className='w-7 h-7 rounded-full border border-[#9aa0a6] bg-white overflow-hidden mr-2 '>
                                        <img src={fav}/>
                                    </div>
                                    <div className='flex flex-col  '>
                                        <div className='text-[#535353] text-sm block leading-[20px] whitespace-nowrap font-medium'>
                                            <span>Wikipedia</span>
                                        </div>
                                        <div className='text-xs leading-[18px] overflow-hidden text-ellipsis whitespace-nowrap text-[#535353] not-italic font-normal'>
                                            <span>https://en.wikipedia.org</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <h3 className="inline-block leading-[1.272] mb-[3px] text-[22px]  max-w-full pt-1 text-[#0070ad] group-hover/link:underline"> Republic of Ireland </h3>
                        </a>
                        <p className="font-sans text-[14px] font-medium leading-[22px] text-[#535353]"> <b>Ireland</b> also known as the Republic of <b>Ireland</b> (Poblacht na hÉireann), is a country in Northwestern Europe consisting of 26 of the 32 counties of the island ...</p>
                        
                    </div>
                    <div className='lg:w-24 md:w-16 w-16 aspect-square rounded-md overflow-hidden '>
                        <img src={boximg} className='w-full h-full object-cover '/>
                    </div>
                </div>
                <div className='contain-layout contain-paint overflow-hidden'>
                        <div className='block overflow-x-auto overflow-y-clip relative whitespace-nowrap translate-z-0 '>
                            <ul className="flex items-center mt-1 gap-3 mb-2 ">
                                {locations.map((item, index) => (
                                    <li
                                    key={index}
                                    className={`relative md:p-0 px-2 py-1 md:border-none border md:rounded-none rounded-full  ${index !== 0 ? "md:after:w-[2px] md:after:h-[2px] md:after:rounded-full md:after:bg-[#0070ad] md:after:absolute md:after:-left-1 md:after:top-1/2 md:after:-translate-y-1/2 " : ""}`}
                                    >
                                    <Link to={item.path} className="text-xs text-[#0070ad] font-normal whitespace-nowrap">
                                        {item.name}
                                    </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>   
                <div>
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}

export default WebResult