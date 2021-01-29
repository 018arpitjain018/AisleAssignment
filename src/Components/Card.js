import React, { Component } from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';

import AppText from './Text';
import LinearGradient from 'react-native-linear-gradient';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const props = this.props;
        const name = this.props.hidden ? props.name : `${props.name}, ${props.age}`
        const blurRadius = Platform.OS === 'ios' ? 10 : 3

        return (
            <View style={styles.container}>
                <Image 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        borderRadius: 20,
                        backgroundColor: 'transparent',
                    }} 
                    source={props.image}
                    resizeMode='cover' 
                    resizeMethod='scale'
                    blurRadius={props.hidden ? blurRadius : 0}
                />

                <LinearGradient style={styles.description} colors={['rgba(0, 0, 0, 0.00001)', 'rgba(0, 0, 0, 0.7)']} useAngle angle={180} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                 }}>
                    <AppText style={{ color: '#fff', fontSize: props.banner ? 22 : 18 }} heading={true}>{name}</AppText>
                    { props.banner ? <AppText style={{ color: '#fff' }}>Tap to review 50+ notes</AppText> : null }
                </View>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10, 
        width: '100%', 
        height: 280, 
        marginVertical: 20,
    },
    description: { 
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
})

export default Card;