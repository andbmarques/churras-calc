import React, { useState } from 'react';
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import Hr from '../../Components/Hr/hr';
import { dataTemplate } from './dataTemplate';
import FinishingSection from './Sections/finishingSection';
import SideDishSection from './Sections/sideDishSection';
import MeatSection from './Sections/meatSection';
import PeopleInputSection from './Sections/peopleInputSection';

export default function Calculator() {

    const [data, setData] = useState(dataTemplate);

    const [haveChicken, setHaveChicken] = useState(true);
    const [haveSuine, setHaveSuine] = useState(true);
    const [haveGarlicBread, setHaveGarlicBread] = useState(true);
    const [haveCheese, setHaveCheese] = useState(true);

    return (
        <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={50}>
            <ScrollView style={styles.container}>
                {/* HEADER */}
                <Text style={styles.title}>Vamos começar</Text>
                <Text style={styles.text}>{'Insira os dados abaixo e clique em \ncalcular para obter os resultados'}</Text>
                {/* PEOPLE INPUT */}
                <PeopleInputSection 
                    styles={styles}
                    data={data}
                    setData={setData}
                />
                <Hr />
                {/* MEAT SECTION */}
                <Text style={styles.text}>{'Insira mais informações sobre as \ncarnes.'}</Text>
                <MeatSection 
                    styles={styles}
                    data={data}
                    setData={setData}
                    haveChicken={haveChicken}
                    haveSuine={haveSuine}
                    setHaveChicken={setHaveChicken}
                    setHaveSuine={setHaveSuine}
                />
                <Hr />
                {/* SIDE DISH SECTION */}
                <Text style={styles.text}>{'Agora é a hora dos \nacompanhamentos!'}</Text>
                <SideDishSection 
                    styles={styles}
                    data={data}
                    setData={setData}
                    haveGarlicBread={haveGarlicBread}
                    setHaveGarlicBread={setHaveGarlicBread}
                    haveCheese={haveCheese}
                    setHaveCheese={setHaveCheese}
                />
                <Hr />
                {/* FINISHING SECTION */}
                <FinishingSection
                    styles={styles}
                    data={data}
                    setData={setData}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}