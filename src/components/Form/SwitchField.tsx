import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { UIObject } from '../../utils/jsonValidation';
import GlobalContext from '../../context/GlobalContext';

interface PROPS {
  fields: UIObject;

}

function SwitchField(props: PROPS) {
  const { updateFormData } = useContext(GlobalContext);
  const [value, setValue] = useState(typeof props.fields.validate.defaultValue === 'boolean' && props.fields.validate.defaultValue ? props.fields.validate.defaultValue : false);
  useEffect(() => {
    dataInitiator();
  }, []);

  const dataInitiator = () => {
    updateFormData(props.fields.jsonKey, props.fields.validate.defaultValue);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
    const checked = e.target.checked;
    setValue(!value);
    updateFormData(props.fields.jsonKey, checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox value={value} onChange={onChange} disabled={props.fields.validate.immutable} />}
      label={props.fields.label}
      required={props.fields.validate.required}
    />
  );
}

export default SwitchField;
