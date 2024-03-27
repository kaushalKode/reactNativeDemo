import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Elestyles from './ElevatedStyles';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={Elestyles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={Elestyles.container}>
        <View style={[Elestyles.card,Elestyles.cardElevated]}>
            <Text>box1</Text>
        </View>
        <View style={[Elestyles.card,Elestyles.cardElevated]}>
            <Text>box1</Text>
        </View>
        <View style={[Elestyles.card,Elestyles.cardElevated]}>
            <Text>box1</Text>
        </View>
        <View style={[Elestyles.card,Elestyles.cardElevated]}>
            <Text>box1</Text>
        </View>
        <View style={[Elestyles.card,Elestyles.cardElevated]}>
            <Text>box1</Text>
        </View>
        <View style={[Elestyles.card,Elestyles.cardElevated]}>
            <Text>box1</Text>
        </View>
        <View style={[Elestyles.card,Elestyles.cardElevated]}>
            <Text>box1</Text>
        </View>
        <View style={[Elestyles.card,Elestyles.cardElevated]}>
            <Text>box1</Text>
        </View>
       
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

