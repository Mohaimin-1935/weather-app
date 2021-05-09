import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Detail({currentWeather, unitSystem}) {
    const imageURL = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`
    
    return (
        <View style={styles.container}>
            <View style={{...styles.row, padding: 15}}>
                <View style={{...styles.item, 
                    width: '100%', 
                    margin: 20,
                    justifyContent: 'center',
                    paddingVertical: 10,
                }}>
                <Image style={styles.iconImg} source={{uri: imageURL}} />
                        <View>
                            <Text style={styles.value}>
                                {currentWeather.weather[0].main}
                            </Text>
                            <Text style={{...styles.title, textTransform: 'capitalize'}}>
                            {currentWeather.weather[0].description} 
                            </Text>
                        </View>
                    </View>
            </View>
            <View style={styles.row}>
                <View style={styles.item}>
                <FontAwesome name="thermometer-half" size={36} color="black" />
                    <View>
                        <Text style={styles.title}>
                            Feels Like
                        </Text>
                        <Text style={styles.value}>
                            {Math.round(currentWeather.main.feels_like)}
                            °{unitSystem==='metric' ? 'C' : 'F'} 
                        </Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <MaterialCommunityIcons name="weather-windy" size={36} color="black" />
                    <View>
                        <Text style={styles.title}>
                            Wind
                        </Text>
                        <Text style={styles.value}>
                            {Math.round(currentWeather.wind.speed)} 
                            {unitSystem==='metric' ? ' m/s' : ' mph'}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.item}>
                    <MaterialCommunityIcons name="water-outline" size={36} color="black" />
                    <View>
                        <Text style={styles.title}>
                            Humidity
                        </Text>
                        <Text style={styles.value}>
                            {currentWeather.main.humidity}%
                        </Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <MaterialCommunityIcons name="cloud-outline" size={36} color="black" />
                    <View>
                        <Text style={styles.title}>
                            Clouds
                        </Text>
                        <Text style={styles.value}>
                            {currentWeather.clouds.all}%
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        paddingVertical: 60,
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImg: {
        width: 100,
        height: 100,
    },
    item: {
        width: 150,
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,.8)',
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
    },
    value: {
        fontSize: 18,
        fontWeight: '700',
    },
})