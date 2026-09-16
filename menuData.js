const menuData = [
  {
    category: "Combos Alma Máter",
    description: "Dos antojos. Un mejor precio.",
    items: [
      { name: "Pastel de tocineta + Perico", price: "9.0K", originalPrice: "12.0K", save: "AHORRA 3.0K" },
      { name: "Recarga de termo 500ml", price: "9.0K", originalPrice: "12.5K", save: "AHORRA 3.5K" },
      { name: "Palito de queso + Capuccino", price: "12.0K", originalPrice: "16.5K", save: "AHORRA 4.5K" },
      { name: "Torta de zanahoria + Tinto 9 oz", price: "11.5K", originalPrice: "14.5K", save: "AHORRA 3.0K" },
      { name: "Sándwich Kapeira (1 porc) + Milo caliente", price: "15.0K", originalPrice: "19.5K", save: "AHORRA 4.5K" }
    ]
  },
  {
    category: "Bebidas Calientes",
    subcategories: [
      {
        name: "Cafés Calientes",
        items: [
          { name: "Tinto 4 oz", price: "2.5K" },
          { name: "Tinto 7 oz", price: "3.5K" },
          { name: "Tinto 9 oz", price: "4.5K" },
          { name: "Perico", price: "5.0K" },
          { name: "Espresso", price: "5.0K" },
          { name: "Espresso doble", price: "6.0K" },
          { name: "Americano", price: "6.5K" },
          { name: "Macciato", price: "6.5K" },
          { name: "Latte grande", price: "7.5K" },
          { name: "Carajillo", price: "9.5K" },
          { name: "Capuccino", price: "9.5K" },
          { name: "Mocaccino", price: "10.0K" },
          { name: "Capuccino con amaretto", price: "14.5K" },
          { name: "Filtrados (3 tazas)", description: "Chemex, V60, Melita y Origami", price: "25.0K" }
        ]
      },
      {
        name: "Infusiones",
        items: [
          { name: "Infusión herbal", description: "Albahaca, Anís, Canela, Cidrón, Limoncillo, Manzanilla y Toronjil.", price: "2.5K" },
          { name: "Infusión frutal", description: "Frutos rojos, Frutos salvajes, Frutos tropicales y Frutos verdes.", price: "3.5K" }
        ]
      },
      {
        name: "Aromáticas",
        items: [
          { name: "Aromáticas artesanales", description: "Frutos rojos, Frutos amarillos, Breva canela, Jengibre/limón/panela y Jengibre/limón/miel.", price: "6.0K" }
        ]
      },
      {
        name: "Otras Bebidas Calientes",
        items: [
          { name: "Canelazo", price: "5.5K" },
          { name: "Chocolate Kapeira", price: "7.5K" },
          { name: "Milo caliente", price: "7.5K" },
          { name: "Té chai", price: "10.0K" },
          { name: "Té masala chai", price: "10.0K" },
          { name: "Té matcha", price: "10.0K" }
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
          { name: "Cold coffee Kapeira", price: "8.5K" },
          { name: "Cold Coffee naranja", price: "9.5K" },
          { name: "Cold Coffee campesino", price: "9.5K" },
          { name: "Cold Coffee tamarindo", price: "9.5K" },
          { name: "Cold Coffee en botella", price: "10.0K" },
          { name: "Café Lattee frío", price: "10.0K" },
          { name: "Limonada de café", price: "10.0K" },
          { name: "Café ópera", price: "18.0K" }
        ]
      },
      {
        name: "Granizados y Frappés",
        items: [
          { name: "Granizado de café mediano", price: "8.0K" },
          { name: "Granizado de café grande", price: "11.0K" },
          { name: "Frappés artesanales", description: "Panela/limón, Frutos rojos, Frutos amarillos y Mandarina fresa.", price: "10.0K" }
        ]
      },
      {
        name: "Sodas",
        items: [
          { name: "Sodas naturales", description: "Frutos rojos y Frutos amarillos.", price: "10.0K" },
          { name: "Sodas artesanales", description: "Maracuyá, tamarindo, mango biche, sandía/limón y frutos rojos.", price: "12.5K" }
        ]
      },
      {
        name: "Malteadas",
        items: [
          { name: "Malteadas artesanales", description: "Café, Chocolate, Frutos amarillos, Frutos rojos, Galleta limón y Maracuyá hershey's.", price: "18.5K" }
        ]
      },
      {
        name: "Limonadas",
        items: [
          { name: "Limonada natural", price: "8.0K" },
          { name: "Limonada de café", price: "10.0K" },
          { name: "Limonadas artesanales", description: "Mango biche, Cereza, Coco, Lychee y hierbabuena.", price: "12.0K" }
        ]
      },
      {
        name: "Otras Bebidas Frías",
        items: [
          { name: "Vaso de leche", price: "5.0K" },
          { name: "Té jengibre limón", price: "6.0K" },
          { name: "Té de frutos rojos", price: "6.0K" },
          { name: "Té de frutos amarillos", price: "6.0K" },
          { name: "Milo mediano", price: "9.0K" },
          { name: "Milo grande", price: "12.0K" },
          { name: "Té chai", price: "12.0K" },
          { name: "Té masala chai", price: "12.0K" },
          { name: "Té matcha", price: "12.0K" }
        ]
      },
      {
        name: "Jugos Naturales",
        items: [
          { name: "Jugo naturales en agua", description: "Maracuyá, Mango, Mandarina, Fresa, Guanabana, y Mora.", price: "7.0K" },
          { name: "Jugo naturales en leche", description: "Maracuyá, Mango, Fresa, Guanabana, y Mora.", price: "9.0K" }
        ]
      },
      {
        name: "Varios y Gaseosas",
        items: [
          { name: "Bretaña 10 oz", price: "5.0K" },
          { name: "Agua 600ml", price: "4.0K" },
          { name: "Coca Cola sin azúcar", price: "6.0K" },
          { name: "Coold Drink (soda de sabores)", price: "6.0K" },
          { name: "Soda Hatsu", price: "6.0K" }
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
          { name: "Sándwich Kapeira (1 porc.)", price: "12.0K" },
          { name: "Sándwich Kapeira (2 porc.)", price: "20.0K" }
        ]
      },
      {
        name: "Tortas de la Abuela",
        items: [
          { name: "Almohabana", price: "15.0K" },
          { name: "Zanahoria", price: "10.0K" },
          { name: "Chocolate", price: "10.0K" },
          { name: "Maracuyá", price: "10.0K" }
        ]
      },
      {
        name: "Pastelería Hojaldrada",
        items: [
          { name: "Pastel de carne", price: "7.0K" },
          { name: "Pastel de queso", price: "7.0K" },
          { name: "Palito de queso", price: "7.0K" },
          { name: "Croissant de queso", price: "7.0K" },
          { name: "Pastel de tocineta", price: "7.0K" },
          { name: "Pastel ranchero", price: "7.0K" },
          { name: "Pastel hawaiano", price: "7.0K" },
          { name: "Pastel de jamón y queso", price: "7.0K" },
          { name: "Pastel gloria", price: "7.0K" },
          { name: "Pastel de arequipe", price: "7.0K" },
          { name: "Pastel de arequipe y queso", price: "7.0K" }
        ]
      },
      {
        name: "Galletas y Alfajores",
        items: [
          { name: "Galleta tres chocolates rellena", price: "8.5K" },
          { name: "Alfajores", price: "6.5K" },
          { name: "Galleta de maní", price: "6.0K" },
          { name: "Galleta de chocolate", price: "6.0K" },
          { name: "Galleta de avena (sin azúcar)", price: "6.0K" }
        ]
      },
      {
        name: "Antojitos",
        items: [
          { name: "Turrón mango biche michelado", price: "6.0K" },
          { name: "Papitas snack", description: "Naturales, Mixtas naturales, Limón, Mixtas limón, Tomate y Maduritos.", price: "8.0K" },
          { name: "Café affogato", price: "12.0K" },
          { name: "Brownie", price: "10.0K" },
          { name: "Brownie con helado", price: "16.0K" }
        ]
      }
    ]
  },
  {
    category: "Adicionales",
    items: [
      { name: "Miel Pura de Abejas 300g", price: "29.7K" }
    ]
  }
];
