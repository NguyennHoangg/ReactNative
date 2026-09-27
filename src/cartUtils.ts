// cartUtils.ts — chỉ giữ các hàm tiện ích, CartItem đã chuyển sang data.ts
import { CartItem } from './data';

// Re-export để các file cũ import từ cartUtils vẫn không lỗi
export type { CartItem };

// Tính tổng tiền — price giờ là number nên nhân trực tiếp
export function calcTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
}

// Format số thành chuỗi tiền VND: 89000 → "89.000đ"
export function formatVND(amount: number): string {
  return amount.toLocaleString('vi-VN') + 'đ';
}
