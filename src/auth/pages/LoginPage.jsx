
import {  Button, Grid,  TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";





export const LoginPage = () => {


  return (
    <AuthLayout title="Login">
      <form 
            className="animate__animated animate__fadeIn animate__faster">
            <Grid container>
                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Correo" 
                    type="email" 
                    placeholder="correo@google.com"
                    fullWidth 
                    name="email"
                  />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}>
                  <TextField 
                    label="Contraseña" 
                    type="password" 
                    placeholder="Contraseña"
                    fullWidth
                    name="password"
                  />
                </Grid>

                <Grid 
                  container
                  sx={{ mt: 1 }}
                >
                <Grid 
                      item 
                      xs={ 12 } 
                >
                      
                    </Grid>
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={ 12 } sm={ 6 }>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        fullWidth
                      >
                        Login
                      </Button>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 }>
                      <Button 
                        variant="contained" 
                        fullWidth
                      >
                        <Google />
                          <Typography sx={{ ml: 1 }}>Google</Typography>
                      </Button>
                    </Grid>
                </Grid>
                 
                <Grid container direction="row" justifyContent="end">
                    Crear una cuenta
                  

                </Grid>

            </Grid>


          </form>
    </AuthLayout>

          


    
  )
}
