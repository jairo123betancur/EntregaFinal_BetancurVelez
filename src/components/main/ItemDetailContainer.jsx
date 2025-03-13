import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import './ItemDetailContainer.css';
import app from '../../firebaseConfig';
import AddItemButton from './AddItemButton';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);
    const itemRef = doc(db, 'products', itemId);

    const getItem = async () => {
      const itemSnapshot = await getDoc(itemRef);
      if (itemSnapshot.exists()) {
        setItem({ id: itemSnapshot.id, ...itemSnapshot.data() });
      } else {
        setItem(null);
      }
    };

    getItem();
  }, [itemId]);

  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <AddItemButton item={item} /> {}
    </div>
  );
};

export default ItemDetailContainer;