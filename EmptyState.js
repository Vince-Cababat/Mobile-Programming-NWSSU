import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './globalStyles';

export default function EmptyState({ message, buttonLabel, onPress }) {
  return (
    <View>
      <Text style={styles.emptyText}>{message}</Text>
      {buttonLabel && onPress ? (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}
