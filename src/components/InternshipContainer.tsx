import { Link } from "react-router";
import { useInternship } from "../hooks/useInternship";
import { FaArrowDown, FaArrowUp  } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";

export const InternshipContainer = ({ id }: { id: number }) => {

    const [isDivHidden, setIsDivHidden] = useState(true)
    const { internshipData } = useInternship();

    return (

        <li className="bg-internshipTopColor shadow-sm rounded-md">

            <div className="flex flex-row items-center justify-between px-8 py-2 text-2xl">
                <h3>{internshipData[id].title}</h3>


                <button className="cursor-pointer" onClick={() => setIsDivHidden(!isDivHidden)}>
                    {
                        isDivHidden ?
                        <FaArrowDown />
                        :
                        <FaArrowUp />
                    }
                </button>
            </div>


            <div className={`bg-internshipBottomColor px-8 py-2 gap-4 font-inconsolata ${isDivHidden ? 'hidden' : 'flex flex-col'}`}>
                
                <p>Skills Required: {internshipData[id].skills}</p>

                <Link to={`/${id}`} className="flex flex-row items-center bg-blue-700 ml-auto px-4 py-2 gap-2 text-white">
                    <BsFillSendFill />
                    Learn More
                </Link>
            </div>
        </li>

    )
}
