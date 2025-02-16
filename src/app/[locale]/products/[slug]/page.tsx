import React from 'react'
import Menu from '@/components/menu/menu'
import ProductDetail from '@/components/product/product_detail'
type Props = {
    slug?: string,
}
const Page = ({ slug }: Props) => {
    return (
        <div>
            <Menu></Menu>
            <ProductDetail></ProductDetail>
        </div>
    )
}



export default Page