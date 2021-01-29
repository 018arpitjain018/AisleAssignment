import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, StatusBar, StyleSheet } from 'react-native';

import AppText from '../Components/Text';
import Card from '../Components/Card';
import Button from '../Components/Button';

class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#fff" barStyle='dark-content' />
                <ScrollView style={{ flex: 1, paddingHorizontal: 20 }}>
                    <View style={styles.header}>
                        <AppText heading={true}>Notes</AppText>
                        <AppText>Personal messages to you</AppText>
                    </View>

                    <View>
                        <Card banner={true} image={require('../Assets/photo_1.png')} name="Meena" age={23} />
                    </View>

                    <View style={styles.note}>
                        <View style={{ flex: 2 }}>
                            <AppText style={{ fontSize: 22 }} heading={true}>Interested In You</AppText>
                            <AppText style={{ fontSize: 15, color: '#9B9B9B', lineHeight: 18, fontWeight: '600' }}>Premium members can view all their likes at once</AppText>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Button>Upgrade</Button>
                        </View>
                    </View>

                    <View style={styles.horizontalCard}>
                        <View style={{ width: '48%' }}>
                            <Card hidden={true} image={require('../Assets/photo_2.png')} name="Teena" />
                        </View>
                        <View style={{ width: '48%' }}>
                            <Card hidden={true} image={require('../Assets/photo_3.png')} name="Beena" />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    note: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    horizontalCard: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    }
})

export default Discover;