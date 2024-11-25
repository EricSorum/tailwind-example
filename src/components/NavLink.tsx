import { NavType } from "../lib/definitions";

export default function NavLink(props: NavType) {
  return (  
    <li className="hover:shadow opacity-70 hover:opacity-100 rounded">
      <a href={props.url} className="p-3">{props.txt}</a>
    </li>
  )
}