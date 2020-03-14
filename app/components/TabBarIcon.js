import * as React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
    if(props.type == "MaterialCommunity"){
        return (
            <MaterialCommunityIcons
                name={props.name}
                size={30}
                style={{ marginBottom: -3 }}
                color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
        );
    }
    return (
        <Ionicons
            name={props.name}
            size={30}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}
