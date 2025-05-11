/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";
// import * as React from "react";
// import { extendTheme, ThemeProvider } from "@mui/material/styles";
// import {
//   AppProvider,
//   type Navigation,
//   type NavigationItem,
//   type NavigationSubheaderItem,
//   type NavigationDividerItem,
//   Router,
//   type Session,
// } from "@toolpad/core/AppProvider";

// import {
//   Add,
//   CalendarViewDay,
//   ContactPage,
//   Dashboard,
//   Info,
//   List,
//   NoteAlt,
//   Reviews,
//   ShoppingCart,
//   Photo,
//   Folder,
//   PhotoLibrary,
//   ExpandMore,
//   ChevronRight,
//   Search
// } from "@mui/icons-material";
// import { DashboardLayout, ThemeSwitcher } from "@toolpad/core";
// import { usePathname, useRouter } from "next/navigation";
// import { 
//   CssBaseline, 
//   useTheme,
//   Collapse,
//   List as MuiList,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText, 
//   Stack,
//   Tooltip,
//   IconButton,
//   TextField
// } from "@mui/material";

// // Custom type to extend NavigationItem with optional icon
// type ExtendedNavigationItem = NavigationItem & {
//   icon?: React.ReactNode;
//   title?: string;
//   children?: ExtendedNavigationItem[];
// };

// const NAVIGATION: ExtendedNavigationItem[] = [
//   {
//     kind: "header",
//     title: "Home",
//   },
//   {
//     segment: "",
//     title: "Dashboard",
//     icon: <Dashboard />,
//   },
//   {
//     kind: "divider",
//   },
//   {
//     kind: "header",
//     title: "Others",
//   },
//   {
//     segment: "super_admin/about",
//     title: "About",
//     icon: <Info />,
//     children: [
//       {
//         segment: "add",
//         title: "Add About",
//         icon: <Add />,
//       },
//       {
//         segment: "list",
//         title: "List About",
//         icon: <List />,
//       },
//     ],
//   },
//   {
//     segment: "super_admin/shop",
//     title: "Shop",
//     icon: <ShoppingCart />,
//     children: [
//       {
//         segment: "add",
//         title: "Add Shop",
//         icon: <Add />,
//       },
//       {
//         segment: "list",
//         title: "List Shop",
//         icon: <List />,
//       },
//     ],
//   },
//   {
//     segment: "super_admin/contact",
//     title: "Contact",
//     icon: <ContactPage />,
//     children: [
//       {
//         segment: "add",
//         title: "Add Contact",
//         icon: <Add />,
//       },
//       {
//         segment: "list",
//         title: "List Contact",
//         icon: <List />,
//       },
//     ],
//   },
//   {
//     segment: "super_admin/blog",
//     title: "Blog",
//     icon: <NoteAlt />,
//     children: [
//       {
//         segment: "add",
//         title: "Add Blog",
//         icon: <Add />,
//       },
//       {
//         segment: "list",
//         title: "List Blog",
//         icon: <List />,
//       },
//     ],
//   },
//   {
//     segment: "super_admin/topbar",
//     title: "Top Bar",
//     icon: <CalendarViewDay />,
//     children: [
//       // {
//       //   segment: "add",
//       //   title: "Add Top Bar",
//       //   icon: <Add />,
//       // },
//       {
//         segment: "list",
//         title: "List Top Bar",
//         icon: <List />,
//       },
//     ],
//   },
//   {
//     segment: "super_admin/review",
//     title: "Review",
//     icon: <Reviews />,
//     children: [
//       {
//         segment: "add",
//         title: "Add Review",
//         icon: <Add />,
//       },
//       {
//         segment: "list",
//         title: "List Review",
//         icon: <List />,
//       },
//     ],
//   },
//   {
//     segment: "super_admin/stock",
//     title: "Stock Image",
//     icon: <PhotoLibrary />,
//     children: [
//       {
//         segment: "allimg",
//         title: "All Image",
//         icon: <Photo />,
//       },
//       {
//         segment: "folder",
//         title: "Folder",
//         icon: <Folder />,
//       },
//     ],
//   },
// ];
// const isHeader = (item: ExtendedNavigationItem): item is NavigationSubheaderItem => 
//   item.kind === 'header';

