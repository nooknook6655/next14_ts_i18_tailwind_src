'use client'
import React from 'react'
import { VscTwitter, VscAccount } from "react-icons/vsc";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { formatNumberToK } from '@/common/util';


const Page = () => {

    const follower = [
        {
            name: "",
            icon: VscAccount,
            url: "",
            amount: formatNumberToK(456789)
        },
        {
            name: "",
            icon: FaInstagram,
            url: "",
            amount: formatNumberToK(123456)
        },
        {
            name: "",
            icon: FaTiktok,
            url: "",
            amount: formatNumberToK(456789)
        },
        {
            name: "",
            icon: VscTwitter,
            url: "",
            amount: formatNumberToK(123456)
        },
    ]
    return (
        <>
            <div className="container px-5 py-10 mx-auto w-full text-gray-600 body-font">
                <div className="flex flex-wrap -m-4 text-center">
                    {
                        follower.map((item, index) => {
                            const IconComponent = item.icon; // ให้ `item.icon` เป็น Component
                            return <div key={index} className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                                <div className="border-2 border-gray-200 lg:px-14 py-6 rounded-lg">
                                    <IconComponent className="w-full h-12 text-primary-400" /> {/* เรียกใช้ Component ได้ */}
                                    <h2 className="title-font font-medium text-3xl text-gray-900 py-2">{item.amount}</h2>
                                    {/* <p className="leading-relaxed">Downloads</p> */}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default Page
