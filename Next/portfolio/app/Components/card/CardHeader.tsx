import Image from "next/image"
import IconAndText from "./IconAndText"
import FotoPerfil from "../../assets/FotoPerfil.jpeg"
import Details from "../../assets/icons/Details.svg"
import Star from "../../assets/icons/Star.svg"

export default function CardHeader() {
  return(
    <div className="flex px-5 py-9 font-mono grow justify-between">
        <div className="flex">

          <div className="pr-3">
            <Image className="rounded-full" src={FotoPerfil} width={50} height={50} alt="foto-perfil" />
          </div>

          <div>
            <p className="text-[#5565E8] font-bold">@rianlucas</p>
            <p className="text-sm">Created x time ago</p>
          </div>

        </div>

        <div className="flex ">
          <IconAndText icon={Details} text="details"/>
          <IconAndText icon={Star} text="3 stars"/>
        </div>

      </div>
  )
}