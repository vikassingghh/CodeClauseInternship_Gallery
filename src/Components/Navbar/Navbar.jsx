import React, { useEffect, useState } from 'react'
import hero2 from '../Navbar/hero2.jpeg';
import hero3 from '../Navbar/hero3.jpeg';
import hero4 from '../Navbar/hero4.jpeg';
import hero from '../Navbar/hero.jpeg';
import hero5 from '../Navbar/hero5.jpeg';
import hero6 from '../Navbar/hero6.jpeg';
import hero7 from '../Navbar/hero7.jpeg';
import hero8 from '../Navbar/hero8.jpeg';
import hero9 from '../Navbar/hero9.jpeg';
// import {GalleryData} from '../Api/GalleryData.js'

const Navbar = () => {
const GalleryData = [
  {
      id:"1",
      titile:"Nature",
      image:hero2
  },
  {
      id:"2",
      titile:"Nature",
      image:hero3
  },
  {
      id:"3",
      titile:"Nature",
      image:hero4
  },
  {
    id:"4",
    titile:"Nature",
    image:hero
  },
  {
    id:"5",
    titile:"Cars",
    image:hero5
  },
  {
    id:"6",
    titile:"Cars",
    image:hero6
  },
  {
    id:"7",
    titile:"Cars",
    image:hero7
  },
  {
    id:"8",
    titile:"People",
    image:hero8
  },
  {
    id:"9",
    titile:"People",
    image:hero9
  },
]

  const [data, setdata] = useState([]);
  const [collection, setcollection] = useState([]);
  useEffect(()=>{
    setdata(GalleryData);
    setcollection([... new Set(GalleryData.map((item)=> item.titile))]);
    console.log(collection);
  },[]);
  const function1 = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.titile==itemData);
    setdata(filterData);
  }
  // const bigImage = () => {
  //   console.log("clicked")
  // }
  return (
    <>
      <div className="">
        <div className="w-full h-screen bg-[url('..\src\Components\Images\hero5.jpg')] bg-no-repeat bg-center bg-cover ">
          <div className='grid grid-cols-4 text-white w-[80%] text-center mx-auto h-16 lg:pt-5 font-extrabold text-large'>
            <button onClick={()=>setdata(GalleryData)}>All</button>
            {
              collection.map((item)=><button onClick={()=>{function1(item)}}>{item}</button>)
            }
            
          </div>
          <div className="grid lg:grid-cols-4 w-[90%] lg:gap-20 gap-20 text-center mx-auto lg:pt-10">
            {
              data.map((item) => (
              <div className=' hover:scale-110 duration-700  text-white w-60' >
                <img src={item.image} alt=""  className="h-48" />
              </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
