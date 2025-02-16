import { Product } from '@/common/interface'
import React from 'react'
import { ProductStatus } from '@/common/contant';

const ProductList = () => {
    const generateProducts = (num: number, colors: string[], categories: string[], types: string[]): Product[] => {
        const products: Product[] = [];
        // loop ผ่านทุกหมวดหมู่ (category) และ ขนาด (size)
        for (let i = 0; i < num; i++) {
            const product: Product = {
                id: `prod-${i + 1}`,
                name: `Product ${i + 1} ${categories[i]}`,
                slug: `product-${i + 1}`,
                description: `Description for  product ${categories[i]} ${i}`,
                price: 20 + i, // ราคาสินค้า
                originalPrice: 25 + i, // ราคาปกติ
                currency: "USD",
                images: {
                    pc: {
                        color: colors.map((color,index) => ({
                            color,
                            alt: `${color} Product ${i + 1}`,
                            url: `/images/products/${color.toLowerCase()}-product-${i + 1}.jpg`,
                            type: types.map((type) => ({
                                type: `${type}`,
                                alt: `${color} Product ${color + 1}`,
                                url: `/images/products/${type.toLowerCase()}-product-${i + 1}-${color}.jpg`,
                            }))
                        })),
                    },
                    mobile: {
                        color: colors.map((color,index) => ({
                            color,
                            alt: `${color} Product ${i + 1}`,
                            url: `/images/products/${color.toLowerCase()}-product-${i + 1}-mobile.jpg`,
                            type: types.map((type) => ({
                                type: `${type}`,
                                alt: `${color} Product ${color + 1}`,
                                url: `/images/products/${type.toLowerCase()}-product-${i + 1}-${color}.jpg`,
                            }))
                        })),
                    },
                },
                category: categories[i],
                stock: 100,
                sku: `SKU-${i + 1}`,
                brand: `Brand-${i + 1}`,
                rating: 4.0,
                reviews: [
                    { rating: 5, comment: "Great product!", user: "User1" },
                    { rating: 4, comment: "Good quality.", user: "User2" },
                ],
                availability: ProductStatus.IN_STOCK,
                shipping: { weight: 0.5, dimensions: "10 x 8 x 1 cm" },
                isFeatured: i % 2 === 0, // Featured every other product
                isDiscounted: i % 2 === 0, // Discount every other product
                discountPercentage: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                shippingInfo: "Ships within 2-3 business days.",
                manufacturer: `Manufacturer-${i + 1}`,
                warranty: "1 year",
                variants: sizes.map((size) => ({
                    color: colors.join(', '), // ค่าของสีหลายตัว
                    size,
                    price: 20 + i,
                })),
            };

            products.push(product); // เพิ่มสินค้าใหม่ลงใน array

        }

        return products; // คืนค่าผลลัพธ์ที่ได้จากการสร้างสินค้าหลายตัว
    }

    // เรียกใช้ฟังก์ชันเพื่อสร้างข้อมูลสินค้า
    const categories = ['electronics', 'clothing', 'furniture'];
    const colors = ['blue', 'green'];
    const sizes = ['S', 'M', 'L'];
    const generatedProducts = generateProducts(categories.length, colors, categories, sizes);

    // แสดงข้อมูลที่ได้
    console.log(generatedProducts);


    return (

        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {
                    generatedProducts && generatedProducts.map((item, index) => {
                        return <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a href='' className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                                <p>{item.description}</p>
                                <p className="mt-1">{item.price}</p>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>

    )
}


export default ProductList