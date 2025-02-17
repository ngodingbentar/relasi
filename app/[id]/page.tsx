// import { Suspense } from "react";
import UserDetail from "./User.compoent";

// interface PageProps {
//   params: { id: string };
// }

const UserPage = async () => {
  // console.log("params", params.id);
  const data = {
    name: "zhangsan",
    age: 20,
    username: "dewaqintoro",
  };
  return (
    <div>
      <UserDetail data={data} />
    </div>
  );
};

export default UserPage;
