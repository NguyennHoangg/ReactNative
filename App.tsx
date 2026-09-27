import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './src/components/Header';
import { CategoryChips } from './src/components/CategoryChips';
import { BookGrid } from './src/components/BookGrid';
import { FloatingCartButton } from './src/components/FloatingCartButton';
import { TabBar, TabKey } from './src/components/TabBar';
import { BOOKS } from './src/data';

// Lưu ý: App.tsx không được dùng khi project dùng expo-router
// (entry point thật là src/app/index.tsx).
// File này chỉ giữ lại để tham khảo cấu trúc bài tập.

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

        {/* Header cố định, nằm NGOÀI ScrollView */}
        <Header />

        {/* ScrollView bọc nội dung có thể cuộn */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <CategoryChips />
          <BookGrid books={BOOKS} />
        </ScrollView>

        {/* TabBar: controlled component — cần active + onChange */}
        <TabBar
          active={activeTab}
          onChange={setActiveTab}
        />

        {/* FloatingCartButton: cần count và onPress */}
        <FloatingCartButton
          count={0}
          onPress={() => setActiveTab('cart')}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
});