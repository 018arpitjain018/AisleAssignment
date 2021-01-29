import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';

import AppText from './Text';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <TouchableOpacity style={{
                height: 50,
                width: 113,
                backgroundColor: '#FCDF03',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 24
            }}>
                <AppText style={{ fontSize: 15, fontWeight: '800', lineHeight: 23 }}>Upgrade</AppText>
            </TouchableOpacity>
        );
    }
}

export default Button;