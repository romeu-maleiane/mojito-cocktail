'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import { sliderLists } from '../../contants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Menu() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const contentRef = useRef<HTMLImageElement>(null)

    const totalCockTails = sliderLists.length

    const goToSlide = (index: number) => {
        const newIndex = (index + totalCockTails) % totalCockTails
        setCurrentIndex(newIndex)
    }

    const getCocktailAt = (indexOffSet: number) => {
        return sliderLists[(currentIndex + indexOffSet + totalCockTails) % totalCockTails]
    }

    const currentCocktail = getCocktailAt(0)
    const prevCocktail = getCocktailAt(-1)
    const nextCocktail = getCocktailAt(1)

    useGSAP(() => {
        gsap.fromTo('#title', { opacity:0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
            xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
        })
        gsap.fromTo('.details h2', { opacity: 0, yPercent: 100 }, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
        gsap.fromTo('.details p', { opacity: 0, yPercent: 100 }, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
    }, [currentIndex])

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#menu',
                start: 'top 100%',
                end: 'top top',
                scrub: true,
            }
        })
        .from('#m-right-leaf', { x: 100, y: -100 })
        
        gsap.timeline({
            scrollTrigger: {
                trigger: '#menu',
                start: 'top 20%',
                end: 'top top',
                scrub: true,
            }
        })
        .from('#m-left-leaf', { x: -100, y: 100 })
    },[])

    return (
        <section id='menu' className='py-20' aria-label='menu-heading'>
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

            <h2 id='menu-heading' className='sr-only'>
                Cocktail Menu
            </h2>

            <div className='flex justify-center w-full'>

            <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex

                    return (
                        <button key={cocktail.id} className={`
                            ${isActive
                                ? 'text-white border-white'
                                : 'text-white/50 border-white/50'
                                }
                                md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b-1 transition-colors font-modern-negra
                                `}
                                onClick={() => goToSlide(index)}
                        >
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>
                </div>

            <div className='flex w-full justify-center'>
                <div className='content'>
                    <div className='arrows'>
                        <button className='text-left' onClick={() => goToSlide(currentIndex - 1)}>
                            <span>{prevCocktail.name}</span>
                            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                        </button>

                        <button className='text-left' onClick={() => goToSlide(currentIndex + 1)}>
                            <span>{nextCocktail.name}</span>
                            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                        </button>
                    </div>

                    <div className='cocktail flex-center pt-10'>
                        <img src={currentCocktail.image} className='object-contain h-[70vh]' alt="cocktail" />
                    </div>

                    <div className='recipe'>
                        <div className='info' ref={contentRef}>
                            <p>Recipe for:</p>
                            <p id="title">{currentCocktail.name}</p>
                        </div>

                        <div className='details'>
                            <h2 className='md:text-5xl text-3xl font-serif'>{currentCocktail.title}</h2>
                            <p>{currentCocktail.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
