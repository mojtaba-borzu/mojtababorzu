import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://mojtababorzu.ir" />
      </Head>
      <main className={`flex min-h-screen flex-col items-center pt-8 pb-24 `}>
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative">
          <Image
            src={
              "https://personalimages.s3.ir-thr-at1.arvanstorage.ir/logo-black.png?versionId="
            }
            alt="logo"
            fill
          />
        </div>
        <div className="flex flex-col items-center ">
          <h2 className="sm:text-[80px] text-[30px]">Mojtaba Borzu</h2>
          <h1 className="sm:text-[50px] text-[20px] ">مجتبی برزو</h1>
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden relative">
            <Image
              src={
                "https://personalimages.s3.ir-thr-at1.arvanstorage.ir/1697698731558.jpeg?versionId="
              }
              alt="person"
              fill
            />
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <h3 className="sm:text-[80px] text-[30px]">Front End </h3>
          <h3 className="sm:text-[50px] text-[20px]">برنامه نویس فرانت اند</h3>
          <span className="sm:text-[14px] text-[12px]">
            این سایت در حال ساخت می باشد
          </span>
        </div>
      </main>
    </>
  )
}
