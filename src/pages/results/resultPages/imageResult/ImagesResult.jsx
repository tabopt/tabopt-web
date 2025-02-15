import React from 'react'
import { Link } from 'react-router-dom'
import bike from '../../../../assets/images/icons/bike.png'

const images = [
    { src: 'https://images.unsplash.com/photo-1732439857681-ece7fe1ff7eb?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 1' },
    { src: 'https://media.istockphoto.com/id/139082305/photo/motorcycle-front-view.jpg?s=1024x1024&w=is&k=20&c=C_89ClmEEtNBmvwrbfZj4-cxdLzNnilH2Eu7CooQYNw=', alt: 'Image 2' },
    { src: 'https://media.istockphoto.com/id/116654776/photo/rear-of-a-motorcycle.jpg?s=1024x1024&w=is&k=20&c=AwsbxQN9uX2BY0rLvGBhIAO_N9xLLrKRqUOHsCbJyvU=', alt: 'Image 3' },
    { src: 'https://media.istockphoto.com/id/1481925667/photo/retro-motorcycles-parked-on-the-street.jpg?s=1024x1024&w=is&k=20&c=IsaO5Y9Kd7p6ReqxvPMokxZwWkc1zRDYp9BszpE8LsM=', alt: 'Image 4' },
    { src: 'https://media.istockphoto.com/id/1495948035/photo/vintage-motorcycle-headlights-and-indicatorsintage-motorcycle-headlights-and-indicators.jpg?s=1024x1024&w=is&k=20&c=t2TQRWIRo-9Cp7VJfHrod4r_effxxL_iEVWU19ae2Ic=', alt: 'Image 4' },
    { src: 'https://media.istockphoto.com/id/1153999731/photo/chrome-shiny-chopper-motorcycle-headlight-closeup.jpg?s=1024x1024&w=is&k=20&c=6kwKb47LlblKehFRG-Ij18BHBIEGqyNf-HsIBy3UTSE=', alt: 'Image 4' },
    { src: 'https://media.istockphoto.com/id/1046550354/photo/retro-motorcycle-and-bike-antique-parts-and-elements.jpg?s=1024x1024&w=is&k=20&c=8agUU7c9-32OJwQ7AcO1fuC1Bad_8G92VBJHXPHOoHk=', alt: 'Image 4' },
    { src: 'https://media.istockphoto.com/id/2164317259/photo/retro-scooter-with-speedometer-on-a-trip-scooter-trip-in-italy.jpg?s=1024x1024&w=is&k=20&c=YDtJSD_AfI0khgDotAoPd9loxWgtA1OcaUVBErBbIZE=', alt: 'Image 4' },
    { src: 'https://media.istockphoto.com/id/1717898470/photo/motorcycle-close-up-from-different-sides-separate-parts-of-the-motorcycle.jpg?s=1024x1024&w=is&k=20&c=bb1-QE663qvU0VxeoapYjfXr1oF2XpxMJI38gMbIhMc=', alt: 'Image 4' },
    { src: 'https://media.istockphoto.com/id/115987880/photo/powerful-bike.jpg?s=1024x1024&w=is&k=20&c=XzNdstytspRaQvSZ1aGHGLkccnftO5oLnvGzWMo0c3c=', alt: 'Image 4' },
    { src: 'https://images.unsplash.com/photo-1700895474552-f670b129c305?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
    { src: 'https://plus.unsplash.com/premium_photo-1712933121306-8f1c8c94a24e?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
    { src: 'https://images.unsplash.com/photo-1720490633887-067cd114e919?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
    { src: 'https://plus.unsplash.com/premium_photo-1713877855029-54a390a25e2a?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
    { src: 'https://images.unsplash.com/photo-1635260666109-9625ee387afb?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 4' },
    // Add more images as needed
  ]
const ImagesResult = () => {
  return (
    <>
        <div className="w-full lg:px-4 md:px-4 md:py-1 py-2 px-3 mt-1  ">
            <div className="w-full p-4">
                <div className="columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
                    {images.map((img, index) => (
                        <div key={index} >
                            <Link to={''}>
                                <div className='flex flex-col gap-1'>
                                    <div className='w-full'>
                                        <img src={img.src} alt="" className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                                    </div>
                                    
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="P-2 mt-5 mb-20">
                <div className=" columns-2  lg:columns-3 xl:columns-4  gap-3 lg:gap-4 [&>div:not(:first-child)]:mt-3 lg:[&>div:not(:first-child)]:mt-4">
                   {images.map((item,index) => (
                    <div key={index} className=" overflow-hidden">
                        <img  src={item.src} className='scale-[1] transition-all duration-600 ease-out hover:scale-110' alt= "" />
                    </div>
                   ))} 
                </div>
            </div>  */}
        </div>
    </>
  )
}

export default ImagesResult