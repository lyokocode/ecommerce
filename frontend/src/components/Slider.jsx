import React from 'react'
import "../styles/slider.scss"
import { sliderItems } from "../data"
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useState } from 'react'

const Slider = () => {

    const [index, setIndex] = useState(0)
    const { name, desc, image, bg } = sliderItems[index]

    const checkNumber = (number) => {
        if (number > sliderItems.length - 1) {
            return 0
        }
        if (number < 0) {
            return sliderItems.length - 1
        }
        return number
    }
    const nextItem = () => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    const prewItem = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    return (
        <section className='slider-container'>
            <button className='arrow left' onClick={prewItem}>
                <RiArrowLeftSLine className='arrow-icon' />
            </button>
            <main className="wrapper">

                <div className="slide" style={{ backgroundColor: `#${bg}` }} >

                    <div className="image-container">
                        <img src={image} alt="" />
                    </div>
                    <div className="info-container">
                        <h1 className='title'>{name}</h1>
                        <p className='description'>{desc}</p>
                        <button>SHOW NOW</button>
                    </div>
                </div>

            </main>
            <button className='arrow right' onClick={nextItem}>
                <RiArrowRightSLine className='arrow-icon' />
            </button>
        </section>
    )
}

export default Slider