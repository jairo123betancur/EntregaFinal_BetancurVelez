import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';

const AddItemButton = ({ item }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (item.stock === 0) {
      alert('Este producto no tiene stock disponible.');
      return;
    }
    if (quantity > item.stock) {
      alert('No hay suficiente stock para la cantidad solicitada.');
      return;
    }
    addToCart(item, quantity);
  };

  return (
    <div>
      <ItemQuantitySelector stock={item.stock} onQuantityChange={setQuantity} />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default AddItemButton;