// const isDivider = (item: ExtendedNavigationItem): item is NavigationDividerItem => 
//   item.kind === 'divider';

// const isNavigableItem = (item: ExtendedNavigationItem): item is ExtendedNavigationItem & { segment: string } => 
//   !isHeader(item) && !isDivider(item) && typeof (item as any).segment === 'string';

// const hasChildren = (item: ExtendedNavigationItem): item is ExtendedNavigationItem & { children: ExtendedNavigationItem[] } => 
//   Array.isArray((item as any).children);

// const CustomNavigationRenderer = ({ navigation }: { navigation: ExtendedNavigationItem[] }) => {
//   const [openSections, setOpenSections] = React.useState<Set<string>>(new Set());
//   const router = useRouter();

//   const handleSectionToggle = (sectionTitle: string | undefined) => {
//     if (!sectionTitle) return;

//     setOpenSections(prev => {
//       const newSections = new Set(prev);
//       if (newSections.has(sectionTitle)) {
//         newSections.delete(sectionTitle);
//       } else {
//         // Close other sections
//         newSections.clear();
//         newSections.add(sectionTitle);
//       }
//       return newSections;
//     });
//   };

//   const handleNavigation = (segment?: string) => {
//     if (segment) {
//       router.push(`/${segment}`);
//     }
//   };

//   const renderNavigationItems = (items: ExtendedNavigationItem[]) => {
//     return items.map((item, index) => {
//       // Handle header
//       if (isHeader(item)) {
//         return (
//           <ListItemText
//             key={`header-${index}`}
//             primary={item.title}
//             sx={{
//               fontWeight: 'bold',
//               paddingLeft: '16px',
//               marginTop: '8px'
//             }}
//           />
//         );
//       }

//       // Handle divider
//       if (isDivider(item)) {
//         return <hr key={`divider-${index}`} />;
//       }

//       // Handle navigable items
//       const itemTitle = isNavigableItem(item) ? item.title : '';
//       const isOpen = itemTitle ? openSections.has(itemTitle) : false;

//       return (
//         <React.Fragment key={isNavigableItem(item) ? item.segment : `item-${index}`}>
//           <ListItemButton
//             onClick={() => {
//               // If no children, navigate directly
//               if (!hasChildren(item)) {
//                 handleNavigation(isNavigableItem(item) ? item.segment : undefined);
//                 return;
//               }

//               // If has children, toggle section
//               handleSectionToggle(itemTitle);
//             }}
//           >
//             {isNavigableItem(item) && item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
//             <ListItemText primary={itemTitle} />
//             {hasChildren(item) ? (
//               isOpen ? <ExpandMore /> : <ChevronRight />
//             ) : null}
//           </ListItemButton>

//           {/* Render child items with exclusive collapse */}
//           {hasChildren(item) && (
//             <Collapse
//               in={isOpen}
//               timeout="auto"
//               unmountOnExit
//             >
//               <MuiList component="div" disablePadding>
//                 {item.children.map((child) => (
//                   <ListItemButton
//                     key={isNavigableItem(child) ? child.segment : `child-${Math.random()}`}
//                     sx={{ pl: 4 }}
//                     onClick={() => handleNavigation(isNavigableItem(child) ? child.segment : undefined)}
//                   >
//                     {isNavigableItem(child) && child.icon && <ListItemIcon>{child.icon}</ListItemIcon>}
//                     <ListItemText primary={isNavigableItem(child) ? child.title : ''} />
//                   </ListItemButton>
//                 ))}
//               </MuiList>
//             </Collapse>
//           )}
//         </React.Fragment>
//       );
//     });
//   };

//   return (
//     <MuiList>
//       {renderNavigationItems(navigation)}
//     </MuiList>
//   );
// };


// const demoTheme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         mode: "light",
//         background: {
//           default: "#727D73",
//         },
//       },
//     },
//     dark: {
//       palette: {
//         mode: "dark",
//         background: {
//           default: "#121212",
//         },
//       },
//     },
//   },
//   colorSchemeSelector: "class",
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
//   components: {
//     MuiDrawer: {
//       styleOverrides: {
//         paper: {
//           width: "180px",
//           height: "100vh",
//         },
//       },
//     },
//   },
// });

