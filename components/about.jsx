'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in{' '}
        <span className='font-medium'>BS in Information Technology</span>, I
        worked as an IT/Technical Support for three years. Subsequently, fueled
        by my passion for programming, I decided to transition my career. To
        refresh my skills and stay updated with the current tech trends, I
        enrolled in a coding bootcamp where I delved into{' '}
        <span className='font-medium'>full-stack web development</span>.{' '}
        <span className='italic'>My favorite aspect of programming</span> is the
        problem-solving challenge. I love the feeling of finally figuring out a
        solution to a problem. I am particularly enthusiastic about
        <span className='underline'></span> the constant learning process in the
        dynamic field of technology. My core stack includes{' '}
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
        </span>
        . Additionally, I am also familiar with TypeScript. My eagerness to
        explore new technologies keeps me motivated. Currently, I am actively
        seeking a <span className='font-medium'>full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className='italic'>When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and playing with my dog/cats. I
        also enjoy <span className='font-medium'>learning new things</span>.
      </p>
    </motion.section>
  )
}
