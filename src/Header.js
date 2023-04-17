export default function Header(props) {
  const handleClick = (component) => {
    props.setAC(component);    
  };

  return (
    <div >
      <ul className="flex justify-evenly items-center mt-6 bg-color9 rounded-[500px] w-[420px] md:w-[480px] lg:w-[1000px] h-[36px] mx-auto  shadow-inner select-none ">
        <li
          className={`mx-2 active:translate-x-[1px] active:translate-y-[2px] hover:text-color9 hover:cursor-pointer shadow-md transform transition ease-in-out rounded-xl px-2 ${
            props.component === "Component1" ? "translate-x-[1px] translate-y-[2px] bg-white text-color9 font-bold" : "bg-white text-color7 font-bold"
          }`}
          onClick={() => handleClick("Component1")}
        >
          ABOUT
        </li>
        <li
          className={`mx-2 active:translate-x-[1px] active:translate-y-[2px] hover:text-color9 hover:cursor-pointer shadow-md transform transition ease-in-out rounded-xl px-2 ${
            props.component === "Component2" ? "translate-x-[1px] translate-y-[2px] bg-white text-color9 font-bold"  : "bg-white text-color7 font-bold"
          }`}
          onClick={() => handleClick("Component2")}
        >
          SKILLS
        </li>
        <li
          className={`mx-2 active:translate-x-[1px] active:translate-y-[2px] hover:text-color9 hover:cursor-pointer shadow-md transform transition ease-in-out rounded-xl px-2 ${
            props.component === "Component3" ? "translate-x-[1px] translate-y-[2px] bg-white text-color9 font-bold" : "bg-white text-color7 font-bold"
          }`}
          onClick={() => handleClick("Component3")}
        >
          PROJECTS
        </li>
      </ul>
    </div>
  );
}
