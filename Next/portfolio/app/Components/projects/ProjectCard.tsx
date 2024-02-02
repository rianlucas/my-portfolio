import Image, { StaticImageData } from "next/image";
import SubmitButton from "../form/SubmitButton";

type ProjectCardProps = {
  name: string;
  number: string;
  description: string;
  icon: string;
  image: StaticImageData | string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="xl:mx-4 2xl:mx-8">
      <div className="py-3">
        <p className="font-semibold text-[#5565E8]">
          Project {props.number}{" "}
          <span className="text-default-text-color font-normal">
            \\ {props.name}
          </span>{" "}
        </p>
      </div>

      <div className="border-default-border-color relative rounded-md border">
        <div>
          <Image
            alt="imagem"
            src={props.icon}
            width={30}
            height={30}
            className="absolute right-3 top-3"
          />
          <Image alt="imagem" src={props.image} />
        </div>

        <div className="bg-[#011221]">
          <p className="text-default-text-color p-7 text-lg">
            {props.description}
          </p>
          <div className="px-7 pb-6">
            <SubmitButton buttonName="view-project" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
}
