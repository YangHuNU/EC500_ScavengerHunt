import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Image, Dimensions, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker } from 'react-native-maps';
import customData from '../bostonclients.json';



export default function MapDetails({ navigation }) {
    const increment = (marker) => {
        console.log(marker)
        marker.used = 1
    }
    return (
        <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
                latitude: 42.361145,
                longitude: -71.057083,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}>
            {customData.map((marker, index) => {
                if (marker.Company == navigation.getParam('Company')) {
                    if (marker.used == 0) {
                        return (
                            <MapView.Marker key={index} coordinate={{ latitude: marker.Location.Latitude, longitude: marker.Location.Longitude }}
                                title={marker.Labels[0]}>
                                <View style={styles.marker1} />
                                <MapView.Callout tooltip style={styles.customView}>
                                    {increment(marker)}
                                    <View style={styles.calloutText}>
                                        <Text>{marker.Company} {'\n'}{marker.Coupon} {'\n'} {marker.used}</Text>
                                    </View>
                                </MapView.Callout>
                            </MapView.Marker>
                        );
                    }
                    else if (marker.used==1) {
                        return (
                            <MapView.Marker key={index} coordinate={{ latitude: marker.Location.Latitude, longitude: marker.Location.Longitude }}
                                title={marker.Labels[0]}>
                                <View style={styles.marker2} />
                                <MapView.Callout tooltip style={styles.customView}>
                                    <View style={styles.calloutText}>
                                        <Text>{marker.Company} {'\n'}{marker.Coupon} {'\n'} {marker.used}</Text>
                                    </View>
                                </MapView.Callout>
                            </MapView.Marker>
                        );
                    }
                }
            })}
        </MapView>
    )
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