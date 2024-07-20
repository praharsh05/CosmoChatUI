import { Container, Grid, Stack, Typography } from '@mui/material';

function MessagePanel() {
  return (
    <Container style={{paddingTop: "20px"}}>
      <Stack spacing={6} sx={{display: "flex", flexDirection: "column"}}>
        <Grid sx={{border: "2px solid #007bff", borderRadius: "5px"}}>
          <Typography sx={{ flexGrow: 1, textAlign: "center", color: "#007bff"}}>Thread 1</Typography>
        </Grid>
        <Grid sx={{border: "2px solid #007bff", borderRadius: "5px"}}>
          <Typography sx={{ flexGrow: 1, textAlign: "center", color: "#007bff"}}>Thread 2</Typography>
        </Grid>
        <Grid sx={{border: "2px solid #007bff", borderRadius: "5px"}}>
          <Typography sx={{ flexGrow: 1, textAlign: "center", color: "#007bff"}}>Thread 3</Typography>
        </Grid>
      </Stack>
    </Container>
  );
}

export default MessagePanel;