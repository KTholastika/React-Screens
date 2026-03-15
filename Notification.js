import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Notification() {
  const notifications = [
    { id: '1', title: "New message", description: "You have a new message" },
    { id: '2', title: "Update available", description: "Update the app now" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  notification: 
  { padding: 15, 
    borderBottomWidth: 1, 
    borderColor: '#ccc' 
    },
  title: { 
    fontWeight: 'bold' 
    },
});
