import { v4 as uuidv4 } from 'uuid';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import colorConfigs from 'configs/colorConfigs';
import { useState } from 'react';
import { RouteType } from 'routes/config';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import SidebarItem from './SidebarItem';

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState(false);

  return item.sidebarProps ? (
    <>
      <ListItemButton
        onClick={() => {
          setOpen(open => !open);
        }}
        sx={{
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
        <ListItemText
          disableTypography
          primary={<Typography>{item.sidebarProps.displayText}</Typography>}
        />
        {open ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
          {item.child?.map(child =>
            child.sidebarProps ? (
              child.child ? (
                <SidebarItemCollapse item={child} key={uuidv4()} />
              ) : (
                <SidebarItem item={child} key={uuidv4()} />
              )
            ) : null,
          )}
        </List>
      </Collapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
