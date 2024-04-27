import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

const vsonaai = require('@/public/VSona-A.I.png')
const erpconsultancy = require('@/public/erpconsultantcy.png')
const ecommerce = require('@/public/e-commerce.png')

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
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
    title: 'Zuitt Extensive Coding bootcamp',
    location: 'Quezon City, PH',
    description:
      'I graduated after 2 months of studying. I immediately found a job as a full-stack developer.',
    icon: <LuGraduationCap />,
    date: '2022',
  },
  {
    title: 'Software Engineer',
    location: 'Quezon City, PH',
    description:
      'Full Stack Developer specializing in React.js. Leading front-end development, enhancing user interfaces, and collaborating on teams for seamless integration.',
    icon: <CgWorkAlt />,
    date: '2023 - present',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Marilao, PH',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Node, Express.js, Tailwind. I'm open to part-time opportunities.",
    icon: <FaReact />,
    date: '2023 - present',
  },
]

export const projectsData = [
  {
    title: 'VSona - A.I',
    description:
      'I worked as a front-end developer on this project for 5 months up to present. It is a A.I persona voice chats',
    tags: [
      'React',
      'Next.js',
      'Django',
      'Tailwind',
      'CSS',
      'Framer Motion',
      'Figma',
    ],
    imageUrl: vsonaai,
    websiteUrl: 'https://www.vsona.ai/',
  },
  {
    title: 'SGEN E-Commerce',
    description:
      'I worked as a front-end developer on this sample project. It is a E-Commerce website',
    tags: ['React', 'Next.js', 'Django', 'Tailwind', 'CSS', 'Framer Motion'],
    imageUrl: ecommerce,
    websiteUrl: 'https://dutchie-demo-shop-bgxd2bvflq-uc.a.run.app',
  },
  {
    title: 'ERP Consultancy Website',
    description:
      'I seamlessly translated their Figma design into a live user interface as the Frontend and UI/UX developer.',
    tags: ['React', 'Next.js', 'Tailwind', 'Figma'],
    imageUrl: erpconsultancy,
    websiteUrl: 'https://erpconsultancy.dev',
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
  'Google Cloud CI/CD',
  'Git',
  'Tailwind',
  'Bootstrap',
  'MongoDB',
  'Redux',
  'React Query',
  'REST API',
  'GraphQL',
  'Express',
  'AWS Amplify',
  'Python',
  'Django',
  'Framer Motion',
  'PWA',
  'AI Chatbot',
  'Figma',
]
