import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';



const Header = () => {
  return (
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:'black'}}>
        <Toolbar>
        <Typography >
          <div className='upp'>
            <form>
              <label>Search for Companies</label>
              <input type='text' name='Search for Companies'  placeholder='Ex.Effinity Technologies'/>
            </form>
          </div>
          
          <HomeIcon/>
          
        </Typography>
        <Box>
      
        </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header