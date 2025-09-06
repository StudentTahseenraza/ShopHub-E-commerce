import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "../../types";

const mockProducts: Product[] = [
  {
    id: "1",
    title: "Wireless Bluetooth Headphones",
    description:
      "Premium noise-canceling wireless headphones with superior sound quality.",
    price: 299.99,
    category: "Electronics",
    stock: 25,
    image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "2",
    title: "Organic Cotton T-Shirt",
    description:
      "Soft, breathable organic cotton t-shirt perfect for everyday wear.",
    price: 29.99,
    category: "Clothing",
    stock: 50,
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    rating: 4.2,
    reviews: 89,
  },
  {
    id: "3",
    title: "Smart Fitness Watch",
    description:
      "Advanced fitness tracking with heart rate monitoring and GPS.",
    price: 199.99,
    category: "Electronics",
    stock: 15,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    rating: 4.7,
    reviews: 256,
  },
  {
    id: "4",
    title: "Leather Messenger Bag",
    description:
      "Handcrafted leather messenger bag perfect for work or travel.",
    price: 149.99,
    category: "Accessories",
    stock: 20,
    image: "https://static.vecteezy.com/system/resources/thumbnails/032/613/025/small/close-up-gold-magnetic-button-of-open-elegance-women-s-accessories-fashion-black-shoulder-leather-bag-with-golden-chain-ai-generated-free-photo.jpg",
    rating: 4.6,
    reviews: 94,
  },
  {
    id: "5",
    title: "Ceramic Coffee Mug Set",
    description: "Beautiful handmade ceramic coffee mugs, set of 4.",
    price: 49.99,
    category: "Home",
    stock: 30,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    rating: 4.3,
    reviews: 167,
  },
  {
    id: "6",
    title: "Yoga Mat Premium",
    description: "Non-slip premium yoga mat with excellent grip and comfort.",
    price: 79.99,
    category: "Sports",
    stock: 40,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovp2TFfH8qo7Po6SlOfSU1LEgm_pLZGb8Cw&s",
    rating: 4.4,
    reviews: 203,
  },
  {
    id: "7",
    title: "Gaming Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with customizable keys.",
    price: 129.99,
    category: "Electronics",
    stock: 35,
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
    rating: 4.6,
    reviews: 320,
  },
  {
    id: "8",
    title: "Women Summer Dress",
    description: "Lightweight floral dress perfect for summer outings.",
    price: 59.99,
    category: "Clothing",
    stock: 60,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    rating: 4.4,
    reviews: 78,
  },
  {
    id: "9",
    title: "Stainless Steel Water Bottle",
    description: "Insulated water bottle keeps drinks cold for 24 hours.",
    price: 24.99,
    category: "Home",
    stock: 100,
    image: "https://assets.nikshanonline.com/wp-content/uploads/2023/11/Borosil-Stainless-Steel-Hydra-ColourCrush-3.png",
    rating: 4.5,
    reviews: 210,
  },
  {
    id: "10",
    title: "Camping Tent 4-Person",
    description: "Durable waterproof tent ideal for family camping trips.",
    price: 249.99,
    category: "Sports",
    stock: 12,
    image: "https://images.pexels.com/photos/2526025/pexels-photo-2526025.jpeg",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "11",
    title: "Luxury Leather Wallet",
    description: "Slim and stylish wallet handcrafted from genuine leather.",
    price: 89.99,
    category: "Accessories",
    stock: 55,
    image: "https://www.darveys.com/blog/wp-content/uploads/2024/07/top-luxury-mens-wallet-brands.jpg",
    rating: 4.5,
    reviews: 143,
  },
  {
    id: "12",
    title: "Wireless Gaming Mouse",
    description: "High precision gaming mouse with adjustable DPI.",
    price: 79.99,
    category: "Electronics",
    stock: 70,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 189,
  },
  {
    id: "13",
    title: "Running Shoes",
    description: "Lightweight breathable shoes designed for runners.",
    price: 99.99,
    category: "Clothing",
    stock: 45,
    image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg",
    rating: 4.3,
    reviews: 220,
  },
  {
    id: "14",
    title: "Cookware Set Non-Stick",
    description: "10-piece durable non-stick cookware set for your kitchen.",
    price: 199.99,
    category: "Home",
    stock: 25,
    image: "https://images-cdn.ubuy.co.in/6572eb2a480000687957ac41-cook-n-home-pots-and-pans-nonstick.jpg",
    rating: 4.6,
    reviews: 132,
  },
  {
    id: "15",
    title: "Portable Bluetooth Speaker",
    description: "Compact speaker with deep bass and waterproof design.",
    price: 59.99,
    category: "Electronics",
    stock: 85,
    image: "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/JBLSTAGEPB_.jpg",
    rating: 4.4,
    reviews: 178,
  },
  {
    id: "16",
    title: "Men Denim Jacket",
    description: "Classic denim jacket with modern slim fit.",
    price: 79.99,
    category: "Clothing",
    stock: 38,
    image: "https://www.denimvistara.in/711-large_default/royal-spider-men-s-full-sleeves-denim-jacket-rs-0002.jpg",
    rating: 4.5,
    reviews: 111,
  },
  {
    id: "17",
    title: "Electric Kettle Stainless Steel",
    description: "Fast-boil electric kettle with auto shut-off function.",
    price: 39.99,
    category: "Home",
    stock: 90,
    image: "https://img.freepik.com/premium-photo/electric-kettle-boiling-water-making-tea-table-kitchen-interior_926199-2823869.jpg",
    rating: 4.7,
    reviews: 200,
  },
  {
    id: "18",
    title: "Mountain Bike Helmet",
    description: "Safety-certified lightweight helmet for cycling.",
    price: 129.99,
    category: "Sports",
    stock: 27,
    image: "https://cdn11.bigcommerce.com/s-tpvx4esvgk/images/stencil/1280x1280/products/162914/433331/800002662-PAR_-5__91048.1708385305.jpg?c=1",
    rating: 4.6,
    reviews: 84,
  },
  {
    id: "19",
    title: "Gold Plated Earrings",
    description: "Elegant earrings with 18k gold plating.",
    price: 49.99,
    category: "Accessories",
    stock: 60,
    image: "https://smarsjewelry.com/cdn/shop/files/2009.1_3d47e4a9-c3db-403e-a140-def92e6af7f9.jpg?v=1756545046&width=533",
    rating: 4.4,
    reviews: 99,
  },
  {
    id: "20",
    title: "HD Smart TV 50 inch",
    description: "4K Ultra HD smart TV with HDR and streaming apps.",
    price: 699.99,
    category: "Electronics",
    stock: 10,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    rating: 4.8,
    reviews: 305,
  },
  {
    id: "21",
    title: "Travel Backpack",
    description: "Water-resistant multi-compartment travel backpack.",
    price: 89.99,
    category: "Accessories",
    stock: 70,
    image:
      "https://img.freepik.com/free-photo/view-3d-graphic-backpack_23-2150849247.jpg?",
    rating: 4.6,
    reviews: 176,
  },
  {
    id: "22",
    title: "Makeup Brush Set",
    description: "Professional 12-piece makeup brush set.",
    price: 59.99,
    category: "Beauty",
    stock: 80,
    image: "https://m.media-amazon.com/images/I/71h2lzU8eLL._UF1000,1000_QL80_.jpg",
    rating: 4.5,
    reviews: 140,
  },
   {
  id: "23",
  title: "Smart LED Desk Lamp",
  description: "Modern energy-efficient LED desk lamp with touch controls, adjustable brightness, and USB charging port.",
  price: 1599,
  category: "Home",
  stock: 35,
  image: "https://m.media-amazon.com/images/I/61LJWNcs2ZL._UF1000,1000_QL80_.jpg",
  rating: 4.6,
  reviews: 195,
},

  {
    id: "24",
    title: "Board Game Strategy Set",
    description: "Fun family strategy board game for all ages.",
    price: 39.99,
    category: "Toys",
    stock: 65,
    image:
      "https://rukminim2.flixcart.com/image/704/844/jzlldow0/board-game/r/s/u/wooden-hexagon-chinese-checkers-family-game-set-board-game-6-original-imafjkvvgdszryzz.jpeg?q=90&crop=false",
    rating: 4.6,
    reviews: 210,
  },
  {
    id: "25",
    title: "Luxury Perfume",
    description: "Long-lasting fragrance with floral notes.",
    price: 89.99,
    category: "Beauty",
    stock: 55,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
    rating: 4.5,
    reviews: 122,
  },
  {
    id: "26",
    title: "Kids Remote Control Car",
    description: "Rechargeable RC car with fast speed and LED lights.",
    price: 49.99,
    category: "Toys",
    stock: 100,
    image:
      "https://m.media-amazon.com/images/I/717u1M4rjKL._UF1000,1000_QL80_.jpg",
    rating: 4.4,
    reviews: 190,
  },
  {
    id: "27",
    title: "Wireless Earbuds",
    description: "Compact true wireless earbuds with charging case.",
    price: 99.99,
    category: "Electronics",
    stock: 75,
    image:
      "https://www.unboxify.in/cdn/shop/files/71_BBZBBT2L._SL1500.jpg?height=645&pad_color=fff&v=1735905649&width=645",
    rating: 4.3,
    reviews: 260,
  },
  {
    id: "28",
    title: "Kitchen Blender High-Speed",
    description: "Powerful blender for smoothies, soups, and more.",
    price: 149.99,
    category: "Home",
    stock: 35,
    image: "https://m.media-amazon.com/images/I/61P5wttD2+L._UF894,1000_QL80_.jpg",
    rating: 4.6,
    reviews: 145,
  },
  {
    id: "29",
    title: "Cricket Bat English Willow",
    description: "Professional cricket bat for tournaments and practice.",
    price: 179.99,
    category: "Sports",
    stock: 22,
    image: "https://scssports.in/cdn/shop/files/sky_player.jpg?v=1715867574",
    rating: 4.7,
    reviews: 112,
  },
  {
    id: "30",
    title: "Designer Handbag",
    description: "Trendy handbag with spacious compartments.",
    price: 199.99,
    category: "Accessories",
    stock: 40,
    image: "https://cdn.shopify.com/s/files/1/0872/4604/5498/files/TOP_LUXURY_HANDBAG_BRANDS_Page_2.jpg?v=1732888664",
    rating: 4.6,
    reviews: 134,
  },
];

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockProducts;
});

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  categories: [],
  filters: {
    category: "",
    minPrice: 0,
    maxPrice: 1000,
    search: "",
  },
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilters: (
      state,
      action: PayloadAction<Partial<ProductsState["filters"]>>
    ) => {
      state.filters = { ...state.filters, ...action.payload };
      productsSlice.caseReducers.applyFilters(state);
    },
    applyFilters: (state) => {
      let filtered = state.items;

      if (state.filters.category) {
        filtered = filtered.filter(
          (product) => product.category === state.filters.category
        );
      }

      if (state.filters.search) {
        const searchTerm = state.filters.search.toLowerCase();
        filtered = filtered.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
      }

      filtered = filtered.filter(
        (product) =>
          product.price >= state.filters.minPrice &&
          product.price <= state.filters.maxPrice
      );

      state.filteredItems = filtered;
    },
    clearFilters: (state) => {
      state.filters = {
        category: "",
        minPrice: 0,
        maxPrice: 1000,
        search: "",
      };
      state.filteredItems = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
        state.categories = [
          ...new Set(action.payload.map((product) => product.category)),
        ];
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setFilters, clearFilters, applyFilters } = productsSlice.actions;
export default productsSlice.reducer;
