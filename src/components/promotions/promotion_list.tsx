'use client'
import React from 'react'


const PromotionList = () => {

    const promotionData = {
        title: "Pitchfork Kickstarter Taxidermy",
        description: "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag."
    }
    const PromotionAll = [
        {
            name: "",
            id: "",
            tile: "",
            subTiltle: "SUBTITLE",
            description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
            mobile: {
                url: "/img/banner/mobile/Banner-Move-RC15-2023-s.jpg"
            },
            pc: {
            },
            url: "",
            dateFrom: "2025-01-01",
            dateTo: "2025-02-28",
            canUse: "Chichen Itza"

        },
        {
            name: "",
            id: "",
            tile: "",
            subTiltle: "SUBTITLE",
            description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
            mobile: {
                url: "/img/banner/mobile/News-Move-RC-BangKae-20231027.jpg"
            },
            pc: {
            },
            url: "",
            dateFrom: "2025-01-01",
            dateTo: "2025-02-28",
            canUse: "Chichen Itza"
        },
        {
            name: "",
            id: "",
            tile: "",
            subTiltle: "SUBTITLE",
            description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
            mobile: {
                url: "/img/banner/mobile/RC-News-ReOpen2023-Bangkapi-s.jpg"
            },
            pc: {
            },
            url: "",
            dateFrom: "2025-01-01",
            dateTo: "2025-02-28",
            canUse: "Chichen Itza"
        },
        {
            name: "",
            id: "",
            tile: "",
            subTiltle: "SUBTITLE",
            description: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.",
            mobile: {
                url: "/img/banner/mobile/Banner-Move-RC15-2023-s.jpg"
            },
            pc: {
            },
            url: "",
            dateFrom: "2025-01-01",
            dateTo: "2025-02-28",
            canUse: "Chichen Itza"

        },
    ]
    return (

        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{promotionData.title}</h1>
                    <div className="h-1 w-96 bg-indigo-500 rounded"></div>
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{promotionData.description}</p>
            </div>
            <div className="flex flex-wrap -m-4">
                {
                    PromotionAll.map((item, index) => {
                        return <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.mobile.url} alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.subTiltle}</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.dateFrom + " to " + item.dateTo}</h2>
                                <p className="leading-relaxed text-base">{item.description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    )
}


export default PromotionList