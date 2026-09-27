import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type Props = {
  count?: number;         // Số lượng sản phẩm trong giỏ
  onPress?: () => void;   // Nhấn nút → chuyển sang tab Giỏ hàng
};

export function FloatingCartButton({ count = 0, onPress }: Props) {
  return (
    // Nút chính định vị tuyệt đối — nổi trên mọi thứ kể cả TabBar
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>🛒</Text>

      {/* Badge số lượng — chỉ hiện khi giỏ có hàng */}
      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count > 99 ? '99+' : count}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',   // Thoát khỏi luồng layout, nổi trên cùng
    bottom: 80,             // Đủ cao hơn TabBar (64px) để không che TabBar
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4B0082',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,          // Đủ cao để nổi trên TabBar (elevation: 8)
  },
  icon: {
    fontSize: 24,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ef4444',
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
});