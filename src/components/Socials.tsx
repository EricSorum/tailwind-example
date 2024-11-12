import { SocialType } from '../lib/definitions';
import SocialLink from './SocialLink';


export default function Socials() {

const socialIcons: SocialType[] = [
  {
    id: 1,
    icon: 'facebook',
    url: 'https://www.facebook.com'
  },
  {
    id: 2,
    icon: 'instagram',
    url: 'https://www.instagram.com'
  },
  {
    id: 3,
    icon: 'twitter-x',
    url: 'https://www.x.com'
  }
]
  return(
    <ul className="flex justify-end align-center gap-3">
      {socialIcons.map((social: SocialType) => {
        return (
          <li key={social.id}>
            <SocialLink {...social} />
          </li>
        )
      })}
    </ul>
  )
}