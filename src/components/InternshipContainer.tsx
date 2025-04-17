import { Link } from "react-router";
import { useInternship } from "../hooks/useInternship";

export const InternshipContainer = ({ id }: { id: number }) => {

    const { internshipData } = useInternship();

    return (

        <li>
            <h3>{internshipData[id].title}</h3>

            <div>
                <p>Skills Required: {internshipData[id].skills}</p>

                <Link to={`/${id}`}>
                    Learn More
                </Link>
            </div>
        </li>

    )
}
