import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import Modal from './Modal';
import Form from './Form';
import './Checkout.css';
import app from '../../firebaseConfig';

const Checkout = () => {
  const { cart, clearCart } = useCart(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [total, setTotal] = useState(0);

  const handleSubmit = async (formData) => {
    const hasInvalidStock = cart.some((item) => item.quantity > item.stock);
    if (hasInvalidStock) {
      alert('Algunos productos no tienen suficiente stock. Ajusta las cantidades.');
      return;
    }

    const db = getFirestore(app);

    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(cartTotal);

    const order = {
      user: formData,
      items: cart,
      total: cartTotal,
    };

    try {
      const ordersCollection = collection(db, 'ordens');
      const orderRef = await addDoc(ordersCollection, order);
      setOrderId(orderRef.id);

      cart.forEach(async (item) => {
        const productRef = doc(db, 'products', item.id);
        await updateDoc(productRef, {
          stock: item.stock - item.quantity,
        });
      });

      setCustomerData(formData);
      setIsModalOpen(true);
      clearCart(); // Vaciar el carrito sin confirmación
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>¡Compra realizada con éxito!</h3>
        <p>Tu número de pedido es: <strong>{orderId}</strong></p>
        {customerData && (
          <div className="brief">
            <h4>Resumen de la compra</h4>
            <p>Nombre: {customerData.name}</p>
            <p>Teléfono: {customerData.phone}</p>
            <p>Correo: {customerData.email}</p>
            <p>Dirección: {customerData.address}</p>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            <p>Total: ${total}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Checkout;