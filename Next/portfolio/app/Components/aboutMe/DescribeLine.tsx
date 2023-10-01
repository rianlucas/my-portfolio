interface DescribeLineProps {
  line: number;
  text: string;
}

export default function DescribeLine(props: DescribeLineProps){
  return(
    <div className="flex ">
      <p className="mx-9 w-6 text-right">{props.line}</p>
      <div className="flex grow w-full text-left">
        <p>  {props.text} </p>
      </div>
    </div>
  )
}