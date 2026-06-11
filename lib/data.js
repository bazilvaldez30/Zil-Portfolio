import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'

const vsonaai = require('@/public/VSona-A.I.png')
const workbeaver = require('@/public/workbeaver-website.png')

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
    title: 'Freelance Frontend Developer',
    location: 'Marilao, Bulacan, PH',
    description:
      'Worked with clients to build responsive web applications and UI components. Delivered projects using React, Next.js, and Tailwind CSS while managing full project lifecycle from requirements to deployment.',
    icon: <FaReact />,
    date: '2022 – present',
  },
  {
    title: 'Full-Stack Developer — Sparksoft Solution',
    location: 'Quezon City, PH',
    description:
      'Developed and maintained React.js and Next.js web applications. Collaborated with backend teams to integrate APIs and improve system functionality. Enhanced user experience through optimized frontend architecture and built reusable UI components for scalable development.',
    icon: <CgWorkAlt />,
    date: 'Feb 2023 – Sept 2024',
  },
  {
    title: 'Full-Stack Developer — WorkBeaver Inc.',
    location: 'London, United Kingdom',
    description:
      'Primarily focused on frontend development (~70%), building responsive and scalable Next.js interfaces. Developed reusable React components, converted Figma designs into production-ready UI, integrated frontend systems with backend APIs, and built Electron-based desktop applications for automation and internal business processes.',
    icon: <CgWorkAlt />,
    date: 'Aug 2024 – April 2026',
  },
]

export const projectsData = [
  {
    title: 'WorkBeaver — Website',
    description:
      'Marketing and CMS website for WorkBeaver. Built with Next.js, integrated Supabase for auth and edge functions, and Paddle for subscription payments.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Paddle'],
    imageUrl: workbeaver,
    websiteUrl: 'https://workbeaver.com',
  },
  {
    title: 'WorkBeaver — Browser Extension',
    description:
      'Automation browser extension transitioned from Electron. Handles repetitive business tasks in the browser, backed by Supabase edge functions.',
    tags: ['Browser Extension', 'React', 'Vite', 'Tailwind CSS', 'Supabase'],
    imageUrl: workbeaver,
    websiteUrl: 'https://app.workbeaver.com',
  },
  {
    title: 'Vsona AI Voice Chat',
    description:
      'AI persona voice chat platform. Built responsive interfaces with React and Next.js, integrated with real-time voice communication APIs.',
    tags: ['React', 'Next.js', 'Django', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: vsonaai,
    websiteUrl: '',
    unavailable: true,
  },
]

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'ShadCN UI',
  'Ant Design',
  'Node.js',
  'Express.js',
  'Python',
  'Django',
  'Zustand',
  'React Query',
  'Git',
  'Supabase',
  'Paddle',
  'Docker',
  'DynamoDB',
  'Google Cloud CI/CD',
  'Electron',
  'Vite',
  'REST API',
  'Framer Motion',
  'Figma',
]
