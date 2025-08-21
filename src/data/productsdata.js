  const rawProducts = [
    { author: "Luka", category: "Chess", subcategory: "Traditional", productSize: "69mm", productId: "LUI-202507-CH-0001", name: "Trad Epoxy Chess", views: 0, notes: "50 GEL" },
    { author: "Luka", category: "Chess", subcategory: "RPG", productSize: "69mm", productId: "LUI-202507-CH-0002", name: "RPG Epoxy Chess", views: 0, notes: "50 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Small", productId: "LIA-202507-WF-0001", name: "Bird", views: 0, notes: "20 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Small", productId: "LIA-202507-WF-0002", name: "Bunny", views: 0, notes: "20 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Small", productId: "LIA-202507-WF-0003", name: "Donkey", views: 0, notes: "30 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Medium", productId: "LIA-202507-WF-0004", name: "Donkey", views: 0, notes: "40 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Big", productId: "LIA-202507-WF-0005", name: "Donkey", views: 0, notes: "50 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Small", productId: "LIA-202507-WF-0006", name: "Giraffe", views: 0, notes: "30 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Medium", productId: "LIA-202507-WF-0007", name: "Giraffe", views: 0, notes: "40 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Big", productId: "LIA-202507-WF-0008", name: "Giraffe", views: 0, notes: "50 GEL" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0001", name: "Wine Head 0001", views: 0, notes: "25 GEL", route: "/winehead1" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0002", name: "Wine Head 0002", views: 0, notes: "25 GEL", route: "/winehead2"},
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0003", name: "Wine Head 0003", views: 0, notes: "25 GEL", route: "/winehead3" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0004", name: "Wine Head 0004", views: 0, notes: "25 GEL", route: "/winehead4"},
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0005", name: "Wine Head 0005", views: 0, notes: "25 GEL", route: "/winehead5" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0006", name: "Wine Head 0006", views: 0, notes: "25 GEL", route: "/winehead6"},
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0007", name: "Wine Head 0007", views: 0, notes: "25 GEL", route: "/winehead7" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0008", name: "Wine Head 0008", views: 0, notes: "25 GEL", route: "/winehead8"},
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-T0001", name: "WH-Gvinov Kakhuro", views: 0, notes: "25 GEL", route: "/winehead-gvinovkakhuro"},
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-T0002", name: "WH-Gvinov Kakhuro_v2", views: 0, notes: "25 GEL", route: "/winehead-gvinovkakhurov2"},
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0009", name: "Cheburashka", views: 0, notes: "" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0010", name: "Winnie the Pooh", views: 0, notes: "" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0011", name: "Baba Yaga", views: 0, notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Big", productId: "LIA-202507-WF-00012", name: "Firosmani's Meezove", views: 0, notes: "200 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0014", name: "Village Grandpha", views: 0, notes: "100 - 120 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0015", name: "Witch Grandma", views: 0, notes: "100 - 120 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0016", name: "Noble Grandma", views: 0, notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Varies", productId: "LIA-202507-WF-0017", name: "Georgia Dancers", views: 0, notes: "160 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Small", productId: "LIA-202507-WF-0018", name: "Firosmani's Meezove", views: 0, notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0019", name: "Kahketian guy", views: 0, notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0020", name: "Firosmani's Metevze", views: 0, notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Big", productId: "LIA-202507-WF-0021", name: "Firosmani's Metevze", views: 0, notes: "200 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Big", productId: "LIA-202507-WF-0022", name: "Frida Kahlo", views: 0, notes: "200 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Small", productId: "LIA-202507-WF-0023", name: "Firosmani's Margarita", views: 0, notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Painting", productSize: "Medium", productId: "LIA-202507-WF-0024", name: "Firosmani's Deer", views: 0, notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Painting", productSize: "Medium", productId: "LIA-202507-WF-0025", name: "Firosmani's Meezove", views: 0, notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Painting", productSize: "Medium", productId: "LIA-202507-WF-0026", name: "Firosmani's Metevze", views: 0, notes: "150 GEL" },
    { author: "Lia", category: "Magnet", subcategory: "Woodmagnet", productSize: "Small", productId: "LIA-202507-MN-0001", name: "Kakheli", views: 0, notes: "5 GEL" },
  ];

try {
  const saved = JSON.parse(localStorage.getItem("productViews") || "[]");
  saved.forEach(({ productId, views }) => {
    const p = rawProducts.find(x => x.productId === productId);
    if (p) p.views = views;
  });
} catch {}

export default rawProducts;
