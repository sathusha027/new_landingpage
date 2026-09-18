import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu as MenuIcon, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  QrCode, 
  Smartphone, 
  TrendingUp, 
  Truck, 
  Percent, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Music,
  Play
} from 'lucide-react';

const FOOD_CATEGORIES = [
  { id: 'all', name: 'All Dishes' },
  { id: 'rice', name: 'Rice & Curry' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'pizzas', name: 'Pizzas' },
  { id: 'snacks', name: 'Snacks & Bites' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'desserts', name: 'Desserts' }
];

const FOOD_ITEMS = [
  {
    id: 'f1',
    category: 'rice',
    name: 'Special Chicken Kottu Roti',
    description: 'Fresh shredded flatbread wok-fried with seasoned chicken, organic veggies & aromatic spices.',
    price: 8.50,
    rating: 4.9,
    prepTime: '20 mins',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'f2',
    category: 'rice',
    name: 'Royal Lumprais Rice Box',
    description: 'Fragrant rice boiled in stock, served with mix meat curry, banana leaf wrapped and slow baked.',
    price: 11.20,
    rating: 4.8,
    prepTime: '25 mins',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'f3',
    category: 'burgers',
    name: 'Double Smash Beef Burger',
    description: 'Dual smashed grass-fed beef patties, melted cheddar, caramelized onions & secret Sharaly sauce.',
    price: 9.90,
    rating: 4.9,
    prepTime: '15 mins',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'f4',
    category: 'burgers',
    name: 'Crispy Zinger Chicken Burger',
    description: 'Extra crispy chicken breast fillet, pickled jalapenos, iceberg lettuce, spiced garlic mayo.',
    price: 7.80,
    rating: 4.7,
    prepTime: '15 mins',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 'f5',
    category: 'pizzas',
    name: 'Artisan Woodfired Pepperoni',
    description: 'Slow-fermented sourdough, San Marzano tomato sauce, fresh mozzarella, double pepperoni layer.',
    price: 14.50,
    rating: 4.9,
    prepTime: '22 mins',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'f6',
    category: 'pizzas',
    name: 'Truffle Mushroom Supreme',
    description: 'White base pizza topped with wild portobello mushrooms, truffle cream drizzle & fresh basil.',
    price: 15.00,
    rating: 4.8,
    prepTime: '20 mins',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 'f7',
    category: 'snacks',
    name: 'Crispy Fish Cutlets (6 Pcs)',
    description: 'Spiced tuna and potato croquettes, breaded and fried to golden perfection.',
    price: 4.90,
    rating: 4.6,
    prepTime: '10 mins',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 'f8',
    category: 'drinks',
    name: 'Fresh Mango Passion Smoothie',
    description: 'Chilled ripe tropical mango blended with passionfruit puree, mint and honey.',
    price: 3.80,
    rating: 4.9,
    prepTime: '5 mins',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'f9',
    category: 'desserts',
    name: 'Choco Lava Melt Sundae',
    description: 'Warm molten chocolate cake paired with double vanilla bean ice cream & crushed hazelnuts.',
    price: 5.50,
    rating: 4.9,
    prepTime: '8 mins',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    popular: true
  }
];

const FEATURES = [
  {
    icon: Globe,
    title: 'Instant Online Ordering',
    description: 'Sleek custom branded store fronts engineered to maximize order conversion rates effortlessly.'
  },
  {
    icon: QrCode,
    title: 'Contactless QR Menu',
    description: 'Dine-in QR tableside ordering system that cuts server waiting times by up to 40%.'
  },
  {
    icon: Truck,
    title: 'Pickup & Smart Delivery',
    description: 'Automated dispatching with live real-time driver GPS tracking and customer SMS alerts.'
  },
  {
    icon: Percent,
    title: 'Promotions & Discounts',
    description: 'Create customized promo codes, buy-one-get-one offers, and automated loyalty rewards.'
  },
  {
    icon: TrendingUp,
    title: 'Business Analytics',
    description: 'Deep Insights into peak order times, best-selling items, and revenue growth metrics.'
  },
  {
    icon: Smartphone,
    title: 'Custom Branded App',
    description: 'Get your own iOS & Android mobile application published directly under your store name.'
  }
];

