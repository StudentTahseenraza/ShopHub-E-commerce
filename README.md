# 🛒 E-Commerce Web Application

A full-featured **E-Commerce Web Application** built with modern technologies, featuring secure authentication, product management, dynamic cart functionality, responsive design, and smooth user experience with animations.

---

## 📦 Features

### 🔑 Authentication (Signup & Login with JWT)
- Users can **create an account** (signup) and **log in**.
- **JWT tokens** secure user sessions.
- Protected routes, such as **cart**, are accessible only after login.

**Tech Stack:**
- **Backend:** Node.js + Express
  - `bcryptjs` → hash passwords
  - `jsonwebtoken` → generate access & refresh tokens
  - `cookie-parser` → store refresh tokens securely in HTTP-only cookies
- **Database:** MongoDB
  - User schema stores `email`, `passwordHash`
- **Frontend:** React (Vite)
  - Forms with validation (`email`, `password`)
  - Redux Toolkit for state management
  - AccessToken stored in Redux for authenticated routes
- **Styling & Animations:** TailwindCSS, Lottie success animation after signup/login

---

### 🛒 Items CRUD (Products with Filters)
- **Admin features:** Add, edit, delete products
- **User features:** View product listing with filters
- **Filters:** Category, price range, search query

**Tech Stack:**
- **Backend:** Express + Mongoose
  - Item model: `title`, `description`, `price`, `category`, `stock`, `images`
  - API endpoints:
    - `GET /api/items` → filter by query params (`minPrice`, `maxPrice`, `category`, `q`)
    - Admin routes → `POST`, `PATCH`, `DELETE` items
- **Database:** MongoDB Atlas with indexes on `price` and `category`
- **Frontend:** React + RTK Query
  - ProductCard component with image, price, add-to-cart button
  - Filters sidebar → category dropdown, price slider, search input
  - RTK Query auto-refetch on filter change
- **Styling:** Tailwind grid system, hover effects, transitions

---

### 🛍️ Add to Cart (with Persistence)
- Add/remove items
- Update quantity
- Cart persists after logout

**Tech Stack:**
- **Backend:**
  - Cart schema: `{ userId, items: [{ itemId, qty, priceSnapshot }] }`
  - API endpoints:
    - `GET /api/cart` → fetch user’s cart
    - `POST /api/cart/items` → add item
    - `PATCH /api/cart/items/:id` → update qty
    - `DELETE /api/cart/items/:id` → remove item
- **Frontend:**
  - Redux manages cart state synced with backend
  - Cart badge updates dynamically
  - Qty stepper calls API on change
- **Styling & Animations:** Tailwind flex layouts, Lottie animations for empty cart & success

---

### 📃 Signup & Login Pages
- Fields: `name`, `email`, `password` (signup), `email`, `password` (login)
- Error handling for invalid credentials
- Success and loader animations

**Tech Stack:**
- Backend JWT APIs
- Frontend: React forms (controlled inputs) + Redux actions
- Styling: Tailwind forms, buttons with hover effects
- Animations: Lottie success tick, loader animations

---

### 🛒 Product Listing Page with Filters
- Display all products with **category & price filters**
- Search by keyword

**Tech Stack:**
- Backend: `/api/items` with query params
- Frontend:
  - React hooks to manage filter state
  - RTK Query fetches filtered products
- Styling: Responsive Tailwind grid, collapsible sidebar on mobile
- Animations: Smooth transition on filter changes

---

### 🛍️ Cart Page
- Shows list of cart items with **images & price**
- Update quantity or remove items
- Display **subtotal**
- Cart persists across sessions

**Tech Stack:**
- Backend: Cart APIs tied to `userId`
- Frontend: Redux state synced with backend
- Styling: Tailwind card layout
- Animations: Lottie empty cart, hover transitions

---

### 🎨 Styling & Professional Design
- Clean, responsive, **mobile-first design**
- Professional typography
- Reusable components (Button, Card)
- Optional 3D integration (Spline model)

**Tech Stack:**
- TailwindCSS for responsive UI
- Lottie animations for success & empty states
- CSS transitions for hover effects

---

### 🌐 Deployment
- Full-stack deployment
- Live app accessible to users

**Tech Stack:**
- Backend: Render / Railway
- Frontend: Vercel / Netlify
- Database: MongoDB Atlas
- Env Variables:
  - Backend → `MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN`
  - Frontend → `VITE_API_URL=https://your-backend-url/api`

---

## ✅ Final User Flow
1. User signs up → JWT issued, stored in Redux
2. User logs in → redirected to product listing
3. User browses products → applies filters → adds items to cart
4. Cart badge updates instantly (RTK + Tailwind animation)
5. On Cart page → update quantity, remove items
6. User logs out → cart remains in DB
7. On next login → cart is loaded from server
8. Empty states use Lottie animations for visual feedback


---

## 🚀 How to Run Locally

1. **Clone repository**
```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
npm run dev


