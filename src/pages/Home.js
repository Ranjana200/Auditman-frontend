import React from 'react'
import Layout from '../components/Layout/Layout'
import { Typography } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsIcon from '@mui/icons-material/Settings';
const Home = () => {
  return (
    <Layout>
       < div className='container' >
        <form>
            <h1>Create company</h1>
            <h4>Basic Details    Registration Details</h4>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='field'>
                    <label>Company Name</label>
                    <input type="text" name='Company name' placeholder='Ex.Effinity Technologies'/>
                </div>
                <div className='field'>
                    <label>Type of Company</label>
                    <input type="text" name='Type of Company'placeholder='Ex.Private Limited'/>
                </div>
                <div className='field'>
                    <label>Date of Incorporation</label>
                    <input type="date" name="Date of Incorporation" placeholder="Select date"/>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Ex.Effinity Technologies"/>
                </div>
                <div className='field'>
                    <label>Website</label>
                    <input type="url" name="Website" placeholder="Ex.Effinity Technologies"/>
                </div>
                <button className='back'>Back</button>
                <button className='next'>Next</button>
            </div>
        </form>
       </div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <Typography>
        <button className='profile'>Create Company</button>
        <PersonOutlineIcon/>
       </Typography>
       <Typography my={4} >
        <SettingsIcon/>
       </Typography>
        </Layout>
  )
}

export default Home