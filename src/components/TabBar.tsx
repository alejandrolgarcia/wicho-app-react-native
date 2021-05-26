import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Tab } from './Tab';

const { width } = Dimensions.get('screen');

export const TabBar = ({ state, navigation }: BottomTabBarProps) => {
    
    const { routes } = state;
    const [selected, setSelected] = useState('HomeScreen');

    const renderColorIcon = ( currentTab: string ) => 
        currentTab === selected ? 'red' : 'black'

    const handlePress = ( activeTab: string, index: number ) => {
        
        if ( state.index != index ) {
            setSelected( activeTab );
            navigation.navigate(activeTab);
        }

    }
    
        return (
        <View style={ styles.wrapper }>
            <View style={ styles.container }>
                {
                    routes.map( (route: any, index: number) => <Tab
                        // tab={ route }
                        icon={ route.params.icon }
                        onPress={ () => handlePress( route.name, index ) }
                        color={ renderColorIcon( route.name ) }
                        key={ route.key }
                    /> )
                }
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 20,
        width,
        alignItems: 'center',
        justifyContent: 'center'
    }, 

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: 250,
        borderRadius: 100,
        elevation: 2,
        shadowOpacity: 0.1,
        shadowRadius: 5,
    }
});