// function useDemoRouter(initialPath: string): Router {
//   const pathname = usePathname();
//   const router = useRouter();

//   const enhancedRouter = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path: string | URL) => router.push(String(path)),
//     };
//   }, [pathname, router]);

//   return enhancedRouter;
// }

// function ToolbarActionsSearch() {
//   return (
//     <Stack direction="row">
//       <Tooltip title="Search" enterDelay={1000}>
//         <div>
//           <IconButton
//             type="button"
//             aria-label="search"
//             sx={{
//               display: { xs: 'inline', md: 'none' },
//             }}
//           >
//             <Search />
//           </IconButton>
//         </div>
//       </Tooltip>
//       <TextField
//         label="Search"
//         variant="outlined"
//         size="small"
//         slotProps={{
//           input: {
//             endAdornment: (
//               <IconButton type="button" aria-label="search" size="small">
//                 <Search />
//               </IconButton>
//             ),
//             sx: { pr: 0.5 },
//           },
//         }}
//         sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
//       />
//       <ThemeSwitcher />
//     </Stack>
//   );
// }

// const LayoutContent = ({ children }: { children: React.ReactNode }) => {
//   const theme = useTheme(); // Access the theme

//   return (
//     <DashboardLayout
//       sx={{
//         background:
//           theme.palette.mode === "dark"
//             ? theme.palette.background.default
//             : theme.palette.background.paper,
//       }}
//       slots={{
//         toolbarActions: ToolbarActionsSearch,
//       }}
//     >
//       <div className="p-4">{children}</div>
//     </DashboardLayout>
//   );
// };

// export default function Layout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   const router = useDemoRouter("/super_admin/dashboard");

//   const [session, setSession] = React.useState<Session | null>({
//     user: {
//       name: "Ibrahim Shikder",
//       email: "ibrahimshikdar@outlook.com",
//       image: "https://avatars.githubusercontent.com/u/19550456",
//     },
//   });

//   const authentication = React.useMemo(() => {
//     return {
//       signIn: () => {
//         setSession({
//           user: {
//             name: "Ibrahim Shikder",
//             email: "ibrahimshikdar@outlook.com",
//             image: "https://avatars.githubusercontent.com/u/19550456",
//           },
//         });
//       },
//       signOut: () => {
//         setSession(null);
//       },
//     };
//   }, []);

//   return (
//     <ThemeProvider theme={demoTheme}>
//       <CssBaseline />
//       <AppProvider
//         session={session}
//         authentication={authentication}
//         navigation={NAVIGATION}
//         router={router}
//         theme={demoTheme}
//         branding={{
//           logo: "",
//           title: "Garage Dashboard",
//           homeUrl: "/",
//         }}
//         slots={{
//           navigationRenderer: CustomNavigationRenderer
//         }}
//       >
//         <LayoutContent>
//           {children}
//         </LayoutContent>
//       </AppProvider>
//     </ThemeProvider>
//   );
// }






// "use client";

// import React, { useState } from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   Box,
//   AppBar,
//   Toolbar,
//   Collapse,
//   Avatar,
//   InputBase,
//   Menu,
//   MenuItem,
//   Divider,
//   useMediaQuery,
// } from "@mui/material";
// import {
//   Menu as MenuIcon,
//   ChevronRight,
//   Dashboard,
//   Info,
//   ShoppingCart,
//   ContactPage,
//   ExpandMore,
//   Search as SearchIcon,
//   Person,
//   Settings,
//   Logout,
//   MenuOpen,
// } from "@mui/icons-material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { useRouter, usePathname } from "next/navigation";

// const navigationItems = [
//   { title: "Dashboard", icon: <Dashboard />, path: "/" },
//   {
//     title: "About",
//     icon: <Info />,
//     children: [
//       { title: "Add About", path: "/super_admin/about/add" },
//       { title: "List About", path: "/super_admin/about/list" },
//     ],
//   },
//   {
//     title: "Review",
//     icon: <ShoppingCart />,
//     children: [
//       { title: "Add Shop", path: "/super_admin/review/add" },
//       { title: "List Shop", path: "/super_admin/review/list" },
//     ],
//   },
//   {
//     title: "Stock",
//     icon: <ContactPage />,
//     children: [
//       { title: "All Img", path: "/super_admin/stock/allimg" },
//       { title: "Folder", path: "/super_admin/stock/folder" },
//     ],
//   },
// ];

