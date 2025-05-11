/* eslint-disable @typescript-eslint/no-explicit-any */


"use client";

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Collapse,
  Avatar,
  InputBase,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  Typography,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  List as ListIcon,
  Dashboard,
  Info,
  ShoppingCart,
  ContactPage,
  ExpandMore,
  Search as SearchIcon,
  Person,
  Settings,
  Logout,
  MenuOpen,
  ExpandLess,
  Close,
  Add,
  NoteAlt,
  Reviews,
  PhotoLibrary,
  Photo,
  Folder,
  ViewDay,
  MiscellaneousServices,
  Web,
  People,
  SettingsBackupRestore,
  Help,
  Notifications,
  Key,
  DirectionsCar,
  Handyman,
  DirectionsCarFilled,
  LocalFireDepartment,
  LockOpen,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter, usePathname } from "next/navigation";
import { blue, green, red } from "@mui/material/colors";

const navigationItems = [
  { title: "Dashboard", icon: <Dashboard sx={{ color: blue[500] }} />, path: "/" },
  { title: "Banner", icon: <ViewDay sx={{ color: green[500] }} />, path: "/super_admin/banner" },
  { title: "About", icon: <Info sx={{ color: "#219B9D"  }} />, path: "/super_admin/about/list" },
  { title: "Services", icon: <MiscellaneousServices sx={{ color: red[500]  }} />, path: "/super_admin/about/list" },
  // {
  //   title: "About",
  //   icon: <Info sx={{ color: "#219B9D" }} />,
  //   children: [
  //     { title: "Add About", icon: <Add />, path: "/super_admin/about/add" },
  //     { title: "Welcome", icon: <Add />, path: "/super_admin/about/welcome" },
  //     { title: "Work Process", icon: <Add />, path: "/super_admin/about/process" },
  //     { title: "Workers", icon: <People />, path: "/super_admin/about/workers" },
  //     { title: "List About", icon: <ListIcon />, path: "/super_admin/about/list" },
  //   ],
  // },
  {
    title: "Services",
    icon: <MiscellaneousServices sx={{ color: red[500] }} />,
    children: [
      { title: "Emergency Lockdown", icon: <Key sx={{ color: red[500] }}/>, path: "/super_admin/about/emergency" },
      { title: "Car Programming", icon: <DirectionsCar sx={{ color: red[500] }}/>, path: "/super_admin/about/carprogramming" },
      { title: "Home Door Unlock", icon: <Handyman sx={{ color: red[500] }}/>, path: "/super_admin/about/doorlock" },
      { title: "Car Unlock", icon: <DirectionsCarFilled sx={{ color: red[500] }}/>, path: "/super_admin/about/carunlock" },
      { title: "Ignition Repair", icon: <LocalFireDepartment sx={{ color: red[500] }}/>, path: "/super_admin/about/ignition" },
      { title: "Safe Unlock", icon: <LockOpen sx={{ color: red[500] }}/>, path: "/super_admin/about/safeunlock" },
    ],
  },
  {

    title: "Shop",
    icon: <ShoppingCart sx={{ color: blue[500], }} />,
    children: [
      {
        path: "/super_admin/shop/add",
        title: "Add Shop",
        icon: <Add />,
      },
      {
        path: "/super_admin/shop/list",
        title: "List Shop",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "super_admin/contact",
    title: "Contact",
    icon: <ContactPage sx={{ color: green[500], }} />,
    children: [
      {
        path: "/super_admin/contact/add",
        title: "Add Contact",
        icon: <Add />,
      },
      {
        path: "/super_admin/contact/list",
        title: "List Contact",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "super_admin/blog",
    title: "Blog",
    icon: <NoteAlt sx={{ color: red[500], }} />,
    children: [
      {
        path: "/super_admin/blog/add",
        title: "Add Blog",
        icon: <Add />,
      },
      {
        path: "/super_admin/blog/list",
        title: "List Blog",
        icon: <ListIcon />,
      },
    ],
  },
  {

    title: "Top Bar",
    icon: <Web sx={{ color: blue[500], }} />,
    children: [    
      {
        path: "/super_admin/topbar/list",
        title: "List Top Bar",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "super_admin/review",
    title: "Review",
    icon: <Reviews sx={{ color: green[500], }} />,
    children: [
      {
        path: "/super_admin/review/add",
        title: "Add Review",
        icon: <Add />,
      },
      {
        path: "/super_admin/review/list",
        title: "List Review",
        icon: <ListIcon />,
      },
    ],
  },
  {
    title: "Stock Image",
    icon: <PhotoLibrary sx={{ color: red[500], }} />,
    children: [
      {
        path: "/super_admin/stock/allimg",
        title: "All Image",
        icon: <Photo />,
      },
      {
        path: "/super_admin/stock/folder",
        title: "Folder",
        icon: <Folder />,
      },
    ],
  },
  {
    title: "User Management",
    icon: <People sx={{ color: "#836FFF", }} />,
    path: "/super_admin/user",

  },
  {
    title: "Backup and Settings",
    icon: <SettingsBackupRestore sx={{ color: "#6A9C89" }} />,
    children: [
      {
        path: "/super_admin/stock/allimg",
        title: "Frontend",
        icon: <Photo />,
      },
      {
        path: "/super_admin/stock/folder",
        title: "Backend",
        icon: <Folder />,
      },
    ],
  },
];
const DRAWER_WIDTH = 310;
const COLLAPSED_DRAWER_WIDTH = 75;

const CustomSidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null)
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => setOpen(!open);
  const toggleMobileDrawer = () => setMobileOpen(!mobileOpen);

  const toggleNestedList = (title: string) => {
    setOpenItems((prev) => {
      // Close all other menus first
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as Record<string, boolean>);

      // Toggle the current menu
      newState[title] = !prev[title];
      return newState;
    });
  };

  const handleNavigation = (path?: string, title?: string) => {
    if (path) {
      router.push(path);
      if (isMobile) setMobileOpen(false);
    } else if (title) {
      toggleNestedList(title);
    }
  };

  const handleProfileMenuOpen = (event: any) => {
    setProfileAnchorEl(event.currentTarget)
  }

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null)
  }

  const renderNavigationItems = (items: any, nested = false) =>
    items.map((item: any) => (
      <React.Fragment key={item.title}>
        <ListItem
          onClick={() => handleNavigation(item.path, item.children ? item.title : undefined)}
          sx={{
            pl: nested ? 4 : 2,
            pr: 2,
            gap: 2,
            justifyContent: (!open && !isMobile && !nested) ? "center" : "flex-start",
            cursor: "pointer",
            backgroundColor: pathname === item.path ? "rgba(0, 0, 0, 0.08)" : "inherit",
            minHeight: "48px",
            '&:hover': {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <ListItemIcon sx={{
            minWidth: "auto",
            marginRight: (isMobile || open) ? 2 : 0,
          }}>
            {item.icon}
          </ListItemIcon>
          {(isMobile || open) && (
            <ListItemText
              primary={item.title}
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            />
          )}
          {item.children && (isMobile || open) && (
            openItems[item.title] ?
              <ExpandLess sx={{ transition: 'transform 0.3s' }} /> :
              <ExpandMore sx={{ transition: 'transform 0.3s' }} />
          )}
        </ListItem>
        {item.children && (
          <Collapse
            in={openItems[item.title]}
            timeout="auto"
            unmountOnExit
            sx={{
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <List component="div" disablePadding>
              {renderNavigationItems(item.children, true)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={isMobile ? toggleMobileDrawer : toggleDrawer}
            sx={{ mr: 2, zIndex: 1301 }}
          >
            {isMobile ? (
              mobileOpen ? <Close /> : <MenuIcon />
            ) : (
              open ? <MenuOpen /> : <MenuIcon />
            )}
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              fontWeight: 'bold',
            }}
          >
            BD Lock Center Dashboard
          </Typography>

          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'flex' },
            justifyContent: "center",
          }}>
            <Box sx={{
              padding: .5,
              position: "relative",
              borderRadius: 1,
              bgcolor: "rgba(255,255,255,0.15)",
              '&:hover': { bgcolor: "rgba(255,255,255,0.25)" },
              width: "100%",
              maxWidth: "300px"
            }}>
              <Box sx={{
                position: "absolute",
                padding: .5,
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <SearchIcon />
              </Box>
              <InputBase sx={{ width: "100%", paddingLeft: 4, color: "inherit" }} placeholder="Search…" />
            </Box>
          </Box>
          <div className="flex items-center">
          <IconButton >
            <Badge badgeContent={4} color="error">
              <Notifications sx={{ color: "white" }} />
            </Badge>
          </IconButton>
          <IconButton onClick={handleProfileMenuOpen} color="inherit"><Avatar /></IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileMenuClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            borderRadius: 2,
            minWidth: 180,
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          },
        }}
      >
        <MenuItem onClick={handleProfileMenuClose}>
          <Person fontSize="small" sx={{ mr: 1 }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          <Settings fontSize="small" sx={{ mr: 1 }} /> Settings
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          <Help fontSize="small" sx={{ mr: 1 }} /> Help Center
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleProfileMenuClose}>
          <Logout fontSize="small" sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>

      {/* Sidebar Drawer for Desktop and Mobile */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : open}
        onClose={() => isMobile && setMobileOpen(false)}
        sx={{
          width: isMobile ? "100%" : (open ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH),
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: isMobile ? "100%" : (open ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH),
            transition: "width 0.3s ease-in-out",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar />
        <List sx={{ padding: '8px' }}>{renderNavigationItems(navigationItems)}</List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "64px" }}>{children}</Box>
    </Box>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CustomSidebar>{children}</CustomSidebar>
    </ThemeProvider>
  );
};

export default Layout;