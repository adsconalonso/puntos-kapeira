const menuData = [
  {
    category: "Combos Alma Máter",
    description: "Dos antojos. Un mejor precio.",
    items: [
      { name: "Pastel de tocineta + Perico", price: "225 pts", originalPrice: "300 pts", save: "AHORRA 75 pts" },
      { name: "Recarga de termo 500ml", price: "225 pts", originalPrice: "312.5 pts", save: "AHORRA 87.5 pts" },
      { name: "Palito de queso + Capuccino", price: "300 pts", originalPrice: "412.5 pts", save: "AHORRA 112.5 pts" },
      { name: "Torta de zanahoria + Tinto 9 oz", price: "287.5 pts", originalPrice: "362.5 pts", save: "AHORRA 75 pts" },
      { name: "Sándwich Kapeira (1 porc) + Milo caliente", price: "375 pts", originalPrice: "487.5 pts", save: "AHORRA 112.5 pts" }
    ]
  },
  {
    category: "Bebidas Calientes",
    subcategories: [
      {
        name: "Cafés Calientes",
        items: [
          { name: "Tinto 4 oz", price: "62.5 pts" },
          { name: "Tinto 7 oz", price: "87.5 pts" },
          { name: "Tinto 9 oz", price: "112.5 pts" },
          { name: "Perico", price: "125 pts" },
          { name: "Espresso", price: "125 pts" },
          { name: "Espresso doble", price: "150 pts" },
          { name: "Americano", price: "162.5 pts" },
          { name: "Macciato", price: "162.5 pts" },
          { name: "Latte grande", price: "187.5 pts" },
          { name: "Carajillo", price: "237.5 pts" },
          { name: "Capuccino", price: "237.5 pts" },
          { name: "Mocaccino", price: "250 pts" },
          { name: "Capuccino con amaretto", price: "362.5 pts" },
          { name: "Filtrados (3 tazas)", description: "Chemex, V60, Melita y Origami", price: "625 pts" }
        ]
      },
      {
        name: "Infusiones",
        items: [
          { name: "Infusión herbal", description: "Albahaca, Anís, Canela, Cidrón, Limoncillo, Manzanilla y Toronjil.", price: "62.5 pts" },
          { name: "Infusión frutal", description: "Frutos rojos, Frutos salvajes, Frutos tropicales y Frutos verdes.", price: "87.5 pts" }
        ]
      },
      {
        name: "Aromáticas",
        items: [
          { name: "Aromáticas artesanales", description: "Frutos rojos, Frutos amarillos, Breva canela, Jengibre/limón/panela y Jengibre/limón/miel.", price: "150 pts" }
        ]
      },
      {
        name: "Otras Bebidas Calientes",
        items: [
          { name: "Canelazo", price: "137.5 pts" },
          { name: "Chocolate Kapeira", price: "187.5 pts" },
          { name: "Milo caliente", price: "187.5 pts" },
          { name: "Té chai", price: "250 pts" },
          { name: "Té masala chai", price: "250 pts" },
          { name: "Té matcha", price: "250 pts" }
        ]
      }
    ]
  },
  {
    category: "Bebidas Frías",
    subcategories: [
      {
        name: "Cafés Fríos",
        items: [
          { name: "Cold coffee Kapeira", price: "212.5 pts" },
          { name: "Cold Coffee naranja", price: "237.5 pts" },
          { name: "Cold Coffee campesino", price: "237.5 pts" },
          { name: "Cold Coffee tamarindo", price: "237.5 pts" },
          { name: "Cold Coffee en botella", price: "250 pts" },
          { name: "Café Lattee frío", price: "250 pts" },
          { name: "Limonada de café", price: "250 pts" },
          { name: "Café ópera", price: "450 pts" }
        ]
      },
      {
        name: "Granizados y Frappés",
        items: [
          { name: "Granizado de café mediano", price: "200 pts" },
          { name: "Granizado de café grande", price: "275 pts" },
          { name: "Frappés artesanales", description: "Panela/limón, Frutos rojos, Frutos amarillos y Mandarina fresa.", price: "250 pts" }
        ]
      },
      {
        name: "Sodas",
        items: [
          { name: "Sodas naturales", description: "Frutos rojos y Frutos amarillos.", price: "250 pts" },
          { name: "Sodas artesanales", description: "Maracuyá, tamarindo, mango biche, sandía/limón y frutos rojos.", price: "312.5 pts" }
        ]
      },
      {
        name: "Malteadas",
        items: [
          { name: "Malteadas artesanales", description: "Café, Chocolate, Frutos amarillos, Frutos rojos, Galleta limón y Maracuyá hershey's.", price: "462.5 pts" }
        ]
      },
      {
        name: "Limonadas",
        items: [
          { name: "Limonada natural", price: "200 pts" },
          { name: "Limonada de café", price: "250 pts" },
          { name: "Limonadas artesanales", description: "Mango biche, Cereza, Coco, Lychee y hierbabuena.", price: "300 pts" }
        ]
      },
      {
        name: "Otras Bebidas Frías",
        items: [
          { name: "Vaso de leche", price: "125 pts" },
          { name: "Té jengibre limón", price: "150 pts" },
          { name: "Té de frutos rojos", price: "150 pts" },
          { name: "Té de frutos amarillos", price: "150 pts" },
          { name: "Milo mediano", price: "225 pts" },
          { name: "Milo grande", price: "300 pts" },
          { name: "Té chai", price: "300 pts" },
          { name: "Té masala chai", price: "300 pts" },
          { name: "Té matcha", price: "300 pts" }
        ]
      },
      {
        name: "Jugos Naturales",
        items: [
          { name: "Jugo naturales en agua", description: "Maracuyá, Mango, Mandarina, Fresa, Guanabana, y Mora.", price: "175 pts" },
          { name: "Jugo naturales en leche", description: "Maracuyá, Mango, Fresa, Guanabana, y Mora.", price: "225 pts" }
        ]
      },
      {
        name: "Varios y Gaseosas",
        items: [
          { name: "Bretaña 10 oz", price: "125 pts" },
          { name: "Agua 600ml", price: "100 pts" },
          { name: "Coca Cola sin azúcar", price: "150 pts" },
          { name: "Coold Drink (soda de sabores)", price: "150 pts" },
          { name: "Soda Hatsu", price: "150 pts" }
        ]
      }
    ]
  },
  {
    category: "Comidas y Repostería",
    subcategories: [
      {
        name: "Comidas Artesanales",
        items: [
          { name: "Sándwich Kapeira (1 porc.)", price: "300 pts" },
          { name: "Sándwich Kapeira (2 porc.)", price: "500 pts" }
        ]
      },
      {
        name: "Tortas de la Abuela",
        items: [
          { name: "Almohabana", price: "375 pts" },
          { name: "Zanahoria", price: "250 pts" },
          { name: "Chocolate", price: "250 pts" },
          { name: "Maracuyá", price: "250 pts" }
        ]
      },
      {
        name: "Pastelería Hojaldrada",
        items: [
          { name: "Pastel de carne", price: "175 pts" },
          { name: "Pastel de queso", price: "175 pts" },
          { name: "Palito de queso", price: "175 pts" },
          { name: "Croissant de queso", price: "175 pts" },
          { name: "Pastel de tocineta", price: "175 pts" },
          { name: "Pastel ranchero", price: "175 pts" },
          { name: "Pastel hawaiano", price: "175 pts" },
          { name: "Pastel de jamón y queso", price: "175 pts" },
          { name: "Pastel gloria", price: "175 pts" },
          { name: "Pastel de arequipe", price: "175 pts" },
          { name: "Pastel de arequipe y queso", price: "175 pts" }
        ]
      },
      {
        name: "Galletas y Alfajores",
        items: [
          { name: "Galleta tres chocolates rellena", price: "212.5 pts" },
          { name: "Alfajores", price: "162.5 pts" },
          { name: "Galleta de maní", price: "150 pts" },
          { name: "Galleta de chocolate", price: "150 pts" },
          { name: "Galleta de avena (sin azúcar)", price: "150 pts" }
        ]
      },
      {
        name: "Antojitos",
        items: [
          { name: "Turrón mango biche michelado", price: "150 pts" },
          { name: "Papitas snack", description: "Naturales, Mixtas naturales, Limón, Mixtas limón, Tomate y Maduritos.", price: "200 pts" },
          { name: "Café affogato", price: "300 pts" },
          { name: "Brownie", price: "250 pts" },
          { name: "Brownie con helado", price: "400 pts" }
        ]
      }
    ]
  },
  {
    category: "Adicionales",
    items: [
      { name: "Miel Pura de Abejas 300g", price: "742.5 pts" }
    ]
  }
];
