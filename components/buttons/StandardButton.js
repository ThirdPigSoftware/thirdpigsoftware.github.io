export const StandardButton = ({
  text,
  onClick,
  textSize = '',
  alt,
  border,
  icon = false
}) => (
  <button
    className={`pl-6 pr-4 py-2 font-brand
    ${alt ? 'border-2 text-white' : 'bg-accent-3 text-white hover:bg-accent-1'} 
    ${border ? 'border-2' : ''} 
    rounded-2xl border-white 
    ${textSize} buzz-out-on-hover transition-all duration-200`}
    onClick={onClick}
  >
    {icon ? <i className={`${icon} mr-2 -ml-2`}></i> : null}
    {text}
  </button>
)
