import { SocialType } from "../lib/definitions";

export default function SocialLink(props: SocialType) {
  return (
    <a href={props.url}><i className={`bi bi-${props.icon}`}></i></a>
  )
}