import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState } from './store';
import { loadUserFromStorage } from './store/slices/authSlice';
import { loadCart } from './store/slices/cartSlice';

// Layout
import Layout from './components/Layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import PremiumQuality from './pages/PremiumQuality';
import SecureShopping from './pages/SecureShopping';
import FastDelivery from './pages/FastDelivery';
import OrderTracking from './pages/OrderTracking';

// Auth Components
import LoginForm from './components/Auth/LoginForm';
import SignupForm from './components/Auth/SignupForm';

// Protected Route
import ProtectedRoute from './components/ProtectedRoute';

const AppContent: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Load user from localStorage on app start
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  useEffect(() => {
    // Load cart when user is authenticated
    if (isAuthenticated && user) {
      dispatch(loadCart() as any);
    }
  }, [dispatch, isAuthenticated, user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />

          {/* New Pages */}
          <Route path="premium" element={<PremiumQuality />} />
          <Route path="secure" element={<SecureShopping />} />
          <Route path="delivery" element={<FastDelivery />} />
          <Route path="order-tracking" element={<OrderTracking />} />

        </Route>

        {/* Auth Routes */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/products" replace /> : <LoginForm />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/products" replace /> : <SignupForm />}
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
