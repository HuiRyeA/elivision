import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Chip from '@/components/Chip';
import Button from '@/components/Button';
import BuildingCard from '@/components/BuildingCard';

// Figma에서 제공한 이미지 URL들
const imgMap = 'https://www.figma.com/api/mcp/asset/16c6dc60-b87b-476d-b812-b78ae8111efd';
const imgBanner = 'https://www.figma.com/api/mcp/asset/8419cce8-5c0b-46fc-a50c-04e388a950c8';

export default function MainScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Status Bar Area */}
        <View style={styles.statusBar} />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Elevison</Text>
          <View style={styles.buttonContainer}>
            <Button title="상세 안내" onPress={() => router.push('/detail')} style={{ paddingHorizontal: 40 }} />
          </View>
        </View>
        

        {/* Map Section */}
        <View style={styles.mapContainer}>
          <View style={styles.mapWrapper}>
            <Image
              source={{ uri: imgMap }}
              style={styles.mapImage}
              contentFit="cover"
            />
          </View>
          
          {/* Chips on Map */}
          <View style={styles.chipContainer}>
            <View style={styles.chipRow1}>
              <Chip label="1호기" time="3:45" style={styles.chip1} />
              <Chip label="3호기" time="2:40" style={styles.chip3} />
            </View>
            <View style={styles.chipRow2}>
              <Chip label="2호기" time="1:40" style={styles.chip2} />
              <Chip label="4호기" time="0:45" style={styles.chip4} />
            </View>
            <Chip label={"로비인원\n보통"} variant="warning" style={styles.chipWarning} />
          </View>
        </View>

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: imgBanner }}
            style={styles.bannerImage}
            contentFit="cover"
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerText}>n번째 엘레베이터</Text>
            <Text style={styles.bannerText}>이용가능!</Text>
            <Text style={styles.bannerTextSmall}>(소요시간 0:00)</Text>
          </View>
        </View>

        {/* Recent Navigation Section */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>최근 안내</Text>
          <View style={styles.cardsContainer}>
            <BuildingCard buildingName="60주년 기념관" floor="7층" />
            <BuildingCard buildingName="60주년 기념관" floor="5층" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 27,
    marginTop: -11,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.4,
    lineHeight: 58,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  mapContainer: {
    width: '100%',
    height: 272,
    marginTop: 30,
    marginBottom: 48,
    backgroundColor: '#FAFCFF',
    position: 'relative',
  },
  mapWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  mapImage: {
    width: '117.55%',
    height: '138.12%',
    position: 'absolute',
    left: '-8.78%',
    top: 0,
  },
  chipContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  chipRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 200,
    paddingTop: 28,
  },
  chipRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 200,
    paddingTop: 76,
  },
  chip1: {
    position: 'absolute',
    left: 40,
    top: 28,
  },
  chip2: {
    position: 'absolute',
    left: 40,
    top: 104,
  },
  chip3: {
    position: 'absolute',
    right: 66,
    top: 28,
  },
  chip4: {
    position: 'absolute',
    right: 66,
    top: 110,
  },
  chipWarning: {
    position: 'absolute',
    top: 168,
    left: '50%',
    width: 145,
    minHeight: 86,
    paddingVertical: 12,
    transform: [{ translateX: -72.5 }], 
  },
  bannerContainer: {
    marginHorizontal: 13,
    height: 146,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 47,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    left: 20,
    top: '35%',
    transform: [{ translateY: -20 }],
  },
  bannerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 28,
    letterSpacing: -0.4,
    marginBottom: 4,
  },
  bannerTextSmall: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    lineHeight: 28,
    letterSpacing: -0.4,
  },
  recentSection: {
    paddingHorizontal: 24,
    marginBottom: 100,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 13,
    lineHeight: 19.6,
  },
  cardsContainer: {
    flexDirection: 'row',
    gap: 17,
  },
});
