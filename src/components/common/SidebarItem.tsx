import { ListItemButton, ListItemIcon } from '@mui/material';
import colorConfigs from 'configs/colorConfigs';
import { Link, useLocation } from 'react-router-dom';
import { RouteType } from 'routes/config';

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { pathname } = useLocation();

  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={{
        backgroundColor: pathname === item.path ? colorConfigs.sidebar.hoverBg : null,
        '&: hover': {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        paddingY: '12px',
        paddingX: '24px',
      }}
    >
      <ListItemIcon sx={{ color: colorConfigs.sidebar.color }}>
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SidebarItem;
