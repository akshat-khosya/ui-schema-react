import React, { useContext, useState } from 'react';
import { Button, Container, Dialog, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import GlobalContext from '../context/GlobalContext';
import { UIObject } from '../utils/jsonValidation';
import InputField from './Form/InputField';
import SwitchField from './Form/SwitchField';
import SelectField from './Form/Select';
import RadioField from './Form/RadioField';
import Group from './Form/GroupField';

const DynamicForm = () => {
    const { uiJson, formData } = useContext(GlobalContext);
    const [open, setOpen] = useState(false);

    const handleSubmit = () => {
        console.log(formData);
        setOpen(true);
    };

    const renderField = (field: UIObject) => {
        switch (field.uiType) {
            case 'Input':
                return <InputField key={field.jsonKey} fields={field} />;
            case 'Radio':
                return <RadioField key={field.jsonKey} fields={field} />;
            case 'Select':
                return <SelectField key={field.jsonKey} fields={field} />;
            case 'Switch':
                return <SwitchField key={field.jsonKey} fields={field} />;
            case 'Group':
                return <Group key={field.jsonKey} fields={field} renderField={renderField} />;

        }
    };

    const renderData = (data: any) => {
        return (
            <>
                {Object.entries(data).map(([key, value]) => (
                    <Typography key={`rendered--${key}`}>
                        {typeof value === 'object' ? (
                            renderData(value)
                        ) : (
                            <>
                                {key}: {value}
                            </>
                        )}
                    </Typography>
                ))}
            </>
        );
    };

    return (
        <Container maxWidth="md" style={{ paddingTop: '20px' }}>
            <Grid container spacing={2} direction="column">
                {uiJson.map((field) => (
                    <Grid item key={field.jsonKey}>
                        {renderField(field)}
                    </Grid>
                ))}
                <Grid item>
                    {uiJson && (
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    )}
                </Grid>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Form Data Details</DialogTitle>
                    <DialogContent>{renderData(formData)}</DialogContent>
                </Dialog>
            </Grid>
        </Container>
    );
};

export default DynamicForm;
