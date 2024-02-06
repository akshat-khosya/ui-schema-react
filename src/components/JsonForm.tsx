import React, { useContext } from 'react'
import InputField from './Form/InputField'
import GlobalContext from '../context/GlobalContext';

function JsonForm() {
    const { uiJson } = useContext(GlobalContext);
    return (
        <>
            {
                uiJson.map((data, index) => {
                    return (
                        <>
                            {
                                data.uiType === 'Input' && <InputField fields={data} key={index} />
                            }
                        </>
                    )
                })
            }

        </>

    )
}

export default JsonForm