'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/app/i18n/i18n'
import Menu from '@/components/menu/menu'
import PromotionList from '@/components/promotions/promotion_list'
type Props = {
    locale: string
}
const Page = ({ locale = "th" }: Props) => {
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    return (
        <>
            <Menu></Menu>
            <PromotionList></PromotionList>
        </>
    )
}

export default Page
