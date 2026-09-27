import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { DiscountBadge } from './DiscountBadge';
import { Book } from '../data';

type Props = {
  books: Book[];
  onPressBook?: (book: Book) => void; // optional: nếu không truyền thì không điều hướng
};

export function BookGrid({ books, onPressBook }: Props) {
  return (
    <View style={styles.gridContainer}>
      {books.map((book) => (
        // Bọc mỗi card bằng Pressable để nhấn được
        <Pressable
          key={String(book.id)}
          style={styles.gridItem}
          onPress={() => onPressBook?.(book)}
        >
          {/* Tạo một View bọc ngoài ảnh và badge để làm mốc định vị */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: book.cover }} style={styles.coverImage} />
            {/* Hiện badge giảm giá nếu có discountPercent, ngược lại hiện 'Mới' nếu isNew */}
            {book.discountPercent && <DiscountBadge label={`-${book.discountPercent}%`} />}
            {!book.discountPercent && book.isNew && <DiscountBadge label="Mới" />}
          </View>

          <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
          <Text style={styles.author} numberOfLines={1}>{book.author}</Text>
          <Text style={styles.price}>{book.price.toLocaleString()}đ</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  gridItem: {
    width: '48%',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative', // BẮT BUỘC: Làm containing block để badge bám vào
    width: '100%',
    aspectRatio: 3 / 4,
    marginBottom: 8,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#111827',
  },
  author: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  price: {
    color: '#DC2626',
    fontWeight: 'bold',
    marginTop: 4,
  },
});