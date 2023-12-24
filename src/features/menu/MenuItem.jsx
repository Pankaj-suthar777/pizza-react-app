/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem } from '../cart/cartSlice';
import DeleteBtn from '../cart/deleteBtn';
import UpdateButtonQuantity from '../cart/UpdateButtonQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(
    (state) =>
      state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0,
  );

  const isInCart = currentQuantity > 0;

  function handlerOnAdd() {
    const newItem = {
      name,
      unitPrice,
      pizzaId: id,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-6">
              <UpdateButtonQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              ></UpdateButtonQuantity>

              <DeleteBtn pizzaId={id}></DeleteBtn>
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handlerOnAdd} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
