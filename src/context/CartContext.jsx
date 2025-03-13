import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
      toast.success('Producto modificado con éxito');
    } else {
      setCart([...cart, { ...item, quantity }]);
      toast.success('Producto agregado al carrito');
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
    toast.success('Producto eliminado del carrito');
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Carrito vaciado con éxito');
  };

  const clearCartWithConfirmation = () => {
    if (cart.length > 0) {
      const confirmClear = window.confirm('¿Estás seguro que quieres vaciar el carrito?');
      if (confirmClear) {
        clearCart();
      }
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, clearCartWithConfirmation }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);