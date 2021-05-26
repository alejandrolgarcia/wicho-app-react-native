import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

interface TapProps {
    color: string;
    tab?: string;
    onPress: () => void;
    icon: string;
}

export const Tab = ({ color, tab, onPress, icon }: TapProps ) => {
    return (
        <TouchableOpacity
            activeOpacity={ 0.9 }
            onPress={ onPress }
            style={ styles.container
        }>
            <Icon name={ icon } size={ 30 } color={ color } />
            {/* <Text style={{ color }}>{ tab.name }</Text> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    }
});
