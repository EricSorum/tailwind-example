import NavLink from "./NavLink"
import { NavType } from "../lib/definitions"

export default function Nav() {
  const menu: NavType[] = [
    {
      id: 1,
      url: '/',
      txt: 'Home'
    },
    {
      id: 2,
      url: '/products',
      txt: 'Products'
    },
    {
      id: 3,
      url: '/our-team',
      txt: 'Our Team'
    }
  ]

  return (
    <ul className="flex items-center gap-2">
      {menu.map((link: NavType) =>
      <div key={link.id}>
        <NavLink {...link} />
      </div>
      )}
    </ul>
  )
}