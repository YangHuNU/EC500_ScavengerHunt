import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import customData from '../bostonclients.json';
import clients from '../clientlist.json'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    bigBlue: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: "center",
    },
    red: {
        color: 'red',
    },
});

export default function Home({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('MapDetails')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.bigBlue}>Welcome to Coupon Monarch
                {'\n'}
                Filter your locations here:</Text>
            <FlatList
                data={clients}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('MapDetails', item)}>
                        <Text>{item.Company}</Text>
                    </TouchableOpacity>
                )}
            />
            <Button title='See All' onPress={pressHandler} />
        </View>
    );
}
