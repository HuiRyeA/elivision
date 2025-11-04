import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// 컴포넌트가 받을 props의 타입을 정의합니다.
type Props = {
  congestion: string | undefined;
  arrival: number;
}

export default function ElevatorCard({congestion, arrival}: Props){
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Arrival</Text>
      <Text style={styles.evText}>
        <Text style={styles.evText}>{arrival}</Text>초 후 도착 예정
      </Text>
      <Text style={styles.title}>
        혼잡도 : {congestion}
      </Text>
    </View>
  )
}


// const ElevatorCard: React.FC<ElevatorCardProps> = ({ eta }) => {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.title}>엘리베이터 도착 정보</Text>
//       <Text style={styles.etaText}>
//         약 <Text style={styles.etaNumber}>{eta}</Text>초 후 도착 예정
//       </Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android 그림자 효과
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  evText: {
    fontSize: 16,
    color: '#555',
  },
  evTime: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF', // 강조 색상
  },
});