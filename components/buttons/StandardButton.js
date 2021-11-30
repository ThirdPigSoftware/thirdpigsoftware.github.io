export const StandardButton = ({ text, onClick }) => (
  <button
    className='p-4 md:px-10 py-2 ml-2 bg-accent-1 font-bold rounded-2xl border-white buzz-out-on-hover text-white'
    onClick={onClick}
  >
    {text}
  </button>
)
