export const StandardButton = ({ text, onClick, alt }) => (
  <button
    className={`p-4 md:px-10 py-2 ml-2 ${
      alt ? 'border-2 text-white' : 'bg-accent-1  text-white'
    } font-bold rounded-2xl border-white buzz-out-on-hover`}
    onClick={onClick}
  >
    {text}
  </button>
)
