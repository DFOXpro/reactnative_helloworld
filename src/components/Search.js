import React, {useState} from 'react'
import { StyleSheet, TextInput } from 'react-native'

let type =  'pokemon'
const onChangeText = function (newValue) {
	if(newValue.length < 3) return
	// the controller of search
}

const Search = function (props) {
	const [value, setValue] = useState('')
	const { placeholder }  = props
	type = props.type
	return  (
		<TextInput
			style={[styles.input]}
			placeholder={placeholder}
			onChangeText={onChangeText}
		/>
	)
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'pink',
	}
})

export { Search as default }