import Image from "next/image";
import IconAndText from "./IconAndText";
import FotoPerfil from "../../assets/FotoPerfil.jpeg";
import Details from "../../assets/icons/Details.svg";
import Star from "../../assets/icons/Star.svg";

export default function CardHeader() {
  return (
    <div className="flex grow justify-between px-5 pb-2 pt-9 font-mono">
      <div className="flex">
        <div className="pr-3">
          <Image
            className="rounded-full"
            src={FotoPerfil}
            width={50}
            height={50}
            alt="foto-perfil"
          />
        </div>

        <div>
          <p className="font-bold text-[#5565E8]">@rianlucas</p>
          <p className="text-sm">Created x time ago</p>
        </div>
      </div>

      <div className="flex ">
        <IconAndText icon={Star} text="3 stars" />
      </div>
    </div>
  );
}
