export const projects = [
  {
    id: 'cat-food',
    title: 'RA&A Cat Food Delivery',
    shortDesc: 'Customizable cat food delivery subscription app with personalized meal plans.',
    fullDesc: 'A full-stack subscription app where users create accounts (dummy data), customize cat food orders by selecting meats, vegetables, supplements, container type, and delivery frequency. Includes a simulated credit card checkout and the ability to revisit and edit existing plans.',
    tech: ['React', 'Vite', 'Node'],
    status: 'complete',
    thumbnail: '/images/cat-food.png',
    features: [
      'User registration and login',
      'Customizable meal builder (meats, vegetables, supplements)',
      'Container type selection',
      'Delivery frequency picker',
      'Dummy credit card checkout form',
      'Plan editing after order placement'
    ]
  },
  {
    id: 'vision-manager',
    title: 'Vision Manager',
    shortDesc: 'Optical management system with Supabase integration.',
    fullDesc: 'A management system for optical/vision-related business operations. Built with Next.js and Supabase database.',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    status: 'development',
    thumbnail: '/images/task-manager.png',
    features: [
      'Supabase database integration',
      'Optical business management',
      'In development — features being finalized'
    ]
  },
  {
    id: 'learning-tracker',
    title: 'Learning Tracker',
    shortDesc: 'A private dashboard where the user tracks learning topics, progress, and confidence.',
    fullDesc: 'A full-stack learning tracker built with Next.js and Supabase. Users register, log in, and manage their own learning entries — tracking topics, categories, status (Not Started/Learning/Practicing/Completed), confidence level (Low/Medium/High), notes, and study dates. Each user only sees their own data via Row Level Security.',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    status: 'coming-soon',
    thumbnail: '/images/learning-tracker.png',
    features: [
      'User registration and login with Supabase Auth',
      'Create learning entries with topic, category, status, confidence, notes, and study date',
      'List all learning entries for the logged-in user',
      'Edit and update existing entries',
      'Delete entries',
      'Row Level Security — each user only sees their own data',
      'Protected dashboard with session management'
    ]
  }
];