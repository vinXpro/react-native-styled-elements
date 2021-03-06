import React from 'react'
import { View, TouchableOpacity, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import ActionSheetWithOptions from './components/ActionSheetWithOptions'
import ActionSheetWithCustomView from './components/ActionSheetWithCustomView'
import ActionSheetListType from './components/ActionSheetListType'

const ActionSheet = React.forwardRef((props, ref) => {
    const [state, setState] = React.useState({ visible: false })

    const show = () => setState({ visible: true })

    const dismiss = () => {
        setState({ visible: false })
    }

    const onSelected = (value, index) => {
        dismiss()
        setTimeout(() => props.onSelected(value, index), 100)
    }

    React.useImperativeHandle(ref, () => ({
        dismiss() {
            setState({ visible: false })
        }

    }));

    return (
        <View style={props.style}>
            <TouchableOpacity onPress={show}>
                {props.button || props.buttonComponent || (props.options && props.children)}
            </TouchableOpacity>

            {
                props.options && props.type === 'list' ? (
                    <ActionSheetListType
                        visible={state.visible}
                        onClose={dismiss}
                        onSelected={onSelected}
                        options={props.options}
                        title={props.title}
                    />
                ) : props.options ? (
                    <ActionSheetWithOptions
                        visible={state.visible}
                        onClose={dismiss}
                        onSelected={onSelected}
                        options={props.options}
                        title={props.title}
                    />
                ) : (
                            <ActionSheetWithCustomView
                                visible={state.visible}
                                onClose={dismiss}
                                onSelected={onSelected}
                                contentView={props.children}
                                title={props.title}
                            />
                        )
            }

        </View>
    )
})

ActionSheet.propTypes = {
    style: ViewPropTypes.style,
    button: PropTypes.oneOf([PropTypes.string, PropTypes.element, PropTypes.object]),
    options: PropTypes.array,
    onSelected: PropTypes.func,
    title: PropTypes.string,
    type: PropTypes.oneOf(['list', 'none']),
}

ActionSheet.defaultProps = {
    onSelected: () => { },
    type: 'none'
}

export default ActionSheet
