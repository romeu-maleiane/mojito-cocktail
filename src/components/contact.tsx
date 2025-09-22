'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { openingHours, socials } from '../../contants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

function Contact() {
    useGSAP(() => {
        const splitWords = SplitText.create('#contact h2',{ type: 'words' })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center'
            }
        })
        
        timeline
            .from(splitWords.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            })
            .to('#f-left-leaf', {
                y: '50', duration: 1, ease: 'power1.inOut'
            }, '<')
    })
    return (
        <footer id='contact' className='lg:py-10 py-16'>
            <img src="/images/footer-right-leaf.png" alt="right-leaf" id='f-right-leaf' />
            <img src="/images/footer-left-leaf.png" alt="left-leaf" id='f-left-leaf' />

            <div className='flex justify-center w-full'>
                <div className='content md:pt-20 mt-0 px-4'>
                    <h2 className='lg:text-6xl 2xl:text-8xl text-5xl font-modern-negra md:translate-y-0 translate-y-5'>Where to Find Us</h2>

                    <div>
                        <h3 className='uppercase xl:text-base 2xl:text-lg text-base'>Visit Our Bar</h3>
                        <p>456, Raq Blvd. #404, Los Angeles, CA 90810</p>
                    </div>

                    <div>
                        <h3>Contact Us</h3>
                        <p>(555) 952-4528</p>
                        <p>hell@ramcocktail.com</p>
                    </div>

                    <div>
                        <h3>Open Every Day</h3>
                        {openingHours.map((time) => (
                            <p key={time.day}>
                                {time.day} : {time.time}
                            </p>
                        ))}
                    </div>

                    <div>
                        <h3>Socials</h3>

                        <div className='flex-center gap-5'>
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={social.name}
                                >
                                    <img src={social.icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
