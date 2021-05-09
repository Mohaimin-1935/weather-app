import React from 'react'
import {View, Text, StyleSheet, Image, } from 'react-native'

//degree symbol: °


export default function Info({currentWeather, unitSystem}) {
    const imageURL = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`

    return (
        <View style={styles.container}>

            <View style={styles.temp}>
                <Text style={styles.title}>
                    {Math.round(currentWeather.main.temp)}
                </Text>
                <Text style={styles.unit}>°{unitSystem==='metric' ? 'C' : 'F'}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    temp: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    title: {
        color: '#fff',
        fontSize: 130,
        fontWeight: '500',
    },
    unit: {
        color: '#fff',
        marginTop: 40,
        fontSize: 24,
        fontWeight: '700',
    },
})