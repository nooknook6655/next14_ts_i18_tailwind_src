// constants/currency.ts

export const CURRENCIES = {
  THB: "THB", // บาทไทย
  USD: "USD", // ดอลลาร์สหรัฐ
  EUR: "EUR", // ยูโร
};
// constants/category.ts

export const CATEGORIES = {
  ELECTRONICS: "electronics",
  CLOTHING: "clothing",
  FURNITURE: "furniture",
  BOOKS: "books",
  BEAUTY: "beauty",
};

// constants/productStatus.ts

export const PRODUCT_STATUS = {
  IN_STOCK: "in_stock", // มีสต็อก
  OUT_OF_STOCK: "out_of_stock", // หมดสต็อก
  DISCONTINUED: "discontinued", // เลิกผลิต
};

// constants/currency.ts

export enum Currency {
  THB = "THB", // บาทไทย
  USD = "USD", // ดอลลาร์สหรัฐ
  EUR = "EUR", // ยูโร
}

// constants/category.ts

export enum Category {
  ELECTRONICS = "electronics", // อิเล็กทรอนิกส์
  CLOTHING = "clothing", // เสื้อผ้า
  FURNITURE = "furniture", // เฟอร์นิเจอร์
  BOOKS = "books", // หนังสือ
  BEAUTY = "beauty", // ความงาม
}

// constants/productStatus.ts

export enum ProductStatus {
  IN_STOCK = "in_stock", // มีสต็อก
  OUT_OF_STOCK = "out_of_stock", // หมดสต็อก
  DISCONTINUED = "discontinued", // เลิกผลิต
}

