# E-commerce construido con React Js y Firebase

Este proyecto es mi entrega final del curso de React Js de Coderhouse. Consiste en un e-commerce de productos electrónicos, desarrollado como una single-page application.

## Captura de la web-app

![Captura de la web-app](https://github.com/jairo123betancur/EntregaFinal_BetancurVelez/blob/main/public/img/web.png) 

## Link al deploy

[Ver deploy](https://entrega-final-betancur-velez.vercel.app/)

## Link al Demo

[Ver gif](https://github.com/jairo123betancur/EntregaFinal_BetancurVelez/blob/main/public/img/tienda_final.gif)
---

## Creado con

- **Create React App**
- **Firebase** (Firestore y Authentication)
- **React Router DOM** (para el ruteo)
- **Formik** y **Yup** (para manejo y validación de formularios)
- **React Toastify** (para notificaciones)
- **CSS** (para estilos personalizados)

---

## Funcionalidades desarrolladas

### Pensando en la experiencia de usuario

- **Navegabilidad**: Simula una multi-page application con rutas dinámicas.
- **Diseño responsivo**: Mobile First, adaptable a cualquier dispositivo.
- **Loader**: Se muestra un spinner durante los procesos que pueden demorar.
- **Página inicial**: Muestra todos los productos disponibles.
- **Barra de navegación**: Visible en todo momento con enlaces a categorías y carrito.
- **Logo**: Navega a la página de inicio.
- **Categorías**: Los enlaces cambian su estilo cuando el usuario está en esa categoría.
- **Cart Widget**: Muestra la cantidad de productos en el carrito y navega a la página del carrito.
- **Cards de productos**: Navegan al detalle de cada producto.
- **Detalle del producto**: Incluye un selector de cantidad y un botón para agregar al carrito.
- **Carrito persistente**: Los productos cargados en el carrito persisten en el localStorage.
- **Vista del carrito**: Muestra el detalle de productos, cantidad, precio unitario, subtotal y total.
- **Botones en el carrito**:
  - Aumentar/disminuir cantidad.
  - Eliminar un producto.
  - Vaciar el carrito.
- **Formulario de compra**: El cliente debe completar sus datos antes de finalizar la compra.
- **Modal de confirmación**: Muestra el resultado de la compra (éxito o error) con el ID de la orden.

### Pensando en la seguridad del proceso

- **Base de datos**: Los productos están cargados en Firestore.
- **Stock en tiempo real**: Cada vez que se carga una página, se verifica el stock disponible en Firestore.
- **Validaciones**:
  - Los botones de cantidad están limitados por el stock disponible.
  - El formulario tiene validaciones (nombre, teléfono, correo y dirección).
- **Proceso de compra**:
  - Verifica el stock de todos los productos antes de generar la orden.
  - Actualiza el stock en Firestore si la compra es exitosa.
- **Variables de entorno**: Las credenciales de Firebase están protegidas en un archivo `.env`.
