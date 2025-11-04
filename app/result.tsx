import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import Pill from '@/components/Pill';
import StatsCard from '@/components/StatsCard';

export default function ResultScreen() {
  const router = useRouter();
  const [selectedFloor, setSelectedFloor] = useState<'1층' | '7층'>('1층');

  return (
    <>
      <Stack.Screen options={{headerShown: false}}/>
      <SafeAreaView style={styles.container} edges={['top']}>
        
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Status Bar Area */}
          <View style={styles.statusBar} />

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>결과</Text>
          </View>

          {/* Floor Pills */}
          <View style={styles.pillsContainer}>
            <Pill
              label="1층"
              selected={selectedFloor === '1층'}
              onPress={() => setSelectedFloor('1층')}
              style={styles.pill1}
            />
            <IconSymbol size={24} name="arrow.right.arrow.left" color={Colors.light.text} />
            <Pill
              label="7층"
              selected={selectedFloor === '7층'}
              onPress={() => setSelectedFloor('7층')}
              style={styles.pill2}
            />
          </View>

          {/* Stats Cards */}
          <View style={styles.statsContainer}>
            <StatsCard
              title="예상 소요시간"
              mainValue="3:15"
              subtitle="대기 시간: 2:05"
              subtitle2="이동 시간 : 1:10"
            />
          </View>

          {/* Stairs Card */}
          <View style={styles.stairsContainer}>
            <StatsCard
              title="계단 이용시"
              mainValue="1:15"
              subtitle="소모 칼로리 220ckal"
            />
          </View>
        </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  statusBar: {
    height: Platform.OS === 'ios' ? 44 : 24,
    width: '100%',
  },
  header: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E6E6E6',
    paddingHorizontal: 16,
  },
  backButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    position: 'absolute',
    left: '50%',
    marginLeft: -17,
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.34,
    lineHeight: 23.8,
  },
  pillsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    marginTop: 28,
    marginBottom: 52,
    gap: 12,
  },
  pill1: {
    width: 120,
  },
  pill2: {
    width: 114,
  },
  statsContainer: {
    paddingHorizontal: 16,
    marginBottom: 9,
  },
  stairsContainer: {
    paddingHorizontal: 16,
    marginBottom: 100,
  },
});
