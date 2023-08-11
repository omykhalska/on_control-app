import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { RouteType } from './config';
import HomePage from 'pages/home/HomePage';
import DashboardPageLayout from 'pages/dashboard/DashboardPageLayout';
import DefaultPage from 'pages/dashboard/DefaultPage';
import DashboardIndex from 'pages/dashboard/DashboardIndex';

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
    ],
  },
];

export default appRoutes;
