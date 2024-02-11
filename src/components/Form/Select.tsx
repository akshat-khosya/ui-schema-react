import React, { useContext, useEffect, useState } from 'react'
import { UIObject } from '../../utils/jsonValidation'
import { Box, Container, Grid, MenuItem, Select, SelectChangeEvent, Tooltip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import GlobalContext from '../../context/GlobalContext';


interface PROPS {
    fields: UIObject
}

function SelectField(props: PROPS) {
    const { formData, updateFormData } = useContext(GlobalContext);
    const [value, setValue] = useState(typeof props.fields.validate.defaultValue === 'string' ? props.fields.validate.defaultValue : "");
    useEffect(() => {
        dataInitiator();
    }, []);

    const dataInitiator = () => {
        updateFormData(props.fields.jsonKey, props.fields.validate.defaultValue);
    };
    const onChange = (e: SelectChangeEvent<string>) => {
        setValue(e.target.value)
        updateFormData(props.fields.jsonKey, e.target.value);
    }

    return (
        <Container maxWidth="md" >
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                    <Box display="flex" alignItems="center">
                        <Typography>
                            {props.fields.label}
                        </Typography>
                        {props.fields.validate.required && (
                            <Typography style={{ color: 'red' }}> * </Typography>
                        )}
                        {props.fields.description && (
                            <Tooltip title={props.fields.description} >
                                <InfoIcon style={{ fontSize: '20px', color: 'blue' }} />
                            </Tooltip>
                        )}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Select
                        disabled={props.fields.validate.immutable}
                        required={props.fields.validate.required}
                        variant="outlined"
                        fullWidth
                        id="demo-simple-select"
                        value={value}
                        onChange={onChange}
                    >
                        {
                            props.fields.validate.options && props.fields.validate.options.map((data, index) => {
                                return (
                                    <MenuItem key={`select-${index}`} value={data.value}>{data.value}</MenuItem>
                                )
                            })
                        }
                    </Select>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SelectField