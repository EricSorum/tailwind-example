import { NavType } from "../lib/definitions";

export default function NavLink(props: NavType) {
  return (  
    <li className="hover:shadow border border-1 border-slate-100 rounded">
      <a href={props.url} className="p-3">{props.txt}</a>
    </li>
  )
}