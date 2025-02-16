'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/app/i18n/i18n'
import Menu from '@/components/menu/menu'
type Props = {
    locale: string
}
const Page = ({ locale = "th" }: Props) => {
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    return (
        <>
            <Menu></Menu>

        </>
    )
}


export default Page
