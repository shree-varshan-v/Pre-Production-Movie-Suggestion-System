import * as React from 'react';
import {Button,
    CssBaseline,
    TextField,
    Paper,
    Box,
    Grid,
    Typography,  
    FormControl,
} from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResultScreen from './ResultScreen';
const theme = createTheme();
export default function Form() {
  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log({
      runtime: runtime,
        rating: rating,
        votes: votes,
        revenue: revenue,
        metascore: metascore,
    });
    await fetch("http://127.0.0.1:5000/evaluate",{
      method:"POST",
      headers:{
        "Content-Type":"application/json; charset=UTF-8"
      },
      body:JSON.stringify({
        runtime: runtime,
        rating: rating,
        votes: votes,
        revenue: revenue,
        metascore: metascore,
      })
    }).then(response=>response.json())
    .then(message=>{
      setPredictedgen(message.predictedgen)
      setPredicteddir(message.predicteddir)
      setPredictedac1(message.predictedac1)
      setPredictedac2(message.predictedac2)
      console.log(message)
    })
    setOpen(true);
  };
  const [runtime,setruntime]=React.useState("");
  const [rating,setrating]=React.useState("");
  const [predicteddir,setPredicteddir]=React.useState(null);
  const [predictedac1,setPredictedac1]=React.useState(null);
  const [predictedac2,setPredictedac2]=React.useState(null);
  const [predictedgen,setPredictedgen]=React.useState(null);
  const[votes,setvotes]=React.useState("")
  const[revenue,setrevenue]=React.useState("")
  const[metascore,setmetascore]=React.useState("")
  const [open, setOpen] = React.useState(false);
  return (<div>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h2" variant="h2">
              Movie Combination Suggestion System
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <FormControl fullWidth>
                  <TextField
                    margin="dense"
                    type="number"
                    required
                    id="runtime"
                    name="runtime"
                    label="Runtime (in mins)"
                    value={runtime}
                    onChange={(event)=>setruntime(event.target.value)}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    margin="dense"
                    type="number"
                    required
                    id="rating"
                    name="rating"
                    label="Rating"
                    value={rating}
                    onChange={(event)=>setrating(event.target.value)}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    margin="dense"
                    type="number"
                    required
                    id="votes"
                    name="votes"
                    label="Votes"
                    value={votes}
                    onChange={(event)=>setvotes(event.target.value)}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    margin="dense"
                    type="number"
                    required
                    id="revenue"
                    name="revenue"
                    label="Revenue"
                    value={revenue}
                    onChange={(event)=>setrevenue(event.target.value)}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    margin="dense"
                    type="number"
                    required
                    id="metascore"
                    name="metascore"
                    label="Metascore"
                    value={metascore}
                    onChange={(event)=>setmetascore(event.target.value)}
                  />
                </FormControl>
              
              <Button
                required
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "red" }}
              >
                Predict
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
    </ThemeProvider>
      <ResultScreen open={open} setOpen={setOpen} predictedgen={predictedgen} predicteddir={predicteddir} predictedac1={predictedac1} predictedac2={predictedac2} />
      </div>
  );
}