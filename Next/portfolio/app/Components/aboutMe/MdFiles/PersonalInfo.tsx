import DescribeLine from "../DescribeLine"

export default function PersonalInfo(){
  return(
    <div>
      <DescribeLine line={1} text="/**"/>
      <DescribeLine line={2} text="* Sobre mim"/>
      <DescribeLine line={3} text="* Trabalho com desenvolvimento Web "/>
      <DescribeLine line={4} text="* Desde janeiro de 2023"/>
      <DescribeLine line={5} text="* Utilizo principalmente Php"/>
      <DescribeLine line={6} text="* Mas tecnologias como Nodejs"/>
      <DescribeLine line={7} text="* MySql, Docker e Aws fazem parte"/>
      <DescribeLine line={8} text="* Dos meus conhecimentos como "/>
      <DescribeLine line={9} text="* Desenvolvedor."/>
      <DescribeLine line={10} text="*/"/>
    </div>
  )
}