import React from 'react'
import { Dialog,Typography,Grid } from '@mui/material';
function ResultScreen({open,setOpen,predictedgen,predicteddir,predictedac1,predictedac2}){
    
    
    return(
        <Dialog open={open} onClose={()=>setOpen(false)}>
            <div style={{padding:"5%"}}>
            <Grid container spacing={2} sx={{marginBottom:"4%"}} >
                <Grid item xs={8}><Typography component="h1" variant="h5" >Predicted Genre</Typography></Grid>
                <Grid item xs={4}><Typography component="h1" variant="h5" >{predictedgen}</Typography></Grid>
                <Grid item xs={8}><Typography component="h1" variant="h5" >Predicted Director</Typography></Grid>
                <Grid item xs={4}><Typography component="h1" variant="h5" >{predicteddir}</Typography></Grid>
                <Grid item xs={8}><Typography component="h1" variant="h5" >Predicted Actor 1</Typography></Grid>
                <Grid item xs={4}><Typography component="h1" variant="h5" >{predictedac1}</Typography></Grid>
                <Grid item xs={8}><Typography component="h1" variant="h5" >Predicted Actor 2</Typography></Grid>
                <Grid item xs={4}><Typography component="h1" variant="h5" >{predictedac2}</Typography></Grid>
            </Grid>
            
            </div>
        </Dialog>
    )
}
export default ResultScreen
