import code from "../assets/code-snippet 2.png"
import green from "../assets/Green.png"
import blue from "../assets/Blue.png"

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-home">

        <div className="text-white pl-60 pr-20 ">
          <div className="pb-20 ">
            <p className="text-[#E5E9F0] font-extralight">Hi all. I am</p>
            <h1 className="text-7xl whitespace-nowrap">Rian Lucas</h1>
            <h2 className="text-4xl text-[#4D5BCE]">Back-end developer</h2>
          </div>
          

          <div>
            <p className="whitespace-nowrap text-[#43D9AD]">
              const githubLink =  
              <span className="text-[#E99287] px-2 select-all">
                 "https://github.com/rianlucas" 
              </span> 
            </p>
          </div>

          
        </div>

          <div className="max-w-2xl pr-5 relative">
            <img className="opacity-30 absolute top-60 max-w-sm" src={ blue } alt="" />
            <img className="opacity-30 absolute bottom-60 right-32" src={ green } alt="" />
            <img className="py-2 bg-repeat-y opacity-30" src={ code } alt="" />
            <img className="py-4 bg-repeat-y" src={ code } alt="" />
            <img className="py-2 bg-repeat-y opacity-30 relative" src={ code } alt="" />
          </div>

      </div>    

    </div>
  )
}