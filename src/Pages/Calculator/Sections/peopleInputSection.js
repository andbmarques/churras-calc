import React from 'react';
import NumberInput from '../../../Components/NumberInput/numberInput';

export default function PeopleInputSection({ data, setData, styles }) {
    return (
        <>
            <NumberInput
                data={data}
                setData={setData}
                state={true}
                text="Adulto"
                styles={styles}
                age="adults"
            />
            <NumberInput
                data={data}
                setData={setData}
                state={true}
                text="Adolescentes"
                styles={styles}
                age="teenagers"
            />
            <NumberInput
                data={data}
                setData={setData}
                state={true}
                text="Crianças"
                styles={styles}
                age="children"
            />
        </>
    );
}