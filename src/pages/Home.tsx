import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import JsonEditor from '../components/JsonEditor';
import { Typography } from '@mui/material';
import JsonForm from '../components/JsonForm';
import DynamicForm from '../components/DynamicForm';

function Home() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
                <Paper style={{
                    padding: '16px',
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.87)',
                    height: '100%',
                    overflowY: 'auto'
                }}>
                    <Typography>JSON Rendering Form</Typography>
                    <DynamicForm />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Home;
