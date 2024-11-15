import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const pokemonData = [
    {
        title: "Water",
        color: '#1E90FF',
        icon: 'water-outline',
        data: [
            {
                key: 'Poliwag',
                cardNumber: 60,
                imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_60-2x.png'
            },
            {
                key: 'Tentacool',
                cardNumber: 72,
                imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_72-2x.png'
            }
        ]
    },
    {
        title: "Fire",
        color: '#FF6347',
        icon: 'flame-outline',
        data: [
            {
                key: 'Charmander',
                cardNumber: 4,
                imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png'
            },
            {
                key: 'Vulpix',
                cardNumber: 37,
                imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_37-2x.png'
            }
        ]
    }
];

const PokemonItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.pokemonItem}>
            <Text style={styles.pokemonText}>{item.key}</Text>
            <Image source={{ uri: item.imageUrl }} style={styles.pokemonImage} />
        </TouchableOpacity>
    );
};

const SectionHeader = ({ section }) => {
    return (
        <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
            <Text style={styles.sectionText}>
                <Ionicons name={section.icon} size={20} color="white" style={styles.sectionIcon} />
                {'  '}{section.title}
            </Text>
        </View>
    );
};

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Button title="Add New Pokemon" color="#4682B4"/>
            <SectionList
                sections={pokemonData}
                renderItem={({ item }) => <PokemonItem item={item} />}
                renderSectionHeader={({ section }) => <SectionHeader section={section} />}
                keyExtractor={(item, index) => item.key + index}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#f0f8ff'
    },
    pokemonItem: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 12,
        paddingHorizontal: 8,
        alignItems: 'center',
        marginBottom: 10
    },
    pokemonText: {
        flex: 1,
        fontSize: 17,
        color: '#333',
        textAlign: "left",
        fontWeight: '600'
    },
    pokemonImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        margin: 10
    },
    sectionHeader: {
        paddingVertical: 8,
        borderRadius: 6,
        marginBottom: 8,
        justifyContent: 'center',
    },
    sectionText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    sectionIcon: {
        margin: 8,
    }
});
