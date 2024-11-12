import { FeatureType } from "../lib/definitions"

export default function Feature(props: FeatureType) {
  return (
    <div className="flex flex-col items center">
      <img src={props.img} className=""/>
      <div>{props.txt}</div>
    </div>
  )
}