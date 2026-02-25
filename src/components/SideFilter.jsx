import SideFilterList from "./SideFilterList";

export default function SideFilter({ onClick, activeCategory }) {
  return (
    <div className="w-60 p-5">
      <h1 className="text-3xl border-b">Categories</h1>
      {/* product filter */}
      <div className="shadow-lg mt-10">
        <h1 className="p-2 italic">Product Type</h1>
        <ul className="flex flex-col font-bold">
          <SideFilterList
            name="men's clothing"
            title="men's clothing"
            onClick={onClick}
            activeCategory={activeCategory}
            type="products"
          />
          <SideFilterList
            name="jewelery"
            title="jewelery"
            onClick={onClick}
            activeCategory={activeCategory}
            type="products"
          />
          <SideFilterList
            name="electronics"
            title="electronics"
            onClick={onClick}
            activeCategory={activeCategory}
            type="products"
          />
          <SideFilterList
            name="women's clothing"
            title="women's clothing"
            onClick={onClick}
            activeCategory={activeCategory}
            type="products"
          />
        </ul>
      </div>
      {/* price filter */}
      <div className="shadow-lg mt-10">
        <h1 className="p-2 italic">Price range</h1>
        <ul>
          <SideFilterList
            name="50"
            title="Less than $50"
            onClick={onClick}
            activeCategory={activeCategory}
            type="prices"
          />
          <SideFilterList
            name="100"
            title="Less than $100"
            onClick={onClick}
            activeCategory={activeCategory}
            type="prices"
          />
          <SideFilterList
            name="500"
            title="Less than $500"
            onClick={onClick}
            activeCategory={activeCategory}
            type="prices"
          />
          <SideFilterList
            name="501"
            title="$500+"
            onClick={onClick}
            activeCategory={activeCategory}
            type="prices"
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
