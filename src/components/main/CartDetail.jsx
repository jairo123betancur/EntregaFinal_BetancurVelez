import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './CartDetail.css';

const CartDetail = () => {
  const { cart, addToCart, removeFromCart, clearCartWithConfirmation } = useCart();
  const navigate = useNavigate();

  const handleAddQuantity = (item) => {
    if (item.quantity < item.stock) {
      addToCart(item, 1);
      toast.success('Cantidad aumentada');
    } else {
      toast.error('No hay suficiente stock para este producto.');
    }
  };

  const handleRemoveQuantity = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1);
      toast.success('Cantidad reducida');
    } else {
      removeFromCart(item.id);
    }
  };

  const handleCheckout = () => {
    const hasInvalidStock = cart.some((item) => item.quantity > item.stock);
    if (hasInvalidStock) {
      toast.error('Algunos productos no tienen suficiente stock. Ajusta las cantidades.');
    } else {
      navigate('/checkout');
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-detail">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                <p>Stock disponible: {item.stock}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleRemoveQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddQuantity(item)}>+</button>
                </div>
                {item.quantity > item.stock && (
                  <p className="stock-error">No hay suficiente stock.</p>
                )}
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${total}</p>
          </div>
          <div className="cart-actions">
            <button onClick={clearCartWithConfirmation}>Vaciar carrito</button>
            <button onClick={handleCheckout}>Finalizar compra</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDetail;