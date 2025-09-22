'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { cocktailLists, mockTailLists } from '../../contants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Cocktails() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })
        .from('#c-left-leaf', { x: -100, y: 100 })
        .from('#c-right-leaf', { x: 100, y: 100 })
    },[])


    return (
        <section id='cocktails' className='noisy'>
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className='w-full flex justify-center'>
                <div className='list'>
                    <div className='popular'>
                        <h2 className='text-xl font-medium'>Most popular cocktails:</h2>

                        <ul>
                            {cocktailLists.map(({ name, country, detail, price }, index) => (
                                <li key={index}>
                                    <div className='md:me-28'>
                                        <h3 className='text-xl'>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='loved'>
                        <h2 className='text-xl font-medium'>Most loved mocktails:</h2>

                        <ul>
                            {mockTailLists.map(({ name, country, detail, price }, index) => (
                                <li key={index}>
                                    <div className='me-28'>
                                        <h3 className='text-xl'>{name}</h3>
                                        <p>{country} | {detail}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cocktails
