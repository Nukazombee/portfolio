
export default function Header (props){

  const handleClick = (component) =>{
    props.setAC(component);
  };


  
  return(
    <div>
      <ul className="flex justify-between items-center mt-4 bg-amber-200
      rounded-[500px] w-[350px] h-[36px] mx-auto font-semibold shadow-inner">
        <li className="mx-2 hover:bg-[#FCF8E5] hover:cursor-pointer transform transition ease-in-out 
        rounded-xl px-2 hover:shadow-md" onClick={()=> handleClick('Component1')}>Comp1</li>
        <li className="mx-6" onClick={()=> handleClick('Component2')}>Comp2</li>        
        <li className="mx-6" onClick={()=> handleClick('Component3')}>Comp3</li>
      </ul>      
    </div>
  )
}