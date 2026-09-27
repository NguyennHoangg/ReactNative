import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { CategoryChips } from '../components/CategoryChips';
import { BookGrid } from '../components/BookGrid';
import { FloatingCartButton } from '../components/FloatingCartButton';
import { TabBar, TabKey } from '../components/TabBar';
import { BookDetailScreen } from '../screens/BookDetailScreen';
import { CartScreen } from '../screens/CartScreen';
import { Book, BOOKS, CartItem } from '../data';

export default function HomeScreen() {
  // ── State điều hướng ──
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // ── State giỏ hàng ──
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Tổng số lượng sản phẩm (dùng cho badge)
  const totalCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  // ── Hàm giỏ hàng ──
  function addToCart(book: Book) {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.book.id === book.id);
      if (exists) {
        // Đã có → tăng số lượng
        return prev.map((i) =>
          i.book.id === book.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Chưa có → thêm mới với quantity = 1
      return [...prev, { book, quantity: 1 }];
    });
  }

  function increaseQty(bookId: number) {
    setCartItems((prev) =>
      prev.map((i) => (i.book.id === bookId ? { ...i, quantity: i.quantity + 1 } : i))
    );
  }

  function decreaseQty(bookId: number) {
    setCartItems((prev) => {
      const item = prev.find((i) => i.book.id === bookId);
      if (!item) return prev;
      // Nếu số lượng = 1 → xóa khỏi giỏ
      if (item.quantity === 1) return prev.filter((i) => i.book.id !== bookId);
      return prev.map((i) =>
        i.book.id === bookId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  }

  // ── Render nội dung theo trạng thái ──
  function renderContent() {
    // Ưu tiên màn hình chi tiết (không hiện TabBar)
    if (selectedBook) {
      return (
        <BookDetailScreen
          book={selectedBook}
          onBack={() => setSelectedBook(null)}
          onAddToCart={() => {
            addToCart(selectedBook);
            setSelectedBook(null);
          }}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <>
            <Header />
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              <CategoryChips />
              <BookGrid books={BOOKS} onPressBook={setSelectedBook} />
            </ScrollView>
          </>
        );

      case 'cart':
        return (
          <CartScreen items={cartItems} />
        );

      default:
        // Placeholder cho các tab chưa xây dựng
        return (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>
              Màn hình "{activeTab}" — sẽ xây dựng sau
            </Text>
          </View>
        );
    }
  }

  const showTabBar = !selectedBook;
  const showFAB = activeTab === 'home' && !selectedBook;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>

        {/* Nội dung chính thay đổi theo tab / trạng thái */}
        {renderContent()}

        {/* ── TabBar: ẩn khi đang xem chi tiết sách ── */}
        {showTabBar && (
          <TabBar
            active={activeTab}
            onChange={(tab) => {
              setSelectedBook(null);
              setActiveTab(tab);
            }}
          />
        )}

        {/* ── FloatingCartButton: chỉ hiện ở tab Home ── */}
        {showFAB && (
          <FloatingCartButton
            count={totalCount}
            onPress={() => setActiveTab('cart')}
          />
        )}

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
});