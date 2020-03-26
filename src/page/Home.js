import React from 'react';
import {View, Text} from 'react-native';

export default function Home(props) {
    const data=props.navigation.getParam('email',1)
    return (
        <View>
            <Text>
                {data}
            </Text>
        </View>
    );
}
