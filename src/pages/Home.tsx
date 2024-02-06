import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import JsonEditor from '../components/JsonEditor';
import { Typography } from '@mui/material';
import JsonForm from '../components/JsonForm';

function Home() {

    return (
        <Grid container spacing={2} style={{ height: '100vh' }}>
            <Grid item xs={6}>
                <Paper style={{
                    padding: '16px',
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.87)',
                    height: '100%'
                }}>
                    <Typography>JSON Code Editor</Typography>
                    <JsonEditor />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={{
                    padding: '16px',
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.87)',
                    height: '100%',
                    overflowY: 'auto',
                }}>
                    <Typography>JSON Rendering Form</Typography>

                    <JsonForm />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Home;
