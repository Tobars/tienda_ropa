export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface CarritoProduct {
  productId: number;  // ID del producto
  quantity: number;   // Cantidad del producto en el carrito
}

export interface Carritos {
  id: number;       // ID del carrito
  userId: number;   // ID del usuario al que pertenece el carrito
  date: string;     // Fecha del carrito
  products: CarritoProduct[];  // Lista de productos en el carrito (con solo productId y quantity)
}
