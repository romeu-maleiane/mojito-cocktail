'use client'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { navLinks } from '../../contants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);


function NavBar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
      }
    })

    navTween.fromTo('nav', { background: 'transparent' }, {
      backgroundColor: '#00000050',
      backgroundFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut'
    })
  },[])
  return (
    <nav>
      <div>
        <a href='#home' className='flex items-center gap-2'>
          <img src='/images/logo.png' alt='logo'/>
          <p>Velcet Pour</p>        
        </a>

        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
