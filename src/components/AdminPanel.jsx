import { useState, useEffect } from 'react';
import {
  Users,
  Package,
  ShoppingCart,
  Settings,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Eye,
  Download,
  RefreshCw,
  DollarSign,
  AlertTriangle,
  X,
  Save,
  Home,
  LogOut,
  Bell,
  MessageSquare,
  Beaker,
  Palette
} from 'lucide-react';
import { toast } from 'react-toastify';

const AdminPanel = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // Removed unused selectedItems state
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Sample data states
  const [dashboardStats] = useState({
    totalUsers: 1250,
    totalProducts: 89,
    totalOrders: 456,
    totalRevenue: 125450,
    monthlyGrowth: 12.5,
    activeUsers: 892,
    pendingOrders: 23,
    lowStockProducts: 5
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'customer',
      status: 'active',
      joinDate: '2024-01-15',
      orders: 5,
      totalSpent: 2450
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'admin',
      status: 'active',
      joinDate: '2023-12-01',
      orders: 0,
      totalSpent: 0
    }
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Sodium Chloride',
      category: 'chemicals',
      price: 25.99,
      stock: 150,
      status: 'active',
      description: 'High-grade industrial sodium chloride',
      image: '/api/placeholder/150/150'
    },
    {
      id: 2,
      name: 'Ceramic Floor Tile',
      category: 'tiles',
      price: 45.99,
      stock: 200,
      status: 'active',
      description: 'Premium ceramic tiles for flooring',
      image: '/api/placeholder/150/150'
    }
  ]);

  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: 'John Doe',
      email: 'john@example.com',
      products: ['Sodium Chloride', 'Ceramic Floor Tile'],
      total: 71.98,
      status: 'pending',
      date: '2024-10-10',
      paymentStatus: 'paid'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      email: 'jane@example.com',
      products: ['Ceramic Floor Tile'],
      total: 45.99,
      status: 'completed',
      date: '2024-10-09',
      paymentStatus: 'paid'
    }
  ]);

  const [messages] = useState([
    {
      id: 1,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      subject: 'Product Inquiry',
      message: 'I need information about bulk chemical orders.',
      date: '2024-10-10',
      status: 'unread'
    }
  ]);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  // Load data on component mount
  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // Load real data from APIs if available
      // For now using mock data
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      toast.error('Error loading dashboard data');
    } finally {
      setLoading(false);
    }
  };

  // Modal handlers
  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setEditingItem(null);
  };

  // CRUD Operations
  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
      toast.success('User deleted successfully');
    }
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== productId));
      toast.success('Product deleted successfully');
    }
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    toast.success('Order status updated');
  };

  // Dashboard Component
  const DashboardOverview = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h2>
        <button
          onClick={loadDashboardData}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {dashboardStats.totalUsers.toLocaleString()}
              </p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Products</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {dashboardStats.totalProducts}
              </p>
            </div>
            <Package className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {dashboardStats.totalOrders}
              </p>
            </div>
            <ShoppingCart className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                ${dashboardStats.totalRevenue.toLocaleString()}
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {orders.slice(0, 5).map(order => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Order #{order.id}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">${order.total}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Low Stock Alert</h3>
          <div className="space-y-3">
            {products.filter(product => product.stock < 50).map(product => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Stock: {product.stock}</p>
                </div>
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Users Management Component
  const UsersManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Users Management</h2>
        <button
          onClick={() => openModal('user')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {users
                .filter(user => 
                  user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(user => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {user.orders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    ${user.totalSpent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center gap-2 justify-end">
                      <button
                        onClick={() => openModal('user', user)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Products Management Component
  const ProductsManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Products Management</h2>
        <button
          onClick={() => openModal('product')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <span className={`flex items-center gap-1 text-sm ${
                  product.category === 'chemicals' ? 'text-blue-600' : 'text-orange-600'
                }`}>
                  {product.category === 'chemicals' ? <Beaker className="w-4 h-4" /> : <Palette className="w-4 h-4" />}
                  {product.category}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {product.description}
              </p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Stock: {product.stock}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openModal('product', product)}
                  className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                >
                  <Edit className="w-4 h-4 inline mr-1" />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="px-3 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Orders Management Component
  const OrdersManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Orders Management</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {order.customer}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {order.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {order.products.join(', ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    ${order.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={order.status}
                      onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                      className={`text-xs px-2 py-1 rounded-full border-0 ${
                        order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {new Date(order.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Messages Component
  const MessagesManagement = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Messages</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {messages.map(message => (
          <div key={message.id} className="p-6 border-b dark:border-gray-700 last:border-b-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 dark:text-white">{message.name}</span>
                <span className="text-sm text-gray-500">({message.email})</span>
                {message.status === 'unread' && (
                  <span className="inline-flex w-2 h-2 bg-blue-500 rounded-full"></span>
                )}
              </div>
              <span className="text-sm text-gray-500">
                {new Date(message.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">{message.subject}</h3>
            <p className="text-gray-600 dark:text-gray-400">{message.message}</p>
            <div className="flex items-center gap-2 mt-4">
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                Reply
              </button>
              <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700">
                Mark as Read
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Settings Component
  const SettingsPanel = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Site Name
              </label>
              <input
                type="text"
                defaultValue="C-Call Chemical & Tiles"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contact Email
              </label>
              <input
                type="email"
                defaultValue="info@ccallchemical.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Appearance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative inline-flex w-11 h-6 rounded-full ${
                  darkMode ? 'bg-blue-600' : 'bg-gray-200'
                } transition-colors`}
              >
                <span
                  className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  } mt-1`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Modal Component
  const Modal = () => {
    const [formData, setFormData] = useState(editingItem || {});

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission based on modalType
      if (modalType === 'user') {
        if (editingItem) {
          setUsers(users.map(user => user.id === editingItem.id ? { ...user, ...formData } : user));
          toast.success('User updated successfully');
        } else {
          const newUser = { ...formData, id: users.length + 1 };
          setUsers([...users, newUser]);
          toast.success('User added successfully');
        }
      } else if (modalType === 'product') {
        if (editingItem) {
          setProducts(products.map(product => product.id === editingItem.id ? { ...product, ...formData } : product));
          toast.success('Product updated successfully');
        } else {
          const newProduct = { ...formData, id: products.length + 1 };
          setProducts([...products, newProduct]);
          toast.success('Product added successfully');
        }
      }
      closeModal();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md max-h-screen overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {editingItem ? 'Edit' : 'Add'} {modalType === 'user' ? 'User' : 'Product'}
            </h3>
            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {modalType === 'user' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Role
                  </label>
                  <select
                    value={formData.role || 'customer'}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </>
            )}

            {modalType === 'product' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category || 'chemicals'}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="chemicals">Chemicals</option>
                    <option value="tiles">Tiles</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price || ''}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Stock
                  </label>
                  <input
                    type="number"
                    value={formData.stock || ''}
                    onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
              </>
            )}

            <div className="flex items-center gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Save className="w-4 h-4 inline mr-2" />
                Save
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Sidebar navigation items
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  // Render active content
  const renderActiveContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'users':
        return <UsersManagement />;
      case 'products':
        return <ProductsManagement />;
      case 'orders':
        return <OrdersManagement />;
      case 'messages':
        return <MessagesManagement />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-100 ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex items-center justify-center h-16 bg-blue-600">
          <div className="flex items-center gap-2">
            <Beaker className="w-8 h-8 text-white" />
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>
        </div>

        <nav className="mt-8">
          {navigationItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-blue-50 dark:hover:bg-gray-700 ${
                  activeTab === item.id
                    ? 'bg-blue-50 dark:bg-gray-700 border-r-4 border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
              {user?.initials || 'A'}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.name || 'Admin User'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
            </div>
            <button
              onClick={onLogout}
              className="text-gray-400 hover:text-red-600"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white capitalize">
                {activeTab}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Welcome back, {user?.name || 'Admin'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </header>

        <main className="p-6">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            renderActiveContent()
          )}
        </main>
      </div>

      {/* Modal */}
      {showModal && <Modal />}
    </div>
  );
};

export default AdminPanel;