// const DRAWER_WIDTH = 240;
// const COLLAPSED_DRAWER_WIDTH = 72;

// const CustomSidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [open, setOpen] = useState(true);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const theme = createTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const toggleDrawer = () => setOpen(!open);
//   const toggleMobileDrawer = () => setMobileOpen(!mobileOpen);
//   const toggleNestedList = (title: string) => setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }));

//   const handleNavigation = (path?: string, title?: string) => {
//     if (path) {
//       router.push(path);
//       if (isMobile) setMobileOpen(false);
//     } else if (title) {
//       toggleNestedList(title);
//     }
//   };

//   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
//   const handleProfileMenuClose = () => setAnchorEl(null);

//   const renderNavigationItems = (items:any, nested = false) =>
//     items.map((item:any) => (
//       <React.Fragment key={item.title}>
//         <ListItem
//           onClick={() => handleNavigation(item.path, item.children ? item.title : undefined)}
//           sx={{
//             pl: nested ? 4 : 2,
//             justifyContent: !open && !nested ? "center" : "flex-start",
//             cursor: "pointer",
//             backgroundColor: pathname === item.path ? "rgba(0, 0, 0, 0.08)" : "inherit",
//           }}
//         >
//           <ListItemIcon>{item.icon}</ListItemIcon>
//           {open && <ListItemText primary={item.title} />}
//           {item.children && open && (openItems[item.title] ? <ExpandMore /> : <ChevronRight />)}
//         </ListItem>
//         {item.children && (
//           <Collapse in={openItems[item.title]} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>{renderNavigationItems(item.children, true)}</List>
//           </Collapse>
//         )}
//       </React.Fragment>
//     ));

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>

//         <Toolbar>
//           <IconButton
//             color="inherit"
//             onClick={isMobile ? toggleMobileDrawer : toggleDrawer}
//             sx={{ mr: 2, zIndex: 1301 }} // Ensures it appears above the sidebar
//           >
//             {isMobile ? <MenuIcon /> : open ? <MenuOpen /> : <MenuIcon />}
//           </IconButton>

//           <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
//             <Box sx={{ position: "relative", borderRadius: 1, bgcolor: "rgba(255,255,255,0.15)", '&:hover': { bgcolor: "rgba(255,255,255,0.25)" }, width: "100%", maxWidth: "300px" }}>
//               <Box sx={{ position: "absolute", padding: 1, pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                 <SearchIcon />
//               </Box>
//               <InputBase sx={{ width: "100%", paddingLeft: 4, color: "inherit" }} placeholder="Search…" />
//             </Box>
//           </Box>
//           <IconButton onClick={handleProfileMenuOpen} color="inherit"><Avatar /></IconButton>
//         </Toolbar>
//       </AppBar>

//       <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleProfileMenuClose}>
//         <MenuItem onClick={handleProfileMenuClose}><Person /> Profile</MenuItem>
//         <MenuItem onClick={handleProfileMenuClose}><Settings /> Settings</MenuItem>
//         <Divider />
//         <MenuItem onClick={handleProfileMenuClose}><Logout /> Logout</MenuItem>
//       </Menu>

//       <Drawer
//         variant="permanent"
//         sx={{
//           width: open ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: open ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH,
//             transition: "width 0.3s",
//             overflowX: "hidden",
//           },
//         }}
//         open={open}
//       >

//         <Toolbar />
//         <List>{renderNavigationItems(navigationItems)}</List>
//       </Drawer>

//       <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "64px" }}>{children}</Box>
//     </Box>
//   );
// };

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const theme = createTheme();
//   return (
//     <ThemeProvider theme={theme}>
//       <CustomSidebar>{children}</CustomSidebar>
//     </ThemeProvider>
//   );
// };

