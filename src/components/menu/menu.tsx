'use client'
import React, { useState } from 'react'
import { useParams, usePathname } from 'next/navigation'
import { useTranslation } from '@/app/i18n/i18n'
import { VscTwitter } from "react-icons/vsc";
import { FiMenu, FiX } from "react-icons/fi"; // ไอคอน Burger Menu

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false); // state สำหรับเปิด/ปิดเมนู
    const params = useParams<{ locale: string }>()
    const { t } = useTranslation(params.locale)
    const pathname = usePathname();
    const logo = "/img/logo/m-logo.png"
    const topMenu = [
        {
            name: "Online Shop",
            url: ""
        },
        {
            name: "What's Hot",
            url: ""
        },
        {
            name: "Reveiws",
            url: ""
        },
        {
            name: "Branchs",
            url: ""
        },
        {
            name: "Contact us",
            url: ""
        },
    ]
    const mainMenu = [
        { url: `/${params.locale}`, name: t('menu.home') },
        { url: `/${params.locale}/about`, name: t('menu.about') },
        { url: `/${params.locale}/promotion`, name: t('menu.promotion') },
        { url: `/${params.locale}/products`, name: t('menu.products') },
        { url: `/${params.locale}/treatment`, name: t('menu.treatment') },
        { url: `/${params.locale}/beautyhack`, name: t('menu.beautyhack') },
        { url: `/${params.locale}/qanda`, name: t('menu.qanda') },
        { url: `/${params.locale}/contact`, name: t('menu.contact') },
    ]
    return (
        <header className="text-gray-700 body-font shadow bg-gradient-to-r from-primary-100 to-white">
            <div className='container flex flex-row m-auto py-4'>
                <div className='w-1/2'>
                    <img src={logo} alt="logo" className='w-64' />
                </div>
                <div className='w-1/2 text-xs text-end'>
                    {
                        topMenu.map((item, index) => {
                            return <>
                                <a key={index} href="http://">{item.name}</a><span dangerouslySetInnerHTML={{ __html: "&nbsp" }}></span> | <span dangerouslySetInnerHTML={{ __html: "&nbsp" }}></span>
                            </>
                        })

                    }
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap pb-5 items-center justify-between">

                {/* Logo
                <a className="flex title-font font-medium items-center text-gray-700">
                    <VscTwitter className='w-9 h-9' />
                    <span className="ml-3 text-xl">{t("logo")}</span>
                </a> */}

                {/* Burger Menu Button (เฉพาะจอเล็ก) */}
                <button
                    className="lg:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </button>

                {/* เมนูหลัก (ซ่อนใน mobile, แสดงบน desktop) */}
                <nav className="hidden lg:flex items-center space-x-4">
                    {mainMenu.map((menu, index) => (
                        <a
                            key={index}
                            href={menu.url}
                            className={`p-2 rounded-full ${pathname === menu.url ? " bg-white text-gray-700" : "hover:text-gray-900 hover:bg-white"}`}
                        >
                            {menu.name}
                        </a>
                    ))}
                </nav>

                {/* ปุ่ม */}
                <div className="hidden lg:flex text-primary-400 text-md">
                    <a href="http://" className='mx-2'>{t('button.register')}</a> |
                    <a href="http://" className='mx-2'>{t('button.login')}</a>
                </div>
            </div>

            {/* เมนูแสดงใน Mobile (แสดงเมื่อ isOpen เป็น true) */}
            {isOpen && (
                <nav className="lg:hidden bg-white border-t border-gray-300 shadow-md">
                    <ul className="flex flex-col items-center p-4">
                        {mainMenu.map((menu, index) => (
                            <li key={index} className="w-full text-center">
                                <a
                                    href={menu.url}
                                    className={`block p-3 w-full ${pathname === menu.url ? " bg-gray-200 text-gray-700" : "hover:bg-gray-200"}`}
                                    onClick={() => setIsOpen(false)} // ปิดเมนูเมื่อกดลิงก์
                                >
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Menu;
