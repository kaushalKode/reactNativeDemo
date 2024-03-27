import { StyleSheet } from "react-native"

const Elestyles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    container: {
        paddingHorizontal: 8,
    },

    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        margin: 8,
        borderRadius: 8,
    },

    cardElevated: {
        backgroundColor: 'lightgrey',
        
    }
})

export default Elestyles