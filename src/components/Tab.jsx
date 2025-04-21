const Tab = ({ tabTitle, onClick, isTabActive }) => {
  return (
    <button
      onClick={onClick}
      className={`
         rounded-full text-sm px-4 py-1 cursor-pointer font-500 shadow outline outline-neutral-300 hover:border-2 hover:border-custom-red-700
        ${
          isTabActive
            ? "bg-custom-red-500 hover:bg-custom-red-700 text-neutral-100 hover:text-neutral-50"
            : "bg-neutral-0 hover:bg-neutral-50 text-neutral-800 hover:text-neutral-600"
        }`}
    >
      {tabTitle}
    </button>
  );
};

export default Tab;
