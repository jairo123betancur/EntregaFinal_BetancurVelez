import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useCart();

  // Calcular la cantidad total de productos en el carrito
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-widget">
      <span role="img" aria-label="cart">🛒</span>
      {totalItems > 0 && (
        <span className="cart-notification">{totalItems}</span>
      )}
    </Link>
  );
};

export default CartWidget;