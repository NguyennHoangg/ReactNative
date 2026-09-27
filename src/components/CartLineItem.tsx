import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CartItem } from '../data';

type Props = {
  item: CartItem;
};

export function CartLineItem({ item }: Props) {
  const { book, quantity } = item;

  return (
    // Mỗi dòng sản phẩm: flexDirection:'row' để ảnh | info | qty nằm ngang
    <View style={styles.row}>

      {/* Ảnh bìa — kích thước cố định, không co giãn */}
      <Image source={{ uri: book.cover }} style={styles.thumbnail} />

      {/* Thông tin sách — flex:1 chiếm phần còn lại giữa thumbnail và qty */}
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
        <Text style={styles.author} numberOfLines={1}>{book.author}</Text>
        <Text style={styles.price}>{book.price.toLocaleString()}đ</Text>
      </View>

      {/* Số lượng — width cố định, không bị co */}
      <View style={styles.qtyBadge}>
        <Text style={styles.qtyText}>×{quantity}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',     // ảnh | info | qty — nằm ngang
    alignItems: 'center',     // căn giữa theo chiều dọc
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  thumbnail: {
    width: 60,                // Kích thước cố định
    height: 80,
    borderRadius: 6,
    backgroundColor: '#EEF2F7',
  },
  info: {
    flex: 1,                  // Chiếm phần còn lại
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  author: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  price: {
    fontSize: 13,
    fontWeight: '700',
    color: '#DC2626',
    marginTop: 4,
  },
  qtyBadge: {
    width: 36,                // Width cố định
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#4338CA',
  },
});
