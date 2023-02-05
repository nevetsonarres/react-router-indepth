import { useLoaderData, useParams } from 'react-router-dom'

export const careerDetailsLoader = async ( { params }) => {
    const { careerId } = params;
    const res = await fetch(`http://localhost:8000/careers/${careerId}`);

    if (!res.ok) {
        throw Error('Could not find that career');
    }

    return res.json(); 
}

export default function CareerDetails() {
    const { careerId } = useParams();
    const career = useLoaderData()

    return (
        <div className="career-details">
            <h2>Career Details for { career.title }</h2>
            <p>Career Id: {careerId}</p>
            <p>Starting Salary: { career.salary }</p>
            <p>Location: { career.location }</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quam rem nulla earum reiciendis labore dolores tenetur rerum praesentium velit quia id libero expedita laboriosam, fugiat ipsa itaque necessitatibus? Dolores.</p>
            </div>
        </div>
    )
}