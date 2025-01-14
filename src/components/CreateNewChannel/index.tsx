/*
Programmer: Hung
*/

/*
Name: CreateNewChannel
*/

/*
Purpose: 
1. Component to create a new chat channel
*/


import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { View } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CreateNewChannel = () => {

    const navigation = useNavigation()

    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('NewChannel');
            }}>
            <FontAwesome name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default CreateNewChannel;