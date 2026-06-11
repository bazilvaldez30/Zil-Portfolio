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
        I&apos;m a{' '}
        <span className='font-medium'>Frontend / Full-Stack Developer</span>{' '}
        with experience building responsive and scalable web applications using{' '}
        <span className='font-medium'>React, Next.js</span>, and modern frontend
        technologies. I&apos;m skilled in{' '}
        <span className='font-medium'>
          API integration, UI/UX implementation
        </span>
        , and developing maintainable applications focused on performance and
        usability. My core stack includes{' '}
        <span className='font-medium'>
          React.js, Next.js, TypeScript, Node.js, and Tailwind CSS
        </span>
        , and I also work with tools like{' '}
        <span className='font-medium'>Zustand, React Query, and Docker</span>.
      </p>

      <p>
        <span className='italic'>When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and spending time with my pets. I
        also enjoy <span className='font-medium'>learning new things</span> and
        staying up to date with the latest in tech.
      </p>
    </motion.section>
  )
}
