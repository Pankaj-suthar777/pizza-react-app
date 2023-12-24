import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartTotalPrice, getCartTotalQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartItem = useSelector(getCartTotalQuantity);
  const totalCartPrice = useSelector(getCartTotalPrice);

  if (!totalCartItem) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-6 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartItem} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
