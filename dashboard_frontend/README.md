# Modern Business Dashboard

A modern, clean, and responsive admin dashboard application built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Fixed Black Sidebar Navigation** - 240px width sidebar with collapsible functionality
- **Monochrome Theme** - Professional color scheme (#111827 primary, #16A34A accent, #f9fafb background)
- **Responsive Layout** - Mobile-friendly with collapsible sidebar
- **Five Key Pages**:
  - Dashboard Analytics - Overview with key metrics and recent orders
  - Orders Management - View and filter all customer orders
  - Customers - Customer database with search functionality
  - Products - Product catalog with inventory tracking
  - Support Tickets - Customer support request management
- **Card-Based Layout** - Clean, organized content presentation
- **Mock Data** - Pre-populated with realistic sample data for demonstration

## Tech Stack

- **Framework**: Next.js 15.2.3
- **UI Library**: React 19.0.0
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS v4.0.0
- **Icons**: Lucide React 0.468.0
- **Build**: Static Export enabled

## Project Structure

```
dashboard_frontend/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── page.tsx              # Dashboard analytics page
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   ├── orders/
│   │   │   └── page.tsx          # Orders management page
│   │   ├── customers/
│   │   │   └── page.tsx          # Customers page
│   │   ├── products/
│   │   │   └── page.tsx          # Products catalog page
│   │   └── support/
│   │       └── page.tsx          # Support tickets page
│   ├── components/               # Reusable components
│   │   ├── DashboardLayout.tsx   # Main layout with sidebar & header
│   │   ├── Card.tsx              # Card component
│   │   └── StatCard.tsx          # Statistics card component
│   └── data/
│       └── mockData.ts           # Mock data for all pages
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.ts                # Next.js config
└── postcss.config.mjs            # PostCSS config
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Navigate to the project directory:
```bash
cd dashboard_frontend
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-update as you edit files.

### Build

Create a production build:

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Start Production Server

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Design System

### Color Palette

- **Primary**: #111827 (Dark Gray/Black)
- **Secondary**: #6B7280 (Medium Gray)
- **Success/Accent**: #16A34A (Green)
- **Error**: #EF4444 (Red)
- **Background**: #f9fafb (Light Gray)
- **Surface**: #ffffff (White)
- **Text**: #111827 (Dark Gray/Black)

### Layout

- **Sidebar**: Fixed 240px width, collapsible on mobile
- **Header**: Sticky top bar with toggle button and user menu
- **Main Content**: Responsive grid layout with card-based sections
- **Cards**: White background with subtle shadow and border

## Pages Overview

### 1. Dashboard Analytics (/)
- Four key metric cards (Revenue, Orders, Customers, Avg Order Value)
- Recent orders table
- Growth indicators with percentage changes

### 2. Orders (/orders)
- Complete orders list with filtering by status
- Status badges (pending, processing, completed, cancelled)
- Sortable table with order details

### 3. Customers (/customers)
- Customer database with search functionality
- Customer lifetime value and order history
- Contact information display

### 4. Products (/products)
- Product catalog with category filtering
- Inventory status indicators
- Price and sales data
- Card-based grid layout

### 5. Support Tickets (/support)
- Support request management
- Filter by status and priority
- Priority badges (urgent, high, medium, low)
- Status tracking (open, in-progress, resolved, closed)

## Mock Data

The application includes comprehensive mock data in `src/data/mockData.ts`:

- 5 sample orders
- 5 sample customers
- 5 sample products
- 5 sample support tickets
- Dashboard statistics

This data can be easily replaced with real API calls when backend integration is needed.

## Customization

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Wrap content with `<DashboardLayout>`
4. Add navigation link in `DashboardLayout.tsx`

### Styling

- Modify color scheme in `src/app/globals.css` CSS variables
- Update Tailwind classes throughout components
- Adjust layout dimensions in `DashboardLayout.tsx`

### Data Integration

Replace mock data imports with API calls:

```typescript
// Replace this:
import { mockOrders } from "@/data/mockData";

// With API calls:
const response = await fetch('/api/orders');
const orders = await response.json();
```

## Environment Variables

The following environment variables are available (see `.env` file):

- `NEXT_PUBLIC_API_BASE` - API base URL
- `NEXT_PUBLIC_BACKEND_URL` - Backend service URL
- `NEXT_PUBLIC_FRONTEND_URL` - Frontend URL
- `NEXT_PUBLIC_WS_URL` - WebSocket URL
- Additional configuration variables

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Static export for fast loading
- Optimized bundle size
- Client-side navigation
- Responsive images and assets

## Future Enhancements

- Real-time data updates via WebSocket
- Advanced filtering and sorting
- Data export functionality
- User authentication and authorization
- Dark mode toggle
- Advanced analytics charts
- Notification system
- Multi-language support

## License

This project is part of a larger business dashboard system.

## Support

For issues or questions, please refer to the project documentation or create a support ticket.
