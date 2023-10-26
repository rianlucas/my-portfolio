export default function ComingSoon(){
  return (
    <div className="max-w-3xl flex flex-col justify-center items-center">

      <h1 className="my-6 font-bold" id="oswald">
        <span className="text-7xl bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-sky-300 to-purple-400 mr-3">Coming</span>
        <span className="text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-red-300">Soon</span>
      </h1>

      <p className="max-w-xl my-4 tracking-wide text-center font-thin">I&apos;m working hard to bring you something great, and can&apos;t wait to share it with you. Please stay tuned for next update!</p>

      <div className="w-[32rem] bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-gradient-to-r from-green-200 via-sky-300 to-purple-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%]">
          <span className="font-bold text-white">45%</span>
        </div>
      </div>
    </div>
  )
}

