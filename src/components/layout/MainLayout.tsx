import { Box, Toolbar } from '@mui/material';
import Sidebar from 'components/common/Sidebar';
import Topbar from 'components/common/Topbar';
import colorConfigs from 'configs/colorConfigs';
import sizeConfigs from 'configs/sizeConfigs';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar />

      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: '100vh',
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
