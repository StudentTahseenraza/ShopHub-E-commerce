import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { RootState } from "../../store";
import { signupUser, clearError } from "../../store/slices/authSlice";

const SignupForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate("/products");
    }
  }, [isAuthenticated, loading, navigate]);

  useEffect(() => {
    return () => {
      if (error) dispatch(clearError());
    };
  }, [dispatch, error]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signupUser(formData) as any);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
      {/* Glassmorphism Container */}
      <div className="relative z-10 flex w-[900px] max-w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Illustration Side */}
        <div className="flex-col items-center justify-center hidden w-1/2 p-10 text-center text-white md:flex">
          <video
            src="/rocket.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-64 mb-6 drop-shadow-xl mix-blend-screen"
          />
          <p className="text-lg font-medium">
            Create your account and start your <br /> journey with{" "}
            <span className="font-bold">ShopHub 🚀</span>
          </p>
        </div>

        {/* Right Signup Side */}
        <div className="w-full p-10 md:w-1/2 bg-white/10 backdrop-blur-xl">
          {/* Tabs */}
         

          {/* Heading */}
          <h2 className="mb-8 text-2xl font-bold text-center text-white">
            Create Account
          </h2>

          {error && (
            <div className="px-4 py-3 mb-6 text-center text-red-200 border border-red-300 rounded-lg bg-red-600/30">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 pl-12 text-white placeholder-gray-200 border outline-none rounded-xl bg-white/20 border-white/30 focus:ring-2 focus:ring-blue-400"
              />
              <User className="absolute w-5 h-5 text-gray-200 -translate-y-1/2 left-3 top-1/2" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 pl-12 text-white placeholder-gray-200 border outline-none rounded-xl bg-white/20 border-white/30 focus:ring-2 focus:ring-blue-400"
              />
              <Mail className="absolute w-5 h-5 text-gray-200 -translate-y-1/2 left-3 top-1/2" />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 pl-12 pr-12 text-white placeholder-gray-200 border outline-none rounded-xl bg-white/20 border-white/30 focus:ring-2 focus:ring-blue-400"
              />
              <Lock className="absolute w-5 h-5 text-gray-200 -translate-y-1/2 left-3 top-1/2" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-gray-200 -translate-y-1/2 right-3 top-1/2 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 font-semibold text-white transition bg-black rounded-xl hover:bg-gray-900"
            >
              {loading ? "Signing Up..." : "Sign Up →"}
            </button>

            <div className="mt-8 text-center">
              <p className="text-white">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-black hover:text-white"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Background blur shapes */}
      <div className="absolute bg-purple-500 rounded-full w-72 h-72 mix-blend-multiply filter blur-3xl opacity-40 top-10 left-10"></div>
      <div className="absolute bg-blue-500 rounded-full w-72 h-72 mix-blend-multiply filter blur-3xl opacity-40 bottom-10 right-10"></div>
    </div>
  );
};

export default SignupForm;
