import HeaderLinks from "./HeaderLinks"

export default function Header () {

  return (
    <div className="flex justify-between max-w-full bg-[#061726] rounded-lg border-solid border-b border-[#1d2b39] text-base font-mono ">
      <div className="flex box-border">
        <a href="#" className="px-8 pr-[12rem] py-4 text-[#3b454e] border-solid border-r border-[#1d2b39]  hover:text-white hover:border-b-[#FEA55F] hover:border-b-2 transition duration-150 ease-in-out">
          rian-lucas
        </a>

        <div className="flex ">
          <HeaderLinks href="#" name="_hello"/>
          <HeaderLinks href="#" name="_about-me"/>
          <HeaderLinks href="#" name="_projects"/>
          <HeaderLinks href="#" name="_articles"/>
        </div>

      </div>
        <HeaderLinks href="#" name="_contact-me"/>

    </div>
  )

}