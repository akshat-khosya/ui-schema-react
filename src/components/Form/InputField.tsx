import { Container, Grid, TextField, Tooltip, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { UIObject } from '../../utils/jsonValidation';
import InfoIcon from '@mui/icons-material/Info';

interface PROPS {
    fields: UIObject
}

function InputField(props: PROPS) {
    const [value, setValue] = useState(props.fields.validate.defaultValue);

    return (
        <Container maxWidth="sm">
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                    <Box display="flex" alignItems="center">
                        <Typography>
                            {props.fields.label}
                        </Typography>
                        {props.fields.validate.required && (
                            <Typography style={{ color: 'red' }}>*</Typography>
                        )}
                        {props.fields.description && (
                            <Tooltip title={props.fields.description} >
                                <InfoIcon />
                            </Tooltip>
                        )}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <TextField onChange={(e) => setValue(e.target.value)} value={value} disabled={props.fields.validate.immutable} required={props.fields.validate.required} variant="outlined" fullWidth />
                </Grid>
            </Grid>
        </Container>
    );
}

export default InputField;
