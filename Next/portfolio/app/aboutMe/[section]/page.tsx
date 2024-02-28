import DescriptionFiles from "@/app/Components/aboutMe/MdFiles/DescriptionFiles";
import Card from "@/app/Components/card/Card";

interface SectionParams {
  params: {
    section: string;
  };
}

export default function section({ params }: SectionParams) {
  console.log(params.section);

  if (params.section === "PersonalInfo") {
    return (
      <div className="grid h-full grid-cols-2">
        <div className=" border-default-border-color border-r py-3">
          {params.section === "PersonalInfo" && (
            <DescriptionFiles
              code={`  /**
  Sobre mim
  Trabalho com desenvolvimento Web
  Desde janeiro de 2023
  Utilizo principalmente Php
  Mas tecnologias como Nodejs
  MySql, Docker e Aws fazem parte
  Dos meus conhecimentos como
  Desenvolvedor.
 */`}
            />
          )}
        </div>

        <div>
          <Card />
        </div>
      </div>
    );
  }
}
