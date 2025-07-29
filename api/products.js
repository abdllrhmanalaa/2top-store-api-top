module.exports = (req, res) => {
  const baseProducts = [
    {
      name: "iPhone 14 Pro Max",
      brand: "Apple",
      price: 1199,
      image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "Galaxy S23 Ultra",
      brand: "Samsung",
      price: 1099,
      image: "https://m.media-amazon.com/images/I/61VVkCc5rXL._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "MacBook Pro 14” M2",
      brand: "Apple",
      price: 1999,
      image: "https://m.media-amazon.com/images/I/71Ujbz4-MFL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      name: "Dell XPS 13",
      brand: "Dell",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/71nM1xCoIhL._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "Sony WH-1000XM5",
      brand: "Sony",
      price: 349,
      image: "https://audioteceg.com/cdn/shop/files/103375_original_local_1200x1050_converted_800x700.png?v=1707393680"
    },
    {
      name: "GoPro HERO11",
      brand: "GoPro",
      price: 399,
      image: "https://m.media-amazon.com/images/I/71fgD8WzKYL._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "ASUS Gaming Monitor 27”",
      brand: "ASUS",
      price: 299,
      image: "https://m.media-amazon.com/images/I/61ErbLJJYJL._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "Razer BlackWidow V3",
      brand: "Razer",
      price: 139,
      image: "https://m.media-amazon.com/images/I/61jN2u4RZ9L._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "Anker Power Bank",
      brand: "Anker",
      price: 59,
      image: "https://m.media-amazon.com/images/I/61T9yyjZG-L._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "DJI Mini 3 Drone",
      brand: "DJI",
      price: 599,
      image: "https://m.media-amazon.com/images/I/61g+pvkO7ZL._AC_UF894,1000_QL80_.jpg"
    }
  ];

  // توليد 100 منتج باستخدام المنتجات الأساسية
  const electronicProducts = Array.from({ length: 100 }, (_, i) => {
    const base = baseProducts[i % baseProducts.length];
    return {
      id: i + 1,
      name: `${base.name} - Edition ${Math.floor(i / baseProducts.length) + 1}`,
      brand: base.brand,
      price: base.price + (i % 5) * 10,
      image: base.image
    };
  });

  // دعم CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(200).json(electronicProducts);
};



