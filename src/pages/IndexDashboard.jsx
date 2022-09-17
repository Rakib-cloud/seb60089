import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { AppBar, Collapse, IconButton, ListItemText, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';
import * as React from 'react';
import { AiOutlineProject, AiOutlineSetting } from 'react-icons/ai';
import { HiMenuAlt2 } from 'react-icons/hi';
import { NavLink, Outlet } from 'react-router-dom';

const drawerWidth = 240;

function IndexDashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const handleClick = () => {
        setOpen(!open);
    };

    const menus = [

        { name: 'Courses', icon: <AiOutlineProject />, to: '/courses' },
        // { name: 'Skills', icon: <AiOutlineBarChart />, to: '/skills' },

    ];

    const submenu = [
        // { name: 'Info', icon: <AiOutlineInfo />, to: '/info' },
        // { name: 'About', icon: <AiOutlineUser />, to: '/about' },
    ];

    const drawer = (

        <div>
            <NavLink to='/allprojects'>

                <div className='my-5'>

                    <div className="flex flex-col items-center gap-y-3">
                        {/* <img width="70px" src={brand} alt="brand" /> */}
                        <h1 className="text-2xl lg:text-3xl font-bold">Autism Care</h1>
                    </div>

                </div>

            </NavLink>

            <List>

                {
                    menus?.map(menu => {

                        const common = 'flex items-center gap-x-3 py-2 px-5 w-full hover:bg-gray-100 hover:rounded-lg';

                        return (

                            <div className='flex items-center gap-x-4 px-3'>
                                <NavLink NavLink key={menu.to} to={menu.to} className={({ isActive }) => isActive ? common + 'border border-r-4  border-blue-600 rounded-l-lg text-blue-600 bg-[#e8eef7] w-full' : common} >
                                    <div className='text-2xl'>{menu?.icon}</div>
                                    <ListItemText>
                                        <h1 className='font-bold'>{menu?.name}</h1>
                                    </ListItemText>
                                </NavLink>

                            </div>

                        );
                    })
                }

                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >

                    <ListItem button onClick={handleClick}>
                        <div className='flex items-center gap-x-3 ml-4 mr-5'>
                            <div className='text-2xl'><AiOutlineSetting /></div>
                            <ListItemText>
                                <h1 className='font-bold'>Settings</h1>
                            </ListItemText>
                        </div>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={open} timeout="auto" unmountOnExit>

                        {
                            submenu?.map(menu => {

                                const common = 'flex items-center gap-x-3 py-2 ml-5 px-5 w-full hover:bg-gray-100 hover:rounded-lg';

                                return (
                                    <div className='flex items-center gap-x-4 px-3'>
                                        <NavLink NavLink key={menu.to} to={menu.to} className={({ isActive }) => isActive ? common + 'border border-r-4  border-blue-600 rounded-l-lg text-blue-600 bg-[#e8eef7] w-full' : common} >
                                            <div className='text-2xl'>{menu?.icon}</div>
                                            <ListItemText>
                                                <h1 className='font-bold'>{menu?.name}</h1>
                                            </ListItemText>
                                        </NavLink>
                                    </div>
                                );
                            })
                        }

                    </Collapse>

                </List>

            </List>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>

                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        backgroundColor: '#fff',
                        boxShadow: '0px 8px 10px #ddd',
                    }}
                >

                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <HiMenuAlt2 className='text-black text-3xl' />
                        </IconButton>
                        <h1 className='text-xl text-gray-600 font-medium'>Autism Care</h1>
                    </Toolbar>
                </AppBar>

            </Box>


            <Box sx={{ display: 'flex', marginBottom: '10px' }}>

                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"


                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                        }}

                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}

                    </Drawer>

                </Box>

                <div className='mt-24 w-full p-2 lg:w-10/12 lg:p-0 mx-auto'>
                    <Outlet />
                </div>

            </Box>
        </>
    );
}

IndexDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default IndexDashboard;
