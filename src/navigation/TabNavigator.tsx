import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { BlogScreen } from '../screens/BlogScreen';
import { TabBar } from '../components/TabBar';
import { AboutScreen } from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={ (props) => <TabBar { ...props } /> }>
            <Tab.Screen
                name="HomeScreen"
                component={ HomeScreen }
                initialParams={{ icon: 'aperture' }}
            />
            <Tab.Screen 
                name="BlogScreen" 
                component={ BlogScreen } 
                initialParams={{ icon: 'library' }}
            />
            <Tab.Screen 
                name="AboutScreen" 
                component={ AboutScreen }
                initialParams={{ icon: 'help-circle' }}
            />
        </Tab.Navigator>
    )
}
