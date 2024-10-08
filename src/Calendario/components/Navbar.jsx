import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Button, ButtonGroup,  Divider,  Grid,  IconButton, Link, Typography } from '@mui/material';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { useAuthStore } from '../../hooks/useAuthStore';



export const Navbar = () => {

  const { startLogout, user } = useAuthStore();

    
  return (
     <>
            
        <Grid container 
          direction='row' 
          justifyContent='space-around' 
          alignItems='center'
          padding='2'
          sx={{
            display:'flex',
            flexwrap: 'wrap',
          }} 
        >
          

                <Grid size={{ xs:12, md: 2,  }} sx={{ flexGrow: 'auto',  }} >
                  
                    <IconButton size='large'>
                    
                      <AirportShuttleIcon color='error' sx={{fontSize: '3rem',  }}/>   
                    
                    </IconButton>
                </Grid>

                <Grid size={{ xs: 12, md: 4,  }} sx={{ flexGrow: 'auto', display: { xs: "none", md: "inline-flex" } }} >
                  <Typography variant='h2'  component='div' sx={{fontFamily:'serif', color:'GrayText' }}>Bienvenido: 
                    <Typography variant='h4' component='span' sx={{ color:'black'}}>{ user.name }</Typography>
                  <Typography variant='h5'component='p' noWrap color='error'>al canal de comunicaciones Moventa</Typography>
                  </Typography>
                  <Divider/>
                </Grid>
                
                <Grid size={{ xs: 12, md: 6,}} sx={{ flexGrow: 'auto',  }} > 
                    <Button 
                      variant="text" 
                      color="error" 
                      sx={{  mr: 0, ml: '2px'}}>
                        <HomeIcon sx={{fontSize: '2rem', display: { xs: "none", md: "inline-flex" }}}/>
                      
                    </Button>
                    <Button variant="text"  color="error"sx={{ mr: 0, ml: '-2px', mt: 1}}><SearchIcon sx={{fontSize: '2rem', display: { xs: "none", md: "inline-flex" }}} /></Button>
                    <Button 
                      variant="text" 
                      color="error"
                      onClick={ startLogout } 
                      sx={{ fontSize: '1rem', mr: 0, ml: '-2px'}}>
                        Cerrar sesión
                      
                    </Button>
                <ButtonGroup  size="large" aria-label="Large button group" >
                    <Button variant="text" color="error" sx={{fontSize: '1rem'}}>ES</Button>
                    <Button variant="text"  sx={{fontSize: '1rem', color: 'GrayText'}}>CA</Button>
                    <Button variant="text"  sx={{fontSize: '1rem', color: 'GrayText'}}>EN</Button>
                    <Button variant="text"  sx={{fontSize: '1rem', color: 'GrayText'}}>FR</Button>
                </ButtonGroup>
                    <Button 
                      variant="text" 
                      color="error">
                        <Link component={ RouterLink } color='inherit' to="/calendar">
                        <Avatar alt="PC" src="" sx={{ width: 56, height: 56 , backgroundColor: 'error.main'}}/>
                        </Link>
                    </Button>
                
                  </Grid>    
        </Grid>
    </>
  )
}




