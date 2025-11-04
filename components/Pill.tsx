import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

type PillProps = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function Pill({ label, selected = false, onPress, style }: PillProps) {
  return (
    <TouchableOpacity
      style={[styles.pill, selected && styles.pillSelected, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.pillText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 114,
  },
  pillSelected: {
    backgroundColor: '#F6F6F6',
  },
  pillText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 19.6,
  },
});

