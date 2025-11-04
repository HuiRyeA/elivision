import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type ChipProps = {
  label: string;
  time?: string;
  variant?: 'default' | 'warning';
  style?: ViewStyle;
};

export default function Chip({ label, time, variant = 'default', style }: ChipProps) {
  return (
    <View style={[styles.chip, variant === 'warning' && styles.chipWarning, style]}>
      {time ? (
        <>
          <Text style={[styles.chipText, variant === 'warning' && styles.chipTextWarning]}>
            {label}
          </Text>
          <Text style={[styles.chipText, variant === 'warning' && styles.chipTextWarning]}>
            {time}
          </Text>
        </>
      ) : (
        <Text
          style={[styles.chipText, variant === 'warning' && styles.chipTextWarning]}
          numberOfLines={0}>
          {label}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#FCFEFF',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    minHeight: 28,
  },
  chipWarning: {
    backgroundColor: '#FEBC2F',
    shadowOpacity: 0,
    elevation: 0,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1B2228',
    textAlign: 'center',
    lineHeight: 17.55,
    includeFontPadding: false,
  },
  chipTextWarning: {
    color: '#FFFFFF',
  },
});

