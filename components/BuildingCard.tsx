import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type BuildingCardProps = {
  buildingName: string;
  floor: string;
  onPress?: () => void;
};

export default function BuildingCard({ buildingName, floor, onPress }: BuildingCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.buildingName}>{buildingName}</Text>
      <Text style={styles.floor}>{floor}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 16,
    width: 119,
    height: 99,
    justifyContent: 'flex-start',
  },
  buildingName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    lineHeight: 19.6,
  },
  floor: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.56,
    lineHeight: 33.6,
  },
});

