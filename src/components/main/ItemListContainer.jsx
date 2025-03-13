import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css';
import app from '../../firebaseConfig';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore(app);
    const productsCollection = collection(db, 'products');

    const getProducts = async () => {
      let q;
      if (categoryId) {
        q = query(productsCollection, where('category', '==', categoryId));
      } else {
        q = productsCollection;
      }

      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(products);
    };

    getProducts();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Categoría: ${categoryId.replace('-', ' ')}` : 'Todos los productos'}</h2>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <p>Stock: {item.stock}</p>
            <Link to={`/item/${item.id}`} className="btn-detail">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;