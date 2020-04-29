import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker, Callout } from 'react-native-maps';
import customData from '../bostonclients.json';



export default function MapDetails({ navigation }) {
    
    const onPress = (marker) => increment(marker);
    
    const increment = (marker) => {
        console.log(marker)
        marker.used = 1
    };
    const used = (marker) => {
        <View style={styles.calloutText}>
            <Text>{marker.Company} {'\n'} You have used this coupon already. </Text>
        </View>
    };
    const free = (marker) => {
        <View style={styles.calloutText}>
            <Text>{marker.Company} {'\n'} {marker.Coupon} </Text>
        </View>
    };
    
    return (
        <MapView
            style={{ flex: 1 }}
            showsUserLocation={true}
            initialRegion={{
                latitude: 42.361145,
                longitude: -71.057083,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}>

            {customData.map((marker, index) => {
                com = navigation.getParam('Company');

                if (marker.Company == navigation.getParam('Company')) {

                        
                        return (
                            <Marker key={index} coordinate={{ latitude: marker.Location.Latitude, longitude: marker.Location.Longitude }}
                                title={marker.Labels[0]}>
                                <View style={styles.marker1} />
                                <Callout tooltip style={styles.customView}>
                                    {increment(marker)}
                                    <View style={styles.calloutText}>
                                        <Text>{marker.Company} {'\n'}{marker.Coupon} {'\n'} {marker.used}</Text>
                                    </View>
                                </Callout>
                            </Marker>
                        );
                    
                    }
                
                if (navigation.getParam('all')=='all'){
                    console.log(com);
                        return (
                            <Marker key={index} coordinate={{ latitude: marker.Location.Latitude, longitude: marker.Location.Longitude }}
                                title={marker.Labels[0]}>
                                <View style={styles.marker1} />
                                <Callout tooltip style={styles.customView}>
                                    {increment(marker)}
                                    <View style={styles.calloutText}>
                                        <Text>{marker.Company} {'\n'}{marker.Coupon} {'\n'} {marker.used}</Text>
                                    </View>
                                </Callout>
                            </Marker>
                        );
                }
            })}
        </MapView>
    );

}

const styles = StyleSheet.create({
    marker1: {
        justifyContent: "center",
        alignItems: "center",
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "green",
    },
    marker2: {
        justifyContent: "center",
        alignItems: "center",
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "red",
    },
    customView: {
        width: 100,
        height: 100,
        borderRadius: 4,
        backgroundColor: "#FFF",
    },
    calloutText: {
        fontSize: 16
    },
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        height: 50,
        width: 50,
        overflow: "hidden",
        
    }
});