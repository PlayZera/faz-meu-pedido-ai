import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Lanches');
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'X-Burger',
      description: 'Pão, hambúrguer, queijo, alface e tomate',
      price: 18.90,
      category: 'Lanches',
      image: 'https://placehold.co/150?text=X-Burger'
    },
    {
      id: 2,
      name: 'X-Salada',
      description: 'Pão, hambúrguer, queijo, presunto, alface e tomate',
      price: 21.50,
      category: 'Lanches',
      image: 'https://placehold.co/150?text=X-Salada'
    },
    {
      id: 3,
      name: 'X-Bacon',
      description: 'Pão, hambúrguer, queijo, bacon, alface e tomate',
      price: 23.90,
      category: 'Lanches',
      image: 'https://placehold.co/150?text=X-Bacon'
    },
    {
      id: 4,
      name: 'Batata Frita',
      description: 'Porção de batata frita crocante',
      price: 12.00,
      category: 'Acompanhamentos',
      image: 'https://placehold.co/150?text=Batata'
    },
    {
      id: 5,
      name: 'Coca-Cola Lata',
      description: 'Lata 350ml',
      price: 6.50,
      category: 'Bebidas',
      image: 'https://placehold.co/150?text=Coca'
    },
    {
      id: 6,
      name: 'Suco Natural',
      description: 'Suco de laranja, maracujá ou limão (500ml)',
      price: 8.90,
      category: 'Bebidas',
      image: 'https://placehold.co/150?text=Suco'
    },
  ];

  const categories = [...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => product.category === activeCategory);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho */}
      <header className="bg-red-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-300"><span>🍕</span>Faz Meu Pedido AI</h1>
          <div className="relative">
            <button className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Categorias */}
      <div className="container mx-auto p-4 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category ? 'bg-red-900 text-yellow-300' : 'bg-white text-yellow-100 shadow'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Produtos */}
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">{activeCategory}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-red-600">R$ {product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700 transition"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2025 Faz Meu Pedido AI - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;