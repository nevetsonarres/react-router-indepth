import { Link, useLocation } from "react-router-dom"

export default function Breadcrumbs() {
    const location = useLocation();
    // console.log(location);

    let currentLink = '';

    // example route /help/contact/ <- help | contact | 'empty string'
    const crumbs = location.pathname.split('/')
    // filter all empty array entry
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`;

            return(
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        });

    return (
        <div className="breadcrumbs">
            { crumbs }
        </div>
    )
}
