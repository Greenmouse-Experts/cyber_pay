
import { BsDot } from "react-icons/bs";



function ListItem({item}) {
  return (
    <li className="flex items-start gap-1 md:text-lg text-[1.1rem] font-normal ">
      <span>
        <BsDot className="!text-black dark:!text-white" size={30} />
      </span>
      {item}
    </li>
  );
}

function List({items}) {
  return (
    <ul className="flex flex-col gap-2">
    {items.map((item, index) => (
      <ListItem key={index} item={item}/>
    ))}
    </ul>
  );
}

export default List;
