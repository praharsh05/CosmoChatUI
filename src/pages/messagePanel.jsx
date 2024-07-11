import { Container, Grid, Stack, Typography } from '@mui/material';

function MessagePanel() {
  return (
    <Container>
      <Stack spacing={6} sx={{display: 'flex', flexDirection: 'column'}}>
        <Grid sx={{border: '2px solid black'}}>
          <Typography sx={{ flexGrow: 1, textAlign: "center"}}>Message 1</Typography>
        </Grid>
        <Grid sx={{border: '2px solid black'}}>
          <Typography sx={{ flexGrow: 1, textAlign: "center"}}>Message 2</Typography>
        </Grid>
        <Grid sx={{border: '2px solid black'}}>
          <Typography sx={{ flexGrow: 1, textAlign: "center"}}>Message 3</Typography>
        </Grid>
      </Stack>
    </Container>
  );
}

export default MessagePanel;