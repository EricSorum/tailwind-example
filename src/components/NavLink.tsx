import { NavType } from "../lib/definitions";

export default function NavLink(props: NavType) {
  return (  
    <li><a href={props.url}>{props.txt}</a></li>
  )
}