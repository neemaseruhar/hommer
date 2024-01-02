import * as React from 'react';
import { useItem } from '../context/ItemContext';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import TextField from '@mui/material/TextField';



export const Header = () => {
 

  const {addEditIcon, clearAll,searchTitle, search} = useItem();
  
  return (
    
    <Box sx={{ flexGrow: 1   }}>
        <AppBar position="static">
        
        <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                 Hommer
            </Typography>
            <Box sx={{width: 250, maxWidth: '50%'}}>
             <TextField id="standard-basic" label="Search App Name" variant="standard" value={searchTitle || ""} onChange={(e) => search(e.target.value) }  />
             </Box>
          {/* <input value={searchTitle || ""} onChange={(e) => search(e.target.value) } /> */}
          <button onClick={() => addEditIcon()}><BorderColorRoundedIcon  /></button>
          {/* <button onClick={() => clearAll()}> Clear All</button> */}
        </Toolbar>
    
        </AppBar>
    </Box>
 
  )
}



