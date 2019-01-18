import React from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import colors from '../../static/colors'

import iconTypes from '../Icon/iconTypes'

const Button = React.memo(props => {
    const { title, titleStyle, icon, containerStyle, disabled, onPress } = props
    let iconView
    if (typeof icon === 'object') {
        const Icon = iconTypes(icon.type)
        iconView = <Icon name={icon.name} size={icon.size} color={icon.color} />
    } else {
        iconView = icon
    }

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle, disabled && styles.disabled]}>
            {iconView && <View style={{ marginRight: 10 }}>{iconView}</View>}
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
})

const styles = {
    container: {
        padding: 10,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: colors.primary,
        ...Platform.select({
            android: {
                elevation: 4,
                borderRadius: 2,
            },
        }),
    },
    title: {
        backgroundColor: 'transparent',
        fontFamily: Platform.select({ ios: 'Verdana', android: 'System' }),
        fontSize: 13,
        color: '#000000',
        fontWeight: '400',
        lineHeight: 18,
        letterSpacing: -0.078,
        color: '#fff'
    },
    disabled: {
        // grey from designmodo.github.io/Flat-UI/
        backgroundColor: '#D1D5D8',
    },
}

export default Button
