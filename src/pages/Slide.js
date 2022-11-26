import React from 'react'
import Sdata from "./Sdata"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import styled from 'styled-components'


const Container = styled.div`
max-width: 768px;
`

const Slide = () => {
    const settings = {
      dots: true,
      Infinity: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll:1,
      autoplay: true,
      appendDots: (dots) =>{
        return <ul style={{margin : "0px"}}>{dots}</ul>
      }
    };
  
  return (
    <>
    <Slider {...settings}>
    {Sdata.map((value,index)=>{
      return(


<>
<Container>
<div className="flex h-screen items-center  bg-slate-900 justify-between max-w-full" key={index}>
        <div className="flex min-h-screen items-center bg-slate-900 justify-between gap-1">
            <div className="group h-96 w-80 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    <div className="absolute inset-0">
                        <img class="aziz"className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={value.cover} alt=""/>
                    </div>
                    <div className="absolute insert-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex min-h-full flex-col items-center justify-center">
                            <h1 className="text-3xl font-bold">{value.title}</h1>
                            <p className="text-lg">{value.desc}</p>
                            <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">ENZEL 3ASBA</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
            </div>
            
            </div>
            </Container>
       
        </>
        
        
        )
        })}
        </Slider>
    </>
  )
}

export default Slide