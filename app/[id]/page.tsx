import { Suspense } from "react"
import UserDetail from "./User.compoent"

interface IProps {
  params: {
    id: string
  }
}
const UserPage = async ({ params }: IProps) => {
  console.log("params", params.id)
  const data = {
    name: "zhangsan",
    age: 20,
    username: params.id
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserDetail data={data} />
    </Suspense>
  )
}

export default UserPage