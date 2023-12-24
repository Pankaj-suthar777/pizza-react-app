import { useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import UpdateButtonQuantity from './UpdateButtonQuantity';
import DeleteBtn from './deleteBtn';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(
    (state) =>
      state.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity ?? 0,
  );

  return (
    <li className="flex flex-wrap items-center justify-between py-3">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>
      </div>
      <div className="flex">
        <UpdateButtonQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        ></UpdateButtonQuantity>
        <DeleteBtn pizzaId={pizzaId}></DeleteBtn>
      </div>
    </li>
  );
}

export default CartItem;
