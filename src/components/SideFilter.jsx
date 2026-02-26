import SideFilterItem from "./SideFilterItem";

export default function SideFilter({ onClick, activeCategory }) {
  return (
    <div className="w-full lg:w-60">
      <h1 className="text-3xl border-b">Categories</h1>
      <div className="flex flex-col md:flex-row lg:flex-col md:gap-x-10">
        {/* product filter */}
        <div className="shadow-lg mt-10 flex-1">
          <h1 className="p-2 italic">Product Type</h1>
          <ul className="flex flex-col font-bold">
            <SideFilterItem
              name="men's clothing"
              title="Men's clothing"
              onClick={onClick}
              activeCategory={activeCategory}
              type="products"
            />
            <SideFilterItem
              name="jewelery"
              title="Jewelery"
              onClick={onClick}
              activeCategory={activeCategory}
              type="products"
            />
            <SideFilterItem
              name="electronics"
              title="Electronics"
              onClick={onClick}
              activeCategory={activeCategory}
              type="products"
            />
            <SideFilterItem
              name="women's clothing"
              title="Women's clothing"
              onClick={onClick}
              activeCategory={activeCategory}
              type="products"
            />
          </ul>
        </div>
        {/* price filter */}
        <div className="shadow-lg mt-10 flex-1">
          <h1 className="p-2 italic">Price range</h1>
          <ul>
            <SideFilterItem
              name="50"
              title="Less than $50"
              onClick={onClick}
              activeCategory={activeCategory}
              type="prices"
            />
            <SideFilterItem
              name="100"
              title="Less than $100"
              onClick={onClick}
              activeCategory={activeCategory}
              type="prices"
            />
            <SideFilterItem
              name="500"
              title="Less than $500"
              onClick={onClick}
              activeCategory={activeCategory}
              type="prices"
            />
            <SideFilterItem
              name="501"
              title="$500+"
              onClick={onClick}
              activeCategory={activeCategory}
              type="prices"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

// men's clothing
// jewelery
// electronics
// women's clothing
