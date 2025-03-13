import { useState } from 'react';

const ItemQuantitySelector = ({ stock, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= stock) {
      setQuantity(value);
      onQuantityChange(value);
    }
  };

  return (
    <input
      type="number"
      min="1"
      max={stock}
      value={quantity}
      onChange={handleChange}
    />
  );
};

export default ItemQuantitySelector;