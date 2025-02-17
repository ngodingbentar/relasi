import Link from "next/link"
import { IItem } from "./Menus.compoent"

const MenuItem = ({data}: {data: IItem}) => {
  return (
    <Link href={data.link} target="_blank" className="bg-white p-4 rounded-2xl shadow-lg border">{data.title}</Link>
  )
}

export default MenuItem