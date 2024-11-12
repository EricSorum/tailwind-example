import { SocialType } from "../lib/definitions";

export default function SocialLink(props: SocialType) {
  return (
    <a href={props.url} className="opacity-60 hover:opacity-100"><i className={`bi bi-${props.icon}`}></i></a>
  )
}