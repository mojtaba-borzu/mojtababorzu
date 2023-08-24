import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content={"index"} />
        <link rel="canonical" href="https://mojtababorzu.ir"></link>
      </Head>
      <main className={`flex min-h-screen flex-col items-center  p-24 `}>
        <div className="flex flex-col items-center ">
          <h2 className="sm:text-[80px] text-[30px]">Mojtaba Borzu</h2>
          <h1 className="sm:text-[50px] text-[20px]">مجتبی برزو</h1>
        </div>
        <div className="flex flex-col items-center ">
          <h3 className="sm:text-[80px] text-[30px]">Front End </h3>
          <h3 className="sm:text-[50px] text-[20px]">برنامه نویس فرانت اند</h3>
        </div>
      </main>
    </>
  );
}
