import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from './globalStyles';

export default function SearchBar({ value, onChangeText, placeholder }) {
  return (
    <TextInput
      style={localStyles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder || 'Search products...'}
      placeholderTextColor={colors.muted}
      autoCorrect={false}
    />
  );
}

const localStyles = StyleSheet.create({
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    color: colors.text,
    marginBottom: 12,
  },
});
