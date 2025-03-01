const mockData = [
  { title: "item1", href: "/" },
  { title: "item2", href: "/item2" },
  { title: "item3", href: "/item3" },
  { title: "item4", href: "/item4" },
  { title: "item5", href: "/item5" },
];

const Navbar = () => {
  return (
    <div className=" flex w-full justify-between items-center px-6 bg-amber-300 py-2">
      {/* Icon */}
      <div className=" text-2xl uppercase">Icon</div>

      {/* Menu */}
      <ul className=" flex gap-2">
        {mockData.map((item, index) => (
          <li
            key={index}
            className=" py-1 px-2 hover:bg-amber-100 hover:text-amber-500 duration-150 transition ease-in-out rounded-lg cursor-pointer uppercase"
          >
            {item.title}
          </li>
        ))}
      </ul>

      {/* Theme Button */}
      <button className=" hover:bg-amber-100 hover:text-amber-500 py-1 px-2 bg-red-300 duration-300 transition-all ease-in-out rounded-lg cursor-pointer">
        Theme
      </button>
    </div>
  );
};
export default Navbar;
