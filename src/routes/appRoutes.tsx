import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import { RouteType } from './config';
import HomePage from 'pages/home/HomePage';
import DashboardPageLayout from 'pages/dashboard/DashboardPageLayout';
import DefaultPage from 'pages/dashboard/DefaultPage';
import DashboardIndex from 'pages/dashboard/DashboardIndex';
import AnalyticsPage from 'pages/dashboard/AnalyticsPage';
import ReportsPage from 'pages/reports/ReportsPage';
import SaasPage  from 'pages/dashboard/SaasPage';

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: 'home',
  },
  {
    path: '/dashboard',
    element: <DashboardPageLayout />,
    state: 'dashboard',
    sidebarProps: {
      displayText: 'Dashboard',
      icon: <DashboardRoundedIcon />,
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: 'dashboard.index',
      },
      {
        path: '/dashboard/default',
        element: <DefaultPage />,
        state: 'dashboard.default',
        sidebarProps: {
          displayText: 'Default',
        },
      },
      {
        path: '/dashboard/analytics',
        element: <AnalyticsPage />,
        state: 'dashboard.analytics',
        sidebarProps: {
          displayText: 'AnalyticsPage',
        },
      },
      {
        path: '/dashboard/saas',
        element: <SaasPage />,
        state: 'dashboard.saas',
        sidebarProps: {
          displayText: 'SaasPage',
        },
      },
    ],
  },
  {
    path: '/reports',
    element: <ReportsPage />,
    state: 'reports',
    sidebarProps: {
      displayText: 'Reports',
      icon: <FlagRoundedIcon />,
    },
  },
];

export default appRoutes;
