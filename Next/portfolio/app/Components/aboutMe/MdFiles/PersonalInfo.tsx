import DescribeLine from "../DescribeLine";
import CodeSnippet from "../../card/CodeSnippet";

export default function PersonalInfo() {
  const code = `    /**
    Sobre mim
    Trabalho com desenvolvimento Web
    Desde janeiro de 2023
    Utilizo principalmente Php
    Mas tecnologias como Nodejs
    MySql, Docker e Aws fazem parte
    Dos meus conhecimentos como
    Desenvolvedor.
   */`;

  return (
    <div className="text-default-text-color ml-5">
      <CodeSnippet code={code} showLineNumbers backgroundColor="#011627" />
    </div>
  );
}
