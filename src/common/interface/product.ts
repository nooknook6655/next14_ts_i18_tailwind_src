import { ProductStatus } from '@/common/contant'
export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  currency?: string;
  images?: {
    pc?:{
      color?:[{
        color?:string;
        alt?:string;
        url?:string;
        type?:{
          type?:string;
          alt?:string;
          url?:string;
        }
      }]
    },
    mobile?:{
      color:[{
        color:string;
        alt?:string;
        url?:string;
        type?:{
          type?:string;
          alt?:string;
          url?:string;
        }
      }]
    },
  }
  category?: string | string[];
  tags?: string[];
  stock?: number;
  sku?: string;
  brand?: string;
  rating?: number;
  reviews?: Array<{ rating: number; comment: string; user: string }>;
  attributes?: { [key: string]: string };
  variants?: Array<{ color: string; size: string; price: number }>;
  availability?: ProductStatus;
  shipping?: { weight: number; dimensions: string };
  isFeatured?: boolean;
  isDiscounted?: boolean;
  discountPercentage?: number;
  createdAt?: Date;
  updatedAt?: Date;
  shippingInfo?: string;
  manufacturer?: string;
  warranty?: string;
}
