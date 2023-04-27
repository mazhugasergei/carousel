// react
import { useEffect, useState } from "react"



export const CarouselItem = ()=>{}



export const Carousel = ({ children }) => {
  const [currentSlideNum, setCurrentSlideNum] = useState(0)

  const prevSlide = () => {
    if(currentSlideNum) setCurrentSlideNum(currentSlideNum-1)
    else setCurrentSlideNum(children.length-1)
  }
  const nextSlide = () => {
    if(currentSlideNum+1 != children.length) setCurrentSlideNum(currentSlideNum+1)
    else setCurrentSlideNum(0)
  }

  useEffect(()=>{
    
  }, [currentSlideNum])

  return (
    <div className="carousel">
      {
        children.map((slide, i) => {
          return (
            <div className="slide" style={{ transform: `translateX(${-currentSlideNum}00%)` }} key={i}>
              <div className="bg" style={{ backgroundImage: `url('${slide.props.img}')` }} />
              <div className="text">
                <h1>{ slide.props.title }</h1>
                <p>{ slide.props.text }</p>
              </div>
            </div>
          )
        })
      }
      <nav>
        <div className="btn" onClick={prevSlide}>←</div>
        <div className="btn" onClick={nextSlide}>→</div>
        <div className="progress">
          {
            children.map((child, i) => (
              <button onClick={()=>{setCurrentSlideNum(i)}} style={{ background: currentSlideNum == i ? "#fff" : "#8E8E93" }} key={i} />
            ))
          }
        </div>
      </nav>
    </div>
  )
}