import MenuItem from "./Menu.item";

export interface IItem {
  title: string;
  img: string;
  link: string;
}

const Menus = () => {
  const menus:IItem[] = [
    {
      title: "@dewaqintoro",
      img: "https://picsum.photos/200",
      link: "https://instagram.com/dewaqintoro"
    },
    {
      title: "@ngodingbentar",
      img: "https://picsum.photos/200",
      link: "https://instagram.com/ngodingbentar"
    },
    {
      title: "Email",
      img: "https://picsum.photos/200",
      link: "mailto:dewaqintoro@gmail.com"
    }
  ]
  return (
    <div className="bg-white h-full flex flex-col gap-4 p-4">
      {menus.map((item, index) => (
        <MenuItem key={index} data={item} />
      ))}
    </div>
  );
};

export default Menus;
