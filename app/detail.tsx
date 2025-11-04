import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/Button';

// Figma에서 제공한 이미지 URL들
const imgIconChevronRight = 'https://www.figma.com/api/mcp/asset/bc518267-a74c-440f-b87f-47a6de2dcc03';

export default function DetailScreen() {
  const router = useRouter();
  const [startFloor, setStartFloor] = useState<number | null>(1);
  const [destFloor, setDestFloor] = useState<number | null>(null);
  const [pickerTarget, setPickerTarget] = useState<'start' | 'dest' | null>(null);

  const openPicker = (target: 'start' | 'dest') => setPickerTarget(target);
  const closePicker = () => setPickerTarget(null);
  const handleSelect = (value: number) => {
    if (pickerTarget === 'start') setStartFloor(value);
    if (pickerTarget === 'dest') setDestFloor(value);
    closePicker();
  };

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
            <Text style={styles.headerTitle}>상세 안내</Text>
          </View>

          {/* Checkout Info */}
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>시작층</Text>
            <TouchableOpacity style={styles.infoValueContainer} onPress={() => openPicker('start')} activeOpacity={0.8}>
              <Text style={styles.infoValue}>{startFloor ? `${startFloor}층` : '선택'}</Text>
              <Ionicons name="chevron-forward" size={20} color="#000" />
            </TouchableOpacity>
            </View>
          <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>목적층</Text>
            <TouchableOpacity style={styles.infoValueContainer} onPress={() => openPicker('dest')} activeOpacity={0.8}>
              {destFloor == null ? (
                <Text style={styles.infoValuePlaceholder}>입력하세요</Text>
              ) : (
                <Text style={styles.infoValue}>{`${destFloor}층`}</Text>
              )}
              <Ionicons name="chevron-forward" size={20} color="#000" />
            </TouchableOpacity>
            </View>
          {/* 추가 구분선 */}
          <View style={styles.extraSeparator} />
          </View>
        </ScrollView>

        {/* Bottom Button */}
        <SafeAreaView style={styles.bottomContainer} edges={['bottom']}>
          <View style={styles.bottomButtonContainer}>
            <Button title="확인" onPress={() => router.push('/result')} />
          </View>
          {/* Home Indicator */}
          <View style={styles.homeIndicator} />
        </SafeAreaView>
      </SafeAreaView>

      {/* 층 선택 모달 */}
      <Modal animationType="slide" transparent visible={pickerTarget !== null} onRequestClose={closePicker}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>층 선택</Text>
            <View style={styles.modalGrid}>
              {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                <TouchableOpacity key={n} style={styles.modalItem} onPress={() => handleSelect(n)} activeOpacity={0.8}>
                  <Text style={styles.modalItemText}>{n}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.modalCancel} onPress={closePicker} activeOpacity={0.8}>
              <Text style={styles.modalCancelText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginLeft: -33,
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.34,
    lineHeight: 23.8,
  },
  infoContainer: {
    marginTop: 0,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E6E6E6',
  },
  extraSeparator: {
    height: 0.1,
    backgroundColor: '#E6E6E6',
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
    width: 100,
    lineHeight: 20,
  },
  infoValueContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 19.6,
  },
  infoValuePlaceholder: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.5)',
    lineHeight: 19.6,
  },
  bottomContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderTopColor: '#E6E6E6',
    paddingTop: 12,
  },
  bottomButtonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  homeIndicator: {
    height: 34,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
  },
  modalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },
  modalItem: {
    width: '18%',
    height: '50%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    
  },
  modalCancel: {
    marginTop: 16,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalCancelText: {
    fontSize: 16,
    color: '#0a7ea4',
    fontWeight: '600',
  },
});

