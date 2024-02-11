import React, { useContext, useState } from 'react';
import InputField from './Form/InputField';
import GlobalContext from '../context/GlobalContext';
import SelectField from './Form/Select';
import { Button, Dialog, DialogContent, DialogTitle, Typography, FormGroup } from '@mui/material';
import SwitchField from './Form/SwitchField';
import RadioField from './Form/RadioField';

function JsonForm() {
    const { uiJson, formData } = useContext(GlobalContext);
    const [open, setOpen] = useState(false);
    const handleSubmit = () => {
        console.log(formData)
        setOpen(true);
    }
    const renderData = (data: any) => {
        return (
            <>
                {Object.entries(data).map(([key, value]) => (
                    <Typography key={`rended--${key}`}>
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
        <>
            <FormGroup>
                {
                    uiJson.map((data, index) => {
                        return (
                            <div key={`editor-${index}`} style={{ marginBottom: '10px' }}> {/* Add margin-bottom for spacing */}
                                {
                                    data.uiType === 'Input' && <div style={{ border: '1px solid black', padding: '16px', borderRadius: '8px' }}><InputField fields={data} /> </div>
                                }
                                {
                                    data.uiType === 'Select' && <div style={{ border: '1px solid black', padding: '16px', borderRadius: '8px' }}> <SelectField fields={data} /> </div>
                                }
                                {
                                    data.uiType === 'Switch' && <div style={{ border: '1px solid black', padding: '16px', borderRadius: '8px' }}> <SwitchField fields={data} /> </div>
                                }
                                {
                                    data.uiType === 'Radio' && <div style={{ border: '1px solid black', padding: '16px', borderRadius: '8px' }}> <RadioField fields={data} /> </div>
                                }
                            </div>
                        );
                    })
                }
                {
                    uiJson && <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                }
                <Dialog open={open} onClose={() => { setOpen(false) }}>
                    <DialogTitle>Form Data Details</DialogTitle>
                    <DialogContent>
                        {renderData(formData)}
                    </DialogContent>
                </Dialog>
            </FormGroup>
        </>
    );
}

export default JsonForm;
