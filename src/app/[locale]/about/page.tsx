'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/app/i18n/i18n'
import Menu from '@/components/menu/menu'
type Props = {
    locale: string
}
const page = ({ locale = "th" }: Props) => {
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    return (
        <>
            <Menu></Menu>
            <div>{t("hello")}</div>
            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta illo ullam consectetur nesciunt, incidunt nostrum quaerat! Repellat omnis eius minus quo maiores libero! Quam totam dolore temporibus quasi nostrum laboriosam.
            </div>
        </>
    )
}


export default page