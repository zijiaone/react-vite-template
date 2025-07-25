import React from 'react';
import { createBrowserRouter, type RouteObject } from 'react-router-dom';

import AboutView from '@/views/AboutView/AboutView';
import HomeView from '@/views/HomeView/HomeView';

// 定义路由配置
const routeConfig: RouteObject[] = [
  {
    element: <HomeView />,
    path: '/',
  },
  {
    element: <AboutView />,
    path: '/about',
  },
];

const router = createBrowserRouter(routeConfig);

export default router;
