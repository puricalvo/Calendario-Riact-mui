import { Grid, List, ListItem, ListItemText } from "@mui/material";



export const ListServicios = () => {

  const details = [
    { label: "SAL.COCHE", data: "N" },
    { label: "H.INICIO", data: "14:30" },
    { label: "H.FINAL", data: "23:55" },
    { label: "ENT.COCHE", data: "N" },
    { label: "AUTOBUS", data: "106" },
    { label: "MATRICULA", data: "7589ZFG" },
    { label: "TIPO SERVICIO", data: "P" },
    { label: "CODIGO", data: "L.P20T.102" },
    { label: "L.INICIO", data: "PLAZA DE ARMAS" },
    { label: "L.FINAL", data: "ESTACION INTERNACIONAL" },
    { label: "Observaciones", data: "La llegada tiene que ser puntual" }
  ];

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <List  sx={{ width: "100%", height:" 100%" }}>
        <ListItem divider={false}  >
          <Grid container direction="row" justifyContent="space-between"  >
            {details.map((item, index) => (
              <Grid item key={index} sx={{ minWidth: "120px", minHeight:"100px", textAlign: "center",  }}>
                <ListItemText  primary={item.label}  />
                <ListItemText  primary={item.data}  />
              </Grid>
            ))}
          </Grid>
        </ListItem>
      </List>
    </Grid>
  );
};
