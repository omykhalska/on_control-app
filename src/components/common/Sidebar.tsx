import { v4 as uuidv4 } from 'uuid';
import { Avatar, Drawer, List, Stack, Toolbar } from '@mui/material';
import assets from 'assets';
import colorConfigs from 'configs/colorConfigs';
import sizeConfigs from 'configs/sizeConfigs';
import appRoutes from 'routes/appRoutes';
import SidebarItem from './SidebarItem';
import SidebarItemCollapse from './SidebarItemCollapse';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sizeConfigs.sidebar.width,
          boxSizing: 'border-box',
          borderRight: '0px',
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: '20px' }}>
          <Stack sx={{ width: '100%' }} direction="row" justifyContent="center">
            <Avatar src={assets.images.logo} variant="rounded" sx={{ width: 50, height: '100%' }} />
          </Stack>
        </Toolbar>
        {appRoutes.map(route =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={uuidv4()} />
            ) : (
              <SidebarItem item={route} key={uuidv4()} />
            )
          ) : null,
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
