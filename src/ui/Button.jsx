import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm inline-blocktext-stone-800 duration-400 focus:offset-2 rounded-full bg-yellow-500 font-semibold uppercase tracking-wide transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md-5 md-2.5 text-xs',
    round:
      base +
      'px-2.5  py-1 md:px-3.5 md:py-2 text-sm w-7  h-7 flex justify-center items-center',
    secondary:
      'text-sm inline-blocktext-stone-800 duration-400 focus:offset-2 rounded-full border-2 border-stone-400 font-semibold uppercase tracking-wide transition-colors focus:text-stone-500 hover:bg-stone-400 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2  px-3.5 py-2.5',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
