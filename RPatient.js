import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function RPatient() {
  const data = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Orange' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}                    // Array of items
        keyExtractor={(item) => item.id} // Unique key for each item
        renderItem={({ item }) => (    // How each item is displayed
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
});