export default function App() {
  // State management
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([
    { ...FOOD_ITEMS[0], quantity: 2 },
    { ...FOOD_ITEMS[2], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState('website');
  const [toastMessage, setToastMessage] = useState(null);
  const [contactForm, setContactForm] = useState({ firstName: '', lastName: '', mobile: '', address: '', message: '' });

  // Toast Handler
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart operations
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    triggerToast(`Added ${product.name} to your order!`);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    triggerToast('Item removed from cart');
  };

  const handleContactChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    triggerToast('Message sent! Our team will get back to you soon.');
    setContactForm({ firstName: '', lastName: '', mobile: '', address: '', message: '' });
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = cartItems.length > 0 ? 2.50 : 0;
  const grandTotal = subtotal + deliveryFee;

  // Filter food list
  const filteredFood = FOOD_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-bounce">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 text-3xl font-black tracking-tight text-slate-900 group">
            <img src={logo} alt="Sharaly Logo" className="w-14 h-14 object-contain group-hover:scale-105 transition-transform" />
            <span>Sharaly<span className="text-orange-500">.</span></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#features" className="hover:text-orange-600 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-orange-600 transition-colors">Platform Tour</a>
            <a href="#menu" className="hover:text-orange-600 transition-colors">Explore Menu</a>
            <a href="#pricing" className="hover:text-orange-600 transition-colors">For Merchants</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-3">
            
            {/* Search Toggle */}
            <div className="relative">
              {isSearchVisible ? (
                <div className="flex items-center bg-slate-100 rounded-full px-3 py-1.5 border border-slate-200">
                  <Search className="w-4 h-4 text-slate-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search food..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-sm w-32 sm:w-48 text-slate-800 placeholder-slate-400"
                    autoFocus
                  />
                  <button onClick={() => { setIsSearchVisible(false); setSearchQuery(''); }} className="text-slate-400 hover:text-slate-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsSearchVisible(true)}
                  className="p-2.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Button with Counter */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-orange-600 transition-all"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartTotalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartTotalCount}
                </span>
              )}
            </button>

            {/* Login Modal Button */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3">
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium hover:text-orange-600">Features</a>
            <a href="#showcase" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium hover:text-orange-600">Platform Tour</a>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-600 font-medium hover:text-orange-600">Explore Menu</a>
            <button
              onClick={() => { setIsMobileMenuOpen(false); setIsLoginOpen(true); }}
              className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-xl font-semibold mt-4 shadow-lg shadow-orange-500/30"
            >
              <User className="w-4 h-4" />
              <span>Sign In / Register</span>
            </button>
          </div>
        )}
      </header>

      {}
      <section className="relative overflow-hidden py-12 lg:py-20 bg-gradient-to-b from-orange-50/50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-orange-600" />
                Next-Gen Food Ordering Experience
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Delicious Meals <br />
                <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                  Delivered At Your Doorstep.
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Sharaly unites your favorite local restaurants into one seamless platform. Order fresh gourmet cuisine, track deliveries live, or order directly using QR code table menus.
              </p>

              {/* Call To Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#menu"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-2xl shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  <span>Order Delicious Food</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#showcase"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
                >
                  <span>View Platform Tour</span>
                </a>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl font-black text-slate-900">15-30m</p>
                  <p className="text-xs text-slate-500 font-medium">Avg Delivery Time</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">4.9 ★</p>
                  <p className="text-xs text-slate-500 font-medium">Customer Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">100%</p>
                  <p className="text-xs text-slate-500 font-medium">Fresh Quality Guarantee</p>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-300 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                    alt="Delicious Gourmet Dish"
                    className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
               

                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">Engineered For Excellence</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything Needed To Power Modern Food Experience
            </p>
            <p className="mt-4 text-slate-600">
              Whether you are craving a late night bite or running a thriving multi-branch restaurant empire, Sharaly provides the ultimate ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {}
      <section id="showcase" className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              Interactive Preview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight">Experience Sharaly In Action</h2>
            <p className="text-slate-400 mt-3">
              Explore how our unified software interfaces adapt seamlessly for customers, kitchen managers, and admins.
            </p>
          </div>

          {/* Showcase Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'website', label: 'Online Storefront' },
              { id: 'qr', label: 'Dine-In QR Menu' },
              { id: 'mobile', label: 'Mobile App' },
              { id: 'dashboard', label: 'Admin Dashboard' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveShowcase(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeShowcase === tab.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Screen Display */}
          <div className="bg-slate-800 rounded-3xl p-6 lg:p-10 border border-slate-700 shadow-2xl max-w-5xl mx-auto min-h-[380px] flex items-center justify-center">
            {activeShowcase === 'website' && (
              <div className="w-full grid md:grid-cols-2 gap-8 items-center animate-fade-in">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-lg">High Conversion Web Store</div>
                  <h3 className="text-2xl font-bold">Custom Web Ordering Hub</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Allow customers to browse menus, customize meal toppings, and place pickup or delivery orders directly from any browser without third-party commission fees.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Instant Payment Gateway Integration</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> SEO Optimized Menu Pages</li>
                  </ul>
                </div>
                <div className="bg-slate-900 rounded-2xl p-4 border border-slate-700 shadow-inner">
                  <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=600&q=80" alt="Web Store Preview" className="rounded-xl object-cover h-64 w-full" />
                </div>
              </div>
            )}

            {activeShowcase === 'qr' && (
              <div className="w-full grid md:grid-cols-2 gap-8 items-center animate-fade-in">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-lg">Touchless Dining</div>
                  <h3 className="text-2xl font-bold">Dynamic QR Code Table Menus</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Dine-in guests scan the table QR sticker to view live photo menus, send direct orders straight to the kitchen display (KDS), and split payments.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Zero Waiter Delay</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-400" /> Real-time Out-of-Stock Toggles</li>
                  </ul>
                </div>
                <div className="bg-slate-900 rounded-2xl p-4 border border-slate-700 flex justify-center">
                  <div className="bg-white p-6 rounded-2xl text-slate-900 text-center space-y-3">
                    <QrCode className="w-32 h-32 mx-auto text-slate-900" />
                    <p className="font-bold text-sm">Scan Table #04 Menu</p>
                  </div>
                </div>
              </div>
            )}

            {activeShowcase === 'mobile' && (
              <div className="w-full grid md:grid-cols-2 gap-8 items-center animate-fade-in">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-sky-500/20 text-sky-400 text-xs font-bold rounded-lg">iOS & Android</div>
                  <h3 className="text-2xl font-bold">Native Customer Mobile App</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Keep your patrons coming back with custom push notifications, one-click reordering, and integrated digital loyalty rewards points.
                  </p>
                </div>
                <div className="bg-slate-900 rounded-2xl p-4 border border-slate-700 flex justify-center">
                  <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" alt="Mobile Preview" className="rounded-xl object-cover h-64 w-full" />
                </div>
              </div>
            )}

            {activeShowcase === 'dashboard' && (
              <div className="w-full grid md:grid-cols-2 gap-8 items-center animate-fade-in">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-lg">Realtime Analytics</div>
                  <h3 className="text-2xl font-bold">Control Center Dashboard</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Manage store schedules, update menu prices in real time, monitor delivery driver positions, and analyze daily revenue growth metrics.
                  </p>
                </div>
                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-400 border-b border-slate-800 pb-2">
                    <span>Today's Total Revenue</span>
                    <span className="text-emerald-400 font-bold">+24% vs yesterday</span>
                  </div>
                  <p className="text-3xl font-black text-white">$1,482.50</p>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-orange-500 to-amber-400"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {}
      <section id="menu" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Our Fresh Menu</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Explore Popular Dishes
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {FOOD_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Food Cards Grid */}
          {filteredFood.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFood.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-100 border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.popular && (
                      <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Bestseller
                      </span>
                    )}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow">
                      <Clock className="w-3.5 h-3.5 text-orange-500" />
                      {item.prepTime}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-slate-900 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center text-xs font-bold text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">
                          ★ {item.rating}
                        </div>
                      </div>
                      <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div>
                        <span className="text-xs text-slate-400 font-medium block">Price</span>
                        <span className="text-xl font-black text-slate-900">${item.price.toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-2xl shadow-md shadow-orange-500/20 active:scale-95 transition-all flex items-center gap-2 text-sm font-bold px-4"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-500 font-medium">No food items found matching your filter or search.</p>
              <button 
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-6 py-2 bg-orange-500 text-white font-bold rounded-xl text-sm"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay backdrop */}
          <div 
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-left">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-xl">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-slate-900">Your Order Cart</h2>
                  <p className="text-xs text-slate-500">{cartTotalCount} items selected</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                      <p className="text-xs font-semibold text-orange-600">${item.price.toFixed(2)}</p>
                      
                      {/* Quantity Toggles */}
                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold text-slate-800">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-400 hover:text-red-500 p-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 space-y-3">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <p className="font-semibold text-slate-600">Your cart is empty</p>
                  <p className="text-xs text-slate-400">Add delicious meals from our menu to start.</p>
                </div>
              )}
            </div>

            {/* Cart Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-3">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Estimated Delivery</span>
                  <span className="font-semibold text-slate-900">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Due</span>
                  <span className="text-orange-600">${grandTotal.toFixed(2)}</span>
                </div>

                <button 
                  onClick={() => {
                    alert('Order Placed Successfully! Thank you for trying Sharaly.');
                    setCartItems([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange-500/25 transition-all mt-2"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsLoginOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          
          <div className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl z-10 space-y-6 animate-scale-up">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900">Welcome Back</h3>
              <button onClick={() => setIsLoginOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setIsLoginOpen(false); triggerToast('Logged in successfully!'); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="admin@sharaly.com" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-500 text-sm"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md"
              >
                Sign In
              </button>
            </form>

            <p className="text-xs text-center text-slate-500">
              Don't have an account? <a href="#" className="text-orange-600 font-bold hover:underline">Register merchant</a>
            </p>
          </div>
        </div>
      )}

      {}
      <section id="contact" className="py-20 bg-orange-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden grid md:grid-cols-2">

            {/* Left: Info */}
            <div className="p-8 sm:p-12 space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">We're Here to Help</h2>
                <p className="text-slate-500 leading-relaxed">
                  Our support team is available 7 days a week to assist you with orders, queries, or collaborations.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700 font-medium leading-snug pt-2">
                    120 Queen Street, Suite 4B,<br />Toronto, ON M5H 2N2, Canada
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700 font-medium">+1 (416) 555-0198</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <p className="text-slate-700 font-medium">hello@sharaly.ca</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Hours:</h4>
                <p className="text-slate-500">Monday - Saturday<br />9 AM to 12 AM</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-3">Follow Us</h4>
                <div className="flex items-center gap-3">
                  <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Music" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
                    <Music className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Watch" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
                    <Play className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 sm:p-12 bg-slate-50/60 border-t md:border-t-0 md:border-l border-slate-100">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={contactForm.firstName}
                    onChange={(e) => handleContactChange('firstName', e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-orange-500 text-sm text-slate-700 placeholder-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={contactForm.lastName}
                    onChange={(e) => handleContactChange('lastName', e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-orange-500 text-sm text-slate-700 placeholder-slate-400"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={contactForm.mobile}
                    onChange={(e) => handleContactChange('mobile', e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-orange-500 text-sm text-slate-700 placeholder-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    value={contactForm.address}
                    onChange={(e) => handleContactChange('address', e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-orange-500 text-sm text-slate-700 placeholder-slate-400"
                  />
                </div>
                <textarea
                  placeholder="Message...."
                  value={contactForm.message}
                  onChange={(e) => handleContactChange('message', e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-orange-500 text-sm text-slate-700 placeholder-slate-400 resize-y"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  Submit Now <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
         

         


          

        </div>

       
      </footer>

    </div>
  );
}