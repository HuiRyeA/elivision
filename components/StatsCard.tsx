import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type StatsCardProps = {
  title: string;
  mainValue: string;
  subtitle?: string;
  subtitle2?: string;
};

export default function StatsCard({ title, mainValue, subtitle, subtitle2 }: StatsCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.mainValue}>{mainValue}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {subtitle2 && <Text style={styles.subtitle}>{subtitle2}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 16,
    width: 224,
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 19.6,
  },
  mainValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.56,
    lineHeight: 33.6,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#828282',
    lineHeight: 18,
  },
});