// export default Layout;



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
  CalendarViewDay,
  Reviews,
  PhotoLibrary,
  Photo,
  Folder,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useRouter, usePathname } from "next/navigation";

const navigationItems = [
  { title: "Dashboard", icon: <Dashboard />, path: "/" },
  {
    title: "About",
    icon: <Info />,
    children: [
      { title: "Add About", path: "/super_admin/about/add" },
      { title: "List About", path: "/super_admin/about/list" },
    ],
  },
  {
    segment: "super_admin/shop",
    title: "Shop",
    icon: <ShoppingCart />,
    children: [
      {
        segment: "add",
        title: "Add Shop",
        icon: <Add />,
      },
      {
        segment: "list",
        title: "List Shop",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "super_admin/contact",
    title: "Contact",
    icon: <ContactPage />,
    children: [
      {
        segment: "add",
        title: "Add Contact",
        icon: <Add />,
      },
      {
        segment: "list",
        title: "List Contact",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "super_admin/blog",
    title: "Blog",
    icon: <NoteAlt />,
    children: [
      {
        segment: "add",
        title: "Add Blog",
        icon: <Add />,
      },
      {
        segment: "list",
        title: "List Blog",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "super_admin/topbar",
    title: "Top Bar",
    icon: <CalendarViewDay />,
    children: [
      // {
      //   segment: "add",
      //   title: "Add Top Bar",
      //   icon: <Add />,
      // },
      {
        segment: "list",
        title: "List Top Bar",
        icon: <ListIcon />,
      },
    ],
  },
  {
    segment: "super_admin/review",
    title: "Review",
    icon: <Reviews />,
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
    icon: <PhotoLibrary />,
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
];

const DRAWER_WIDTH = 240;
const COLLAPSED_DRAWER_WIDTH = 75;

const CustomSidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

  // const toggleNestedList = (title: string) => setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }));

  const handleNavigation = (path?: string, title?: string) => {
    if (path) {
      router.push(path);
      if (isMobile) setMobileOpen(false);
    } else if (title) {
      toggleNestedList(title);
    }
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);

  const renderNavigationItems = (items: any, nested = false) =>
    items.map((item: any) => (
      <React.Fragment key={item.title}>
        <ListItem
          onClick={() => handleNavigation(item.path, item.children ? item.title : undefined)}
          sx={{
            pl: nested ? (isMobile || open ? 4 : 2) : (isMobile || open ? 2 : 1),
            pr: isMobile || open ? 2 : 0,
            gap: isMobile || open ? 2 : 0,
            justifyContent: (!open && !isMobile && !nested) ? "center" : "flex-start",
            cursor: "pointer",
            backgroundColor: pathname === item.path ? "rgba(0, 0, 0, 0.08)" : "inherit",
          }}
        >
          <ListItemIcon sx={{
            minWidth: (isMobile || open) ? "auto" : 40,
          }}>
            {item.icon}
          </ListItemIcon>
          {(isMobile || open) && <ListItemText primary={item.title} />}
          {item.children && (isMobile || open) && (openItems[item.title] ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {item.children && (
          <Collapse in={openItems[item.title]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>{renderNavigationItems(item.children, true)}</List>
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

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Box sx={{ padding: .5, position: "relative", borderRadius: 1, bgcolor: "rgba(255,255,255,0.15)", '&:hover': { bgcolor: "rgba(255,255,255,0.25)" }, width: "100%", maxWidth: "300px" }}>
              <Box sx={{ position: "absolute", padding: .5, pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <SearchIcon />
              </Box>
              <InputBase sx={{ width: "100%", paddingLeft: 4, color: "inherit" }} placeholder="Search…" />
            </Box>
          </Box>
          <IconButton onClick={handleProfileMenuOpen} color="inherit"><Avatar /></IconButton>
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleProfileMenuClose}>
        <MenuItem onClick={handleProfileMenuClose}><Person /> Profile</MenuItem>
        <MenuItem onClick={handleProfileMenuClose}><Settings /> Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleProfileMenuClose}><Logout /> Logout</MenuItem>
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
            transition: "width 0.3s",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar />
        <List>{renderNavigationItems(navigationItems)}</List>
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