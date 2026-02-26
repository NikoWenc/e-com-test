export default function SideFilterItem({
  name,
  onClick,
  activeCategory,
  title,
  type,
}) {
  return (
    <li>
      <label
        htmlFor={name}
        className="flex justify-between items-center w-full p-2 border-b"
      >
        {title}
        <input
          id={name}
          type="checkbox"
          checked={
            activeCategory.products.includes(name) ||
            activeCategory.prices.includes(name)
          }
          onChange={() => {
            onClick(name, type);
          }}
        />
      </label>
    </li>
  );
}
