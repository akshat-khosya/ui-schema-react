import React, { useState, useEffect, useContext } from 'react';
import { Tabs, Tab } from '@mui/material';
import { UIObject } from '../../utils/jsonValidation';
import GlobalContext from '../../context/GlobalContext';

interface PROPS {
  fields: UIObject;
}
function RadioField(props: PROPS) {
  const { formData, updateFormData } = useContext(GlobalContext);
  const [selectedTab, setSelectedTab] = useState(typeof props.fields.validate.defaultValue === 'string' && props.fields.validate.defaultValue ? props.fields.validate.defaultValue : "");

  useEffect(() => {
    dataInitiator();
  }, []);

  const dataInitiator = () => {
    updateFormData(props.fields.jsonKey, props.fields.validate.defaultValue);
  };

  const selectHandler = (event: React.SyntheticEvent, newValue: string) => {

    setSelectedTab(newValue);
    updateFormData(props.fields.jsonKey, newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={selectHandler} aria-label="tabs">
        {props.fields.validate.options && props.fields.validate.options.map((option: any) => (
          <Tab label={option.label} value={option.value} key={option.value} />
        ))}
      </Tabs>
      <br />
    </>
  )
}

export default RadioField