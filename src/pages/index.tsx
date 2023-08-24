export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center  p-24 `}>
      <div className="flex flex-col items-center ">
        <span className="sm:text-[80px] text-[30px]">Mojtaba Borzu</span>
        <span className="sm:text-[50px] text-[20px]">مجتبی برزو</span>
      </div>
      <div className="flex flex-col items-center ">
        <span className="sm:text-[80px] text-[30px]">Front End </span>
        <span className="sm:text-[50px] text-[20px]">
          {" "}
          برنامه نویس فرانت اند
        </span>
      </div>
    </main>
  );
}
