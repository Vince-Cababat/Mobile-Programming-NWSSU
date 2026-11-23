import React from 'react';
import { View, Text, Pressable, Linking } from 'react-native';
import { styles } from './globalStyles';

export default function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <Text style={styles.detailLabel}>Email</Text>
      <Text style={styles.description}>support@minista.example</Text>

      <Text style={styles.detailLabel}>Store Hours</Text>
      <Text style={styles.description}>Monday to Saturday, 9:00 AM – 6:00 PM</Text>

      <Text style={styles.detailLabel}>Location</Text>
      <Text style={styles.description}>Cebu City, Philippines</Text>

      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL('mailto:support@minista.example')}
      >
        <Text style={styles.buttonText}>Send an Email</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.secondaryButtonText}>← Back</Text>
      </Pressable>
    </View>
  );
}
