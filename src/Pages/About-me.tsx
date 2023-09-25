import PersonalInfo from "../Components/aboutMe/MdFiles/PersonalInfo";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function AboutMe() {

  return (
    <div className="flex grow">
    
      <div className="grow grid grid-cols-2">

        <div className="text-default-text-color border-r border-default-border-color py-12">
          <PersonalInfo/>
        </div>
        
        <div className="">
          <SyntaxHighlighter languague="tsx" style={atomOneDark} customStyle={{
            backgroundColor: '#011221',
            font: '1rem',
          }}>
            `function AboutMe(){}`
          </SyntaxHighlighter>
        </div>

      </div>

    </div>
  )
}