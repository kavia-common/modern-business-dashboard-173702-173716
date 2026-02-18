// Mock data for dashboard application

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  date: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  totalSpent: number;
  joinDate: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
}

export interface SupportTicket {
  id: string;
  customer: string;
  subject: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "open" | "in-progress" | "resolved" | "closed";
  date: string;
}

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "John Doe",
    product: "Premium Widget",
    amount: 299.99,
    status: "completed",
    date: "2025-01-15",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    product: "Standard Package",
    amount: 149.99,
    status: "processing",
    date: "2025-01-16",
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    product: "Enterprise Solution",
    amount: 999.99,
    status: "pending",
    date: "2025-01-16",
  },
  {
    id: "ORD-004",
    customer: "Alice Williams",
    product: "Basic Plan",
    amount: 49.99,
    status: "completed",
    date: "2025-01-14",
  },
  {
    id: "ORD-005",
    customer: "Charlie Brown",
    product: "Premium Widget",
    amount: 299.99,
    status: "cancelled",
    date: "2025-01-13",
  },
];

export const mockCustomers: Customer[] = [
  {
    id: "CUST-001",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1-555-0101",
    totalOrders: 12,
    totalSpent: 2499.88,
    joinDate: "2024-06-15",
  },
  {
    id: "CUST-002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1-555-0102",
    totalOrders: 8,
    totalSpent: 1599.92,
    joinDate: "2024-07-22",
  },
  {
    id: "CUST-003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "+1-555-0103",
    totalOrders: 5,
    totalSpent: 1249.95,
    joinDate: "2024-09-10",
  },
  {
    id: "CUST-004",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    phone: "+1-555-0104",
    totalOrders: 15,
    totalSpent: 3749.85,
    joinDate: "2024-05-01",
  },
  {
    id: "CUST-005",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phone: "+1-555-0105",
    totalOrders: 3,
    totalSpent: 449.97,
    joinDate: "2024-11-20",
  },
];

export const mockProducts: Product[] = [
  {
    id: "PROD-001",
    name: "Premium Widget",
    category: "Electronics",
    price: 299.99,
    stock: 45,
    sold: 127,
  },
  {
    id: "PROD-002",
    name: "Standard Package",
    category: "Software",
    price: 149.99,
    stock: 0,
    sold: 89,
  },
  {
    id: "PROD-003",
    name: "Enterprise Solution",
    category: "Services",
    price: 999.99,
    stock: 12,
    sold: 34,
  },
  {
    id: "PROD-004",
    name: "Basic Plan",
    category: "Subscriptions",
    price: 49.99,
    stock: 999,
    sold: 456,
  },
  {
    id: "PROD-005",
    name: "Deluxe Kit",
    category: "Hardware",
    price: 599.99,
    stock: 23,
    sold: 67,
  },
];

export const mockTickets: SupportTicket[] = [
  {
    id: "TKT-001",
    customer: "John Doe",
    subject: "Login issues with account",
    priority: "high",
    status: "in-progress",
    date: "2025-01-16",
  },
  {
    id: "TKT-002",
    customer: "Jane Smith",
    subject: "Payment failed during checkout",
    priority: "urgent",
    status: "open",
    date: "2025-01-16",
  },
  {
    id: "TKT-003",
    customer: "Bob Johnson",
    subject: "Feature request: Dark mode",
    priority: "low",
    status: "open",
    date: "2025-01-15",
  },
  {
    id: "TKT-004",
    customer: "Alice Williams",
    subject: "Cannot download invoice",
    priority: "medium",
    status: "resolved",
    date: "2025-01-14",
  },
  {
    id: "TKT-005",
    customer: "Charlie Brown",
    subject: "Product not as described",
    priority: "high",
    status: "closed",
    date: "2025-01-13",
  },
];

export const dashboardStats = {
  totalRevenue: 45678.9,
  totalOrders: 1234,
  totalCustomers: 567,
  averageOrderValue: 189.45,
  revenueChange: "+12.5% from last month",
  ordersChange: "+8.3% from last month",
  customersChange: "+15.2% from last month",
  avgOrderChange: "+2.1% from last month",
};
