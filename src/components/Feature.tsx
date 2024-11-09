import { Feature } from "../lib/definitions"

export default function Feature() {
  return (
    <div className="flex flex-col items center">
      <img src={feature.img} />
      <div>{feature.text}</div>
    </div>
  )
}