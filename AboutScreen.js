import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './globalStyles';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About My Mini Store</Text>

      <Text style={styles.detailLabel}>Course</Text>
      <Text style={styles.description}>Mobile Programming — NWSSU</Text>

      <Text style={styles.detailLabel}>Built With</Text>
      <Text style={styles.description}>
        React Native and React Navigation (Native Stack).
      </Text>

      <Text style={styles.detailLabel}>Features</Text>
      <Text style={styles.description}>
        • Product catalog with details{'\n'}• Shopping cart with add and
        remove{'\n'}• Checkout with order total{'\n'}• Shared styles and cart
        state using React Context
      </Text>

      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>← Back</Text>
      </Pressable>
    </View>
  );
}
