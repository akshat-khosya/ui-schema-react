import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import JsonEditor from '../components/JsonEditor';

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
                    {/* JSON rendering form */}
                    JSON Rendering Form
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Home;