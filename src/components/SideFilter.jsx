import SideFilterList from "./SideFilterList";

export default function SideFilter({ onClick, activeCategory }) {
  return (
    <div className="w-60 p-5">
      <h1 className="text-3xl border-b">Categories</h1>
      <div className="shadow-lg mt-10">
        <ul className="flex flex-col font-bold">
          <SideFilterList
            name="men's clothing"
            onClick={onClick}
            activeCategory={activeCategory}
          />
          <SideFilterList
            name="jewelery"
            onClick={onClick}
            activeCategory={activeCategory}
          />
          <SideFilterList
            name="electronics"
            onClick={onClick}
            activeCategory={activeCategory}
          />
          <SideFilterList
            name="women's clothing"
            onClick={onClick}
            activeCategory={activeCategory}
          />
        </ul>
      </div>
    </div>
  );
}

// men's clothing
// jewelery
// electronics
// women's clothing
