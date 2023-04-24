import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { petTypes } from './breed';

function HomeScreen({ navigation }) {
  const renderPetType = ({ item }) => (
    <Button
      title={item}
      onPress={() => navigation.navigate('Details', { petType: item })}
    />
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Choose a pet type:</Text>
      <FlatList
        data={petTypes}
        renderItem={renderPetType}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

export default HomeScreen;
