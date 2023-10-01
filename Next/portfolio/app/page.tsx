import code from "./assets/code-snippet 2.png"
import green from "./assets/Green.png"
import blue from "./assets/Blue.png"
import Image from "next/image"

export default function Home() {
  return (
   <div className='bg-[#011627] font-fira-code'>
      <div className="flex items-center justify-center h-home">

        <div className="text-white pl-60 pr-20 ">
          <div className="pb-20 ">
            <p className="text-[#E5E9F0] font-extralight">Hi all. I am</p>
            <h1 className="text-7xl whitespace-nowrap">Rian Lucas</h1>
            <h2 className="text-4xl text-[#4D5BCE]">Back-end developer</h2>
          </div>
          

          <div>
            <p className="whitespace-nowrap text-[#43D9AD]">
              $githubLink 
              <span className="text-white"> =</span>
              <span className="text-[#E99287] px-2 select-all">
                 https://github.com/rianlucas
              </span> 
            </p>
          </div>

          
        </div>

          <div className="max-w-2xl pr-5 relative">
            <Image className="opacity-30 absolute top-60 max-w-sm" width={500} height={500} src={ blue.src } alt="" />
            <Image className="opacity-30 absolute bottom-60 right-32" width={500} height={500} src={ green.src } alt="" />
            <Image className="py-2 bg-repeat-y opacity-30" width={500} height={500} src={ code.src } alt="" />
            <Image className="py-4 bg-repeat-y" width={500} height={500} src={ code.src } alt="" />
            <Image className="py-2 bg-repeat-y opacity-30 relative" width={500} height={500} src={ code.src } alt="" />
          </div>

      </div>    

    </div>
  )
}
