'use client';
import Image from "next/image";
import { useParams } from 'next/navigation'
import { useTranslation } from '@/app/i18n/i18n'
import Menu from '@/components/menu/menu'
import Follower from '@/components/follower'
import MainBanner from '@/components/banner_main/index'
import HomePromotion from '@/components/promotions/home_promotion'
export default function Home() {
  //lang
  const params = useParams<{ locale: string }>()
  const { t } = useTranslation(params.locale)
  return (
    <>
      <div className="sticky top-0 z-10 w-full bg-white">
        <Menu >
        </Menu>
      </div>
      <main className="flex flex-col items-center justify-between">
        <div>
          <HomePromotion></HomePromotion>
        </div>
        <div>
          <Follower></Follower>
        </div>
        <div className="container sm:px-10">
          <MainBanner />
        </div>
      </main>
    </>
  );
}
