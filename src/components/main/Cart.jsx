import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío. <Link to="/">¡Sigue comprando!</Link></p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout">Finalizar compra</Link>
        </>
      )}
    </div>
  );
};

export default Cart;