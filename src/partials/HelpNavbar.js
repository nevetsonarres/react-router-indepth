import { NavLink } from "react-router-dom";

export default function HelpNavbar() {
  return (
    <nav>
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
    </nav>
  )
}