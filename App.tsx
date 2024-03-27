import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";


function App() {
  return (
    <SafeAreaView>
      <View>
        {/* <FlatCards /> */}
        <ElevatedCards/>
      </View>
    </SafeAreaView>
  )
}


export default App;