import { Link } from "react-router-dom";

interface CardProps {
    title?:string ;
    link?:string  ;
}

export default function Card({title,link}:CardProps) {
  return (
    <Link to={link as string}>
    <div className="w-56 h-20 bg-white shadow-md hover:shadow-xl transition-all duration-300 text-gray-800 rounded-lg p-2 flex gap-x-2">
        <img className="w-20 h-16 rounded" src="https://picsum.photos/seed/picsum/200/300" alt="" />
        <div className="flex flex-col justify-between pb-2">
            <p className="text-lg text-gray-800 font-bold">
                {title}
            </p>
            <div className="bg-gray-800 w-32 h-2 rounded-full"></div>
        </div>
    </div>
    </Link>
  )
}
