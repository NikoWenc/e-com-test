export default function SideFilterList({ name, onClick, activeCategory }) {
  return (
    <li>
      <label
        htmlFor={name}
        className="flex justify-between items-center w-full p-2 border-b"
      >
        {name}
        <input
          id={name}
          type="checkbox"
          checked={activeCategory.includes(name)}
          onChange={() => {
            onClick(name);
          }}
        />
      </label>
    </li>
  );
}
