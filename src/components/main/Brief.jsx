// Brief.jsx
import { useCart } from '../../context/CartContext';

const Brief = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Resumen de compra</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Brief;