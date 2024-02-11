import React from 'react';
import { UIObject } from '../../utils/jsonValidation';
import { Box, Container, Grid, Tooltip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface GroupProps {
    fields: UIObject;
    renderField: (field: UIObject) => JSX.Element | undefined;
}

const Group: React.FC<GroupProps> = ({ fields, renderField }) => {

    return (
        <Container maxWidth="md">
            <Box>
                <Typography>
                    {fields.label}
                    {fields.validate.required && (
                        <span style={{ color: 'red', marginLeft: '4px' }}> *</span>
                    )}
                    {fields.description && (
                        <Tooltip title={fields.description} >
                            <InfoIcon style={{ fontSize: '20px', color: 'blue' }} />
                        </Tooltip>
                    )}
                </Typography>
            </Box>
            <Grid container direction="column" spacing={2}>
                {fields.subParameters && fields.subParameters.map((field) => (
                    <Grid item key={field.jsonKey}>
                        {renderField(field)}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Group;
