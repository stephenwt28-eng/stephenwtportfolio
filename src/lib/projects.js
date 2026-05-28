export const projects = [
  {
    id: 'cat-food',
    title: 'Cat Food Subscription App',
    shortDesc: 'Customizable cat food delivery with personalized meal plans.',
    fullDesc: 'A full-stack subscription app where users create accounts (dummy data), customize cat food orders by selecting meats, vegetables, supplements, container type, and delivery frequency. Includes a simulated credit card checkout and the ability to revisit and edit existing plans.',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
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
    id: 'task-manager',
    title: 'Task Manager',
    shortDesc: 'Simple task management with login, task creation, and due dates.',
    fullDesc: 'A straightforward task management app with user authentication. Users can create tasks, set due dates, mark completion, and delete tasks. Clean minimal UI focused on functionality.',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    status: 'complete',
    thumbnail: '/images/task-manager.png',
    features: [
      'User registration and login',
      'Create new tasks',
      'Set due dates on tasks',
      'Delete tasks',
      'Task list view'
    ]
  },
  {
    id: 'vision-manager',
    title: 'VisionManager',
    shortDesc: 'Optical management system with Supabase integration.',
    fullDesc: 'A management system for optical/vision-related business operations. Built with Next.js and Supabase database. Currently in active development — more details from Guto pending.',
    tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
    status: 'development',
    thumbnail: '/images/vision-manager.png',
    features: [
      'Supabase database integration',
      'Optical business management',
      'In development — features being finalized'
    ]
  }
];