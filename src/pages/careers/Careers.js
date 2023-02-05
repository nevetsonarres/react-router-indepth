import { useLoaderData, Link } from 'react-router-dom';

// loader function
export const careersLoader = async () => {
    const res = await fetch('http://localhost:8000/careers')

    if (!res.ok) {
        throw Error('Could not fetch the careers');
    }

    // this is a promise but react route gonna 
    // automatically resolve this
    return res.json(); 
}

export default function Careers() {
  // use the loader function careersLoader 
  // will be set in the routes what loader to use
  const careers = useLoaderData();

  return (
    <div className="careers">
        {careers.map(career => (
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
        ))}
    </div>
  )
}