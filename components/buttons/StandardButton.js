export const StandardButton = ({
  text,
  fullWidth = false,
  onClick,
  textSize = '',
  alt,
  border,
  icon = false
}) => (
  <button
    className={`pl-6 pr-4 py-2 font-brand
    ${alt ? 'border-2 text-accent-3 bg-white border-accent-3' : 'bg-accent-3 border-white border-2 text-white hover:bg-accent-1'} 
    ${border ? 'border-2' : ''} 
    rounded-2xl border-white 
    ${textSize} buzz-out-on-hover transition-all duration-200 ${fullWidth ? "w-96 mt-2 md:w-auto" : ""} mx-2`}
    onClick={onClick}
  >
    {icon ? <i className={`${icon} mr-2 -ml-2 mt-1`}></i> : null}
    {text}
  </button>
)
