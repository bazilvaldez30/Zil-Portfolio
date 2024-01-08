import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

const vsonaai = require('@/public/VSona-A.I.png')
const erpconsultancy = require('@/public/erpconsultantcy.png')

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Shop',
    hash: '#shop',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
]

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: <LuGraduationCap />,
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: <CgWorkAlt />,
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: <FaReact />,
    date: '2021 - present',
  },
]

export const projectsData = [
  {
    title: 'VSona - A.I',
    description:
      'I worked as a front-end developer on this project for 5 months up to present. It is a A.I persona voice chats',
    tags: ['React', 'Next.js', 'Django', 'Tailwind', 'CSS', 'Framer Motion'],
    imageUrl: vsonaai,
  },
  {
    title: 'ERP Consultancy Website',
    description:
      'As the Frontend and UI/UX developer, I crafted a seamless interface using React, and Next.js. Tailwind CSS ensures a modern aesthetic.',
    tags: ['React', 'Next.js', 'Tailwind', 'Figma'],
    imageUrl: erpconsultancy,
  },
  /* {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: vsonaai,
  }, */
]

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Bootstrap',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Express',
  'AWS Amplify',
  'Python',
  'Django',
  'Framer Motion',
]
