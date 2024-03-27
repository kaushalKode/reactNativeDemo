import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>

  )
}

export default FlatCards

const styles = StyleSheet.create({

     headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'blue',
    },
    cardThree: {
        backgroundColor: 'green',
    }

})