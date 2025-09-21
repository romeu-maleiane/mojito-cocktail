'use client'
/* eslint-disable @next/next/no-img-element */
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText);

function Hero() {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars, words' })
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

        heroSplit.chars.forEach(char => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        })
            .to(".right-leaf", { y: 180, immediateRender:false }, 0)
            .to(".left-leaf", { y: -200, immediateRender:false }, 0)
    }, [])
    
    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title hero-title'>
                    MOJITO
                </h1>

                <img
                    src="/images/hero-left-leaf.png"
                    alt="left-leaf"
                    className="left-leaf"
                />
                <img
                    src="/images/hero-right-leaf.png"
                    alt="right-leaf"
                    className="right-leaf"
                />

                <div className='body'>
                    <div className='w-full flex justify-center'>

                        <div className='content'>
                            <div className='space-y-5 hidden md:block'>
                                <p>Cool. Crisp. Classic.</p>
                                <p className='subtitle'>
                                    Skip the Spirit <br /> of summer
                                </p>
                            </div>

                            <div className='view-cocktails'>
                                <p className='subtitle'>
                                    Every cocktail on our menu is a blend of premium ingredients, creative flair,
                                    and timeless recipe - designed to delight your senses.
                                </p>
                                <a href="#coctails">View Cocktails</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
