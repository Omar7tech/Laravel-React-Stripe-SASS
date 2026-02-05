# Laravel React Stripe SaaS Starter Kit

A modern, fully-featured Laravel 12 + Inertia 2 + React 19 SaaS application starter kit with Stripe integration for building subscription-based services.

## 🚀 Features

### **Core Functionality**
- **User Authentication**: Complete user registration, login, email verification, and 2FA support
- **Credit System**: User credit management with purchase history and usage tracking
- **Feature Access**: Feature usage tracking with detailed analytics and history
- **Stripe Integration**: Full Stripe payment processing for credit purchases
- **Modern Dashboard**: Comprehensive analytics dashboard with statistics and data visualization
- **Responsive Design**: Mobile-first responsive UI using Tailwind CSS

### **Tech Stack**

#### **Backend**
- **Laravel 12**: Modern PHP framework with robust routing and middleware
- **Inertia 2**: Seamless server-side rendering with client-side routing
- **MySQL/SQLite**: Database with proper relationships and migrations
- **Stripe PHP**: Official Stripe SDK for payment processing
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

#### **Frontend**
- **React 19**: Latest React with hooks and modern patterns
- **TypeScript**: Full type safety and IntelliSense support
- **Vite**: Fast build tool and development server
- **Radix UI**: Modern, accessible component library
- **Lucide React**: Beautiful, consistent icon library

## 📁 Project Structure

```
laravel-react-stripe-sass/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── DashboardController.php
│   │   │   └── CreditController.php
│   ├── Models/
│   │   ├── User.php
│   │   ├── Feature.php
│   │   ├── UsedFeature.php
│   │   ├── Transaction.php
│   │   └── Package.php
│   ├── Providers/
│   │   └── RouteServiceProvider.php
├── database/
│   ├── migrations/
│   │   ├── 2026_01_30_100252_create_packages_table.php
│   │   ├── 2026_01_30_100509_create_transactions_table.php
│   │   ├── 2026_01_30_100523_create_features_table.php
│   │   └── 2026_01_30_100535_create_used_features_table.php
├── resources/
│   ├── js/
│   │   ├── Pages/
│   │   │   ├── Dashboard.tsx
│   │   ├── Welcome.tsx
│   │   └── ...
│   ├── css/
│   │   └── app.css
├── routes/
│   ├── web.php
│   └── api.php
├── composer.json
├── package.json
├── vite.config.ts
└── README.md
```

## 🗄️ Database Schema

### **Users Table**
- `id`, `name`, `email`, `password`, `available_credits`
- `email_verified_at`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`
- `two_factor_confirmed_at`

### **Features Table**
- `id`, `image`, `route_name`, `name`, `description`, `required_credits`, `active`
- `created_at`, `updated_at`

### **Packages Table**
- `id`, `name`, `price`, `credits`
- `created_at`, `updated_at`

### **Transactions Table**
- `id`, `user_id`, `package_id`, `price`, `credits`, `session_id`, `status`
- `created_at`, `updated_at`

### **Used Features Table**
- `id`, `user_id`, `feature_id`, `credits`, `data` (JSON), `created_at`, `updated_at`

## 🔧 Installation & Setup

### Prerequisites
- PHP 8.2+
- Composer 2.0+
- Node.js 18+
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/your-username/laravel-react-stripe-sass

# Install dependencies
composer install
npm install

# Environment setup
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed

# Start development server
npm run dev
```

## 💳 Key Components

### **Dashboard** (`resources/js/Pages/Dashboard.tsx`)
- **Statistics Cards**: Total credits, credits used, total paid, features used
- **Feature Usage Table**: Detailed history with feature names, descriptions, credits consumed
- **Transaction History**: Payment history with package details, amounts, and dates
- **Most Used Feature**: Analytics showing most frequently used feature
- **Responsive Design**: Mobile-first layout with Tailwind CSS

### **Authentication System**
- **Laravel Breeze**: Pre-built authentication scaffolding
- **Email Verification**: Secure email verification workflow
- **Two-Factor Authentication**: Enhanced security with backup codes
- **Session Management**: Secure session handling

### **Payment System**
- **Stripe Integration**: Complete payment processing
- **Credit Packages**: Tiered pricing (Basic, Silver, Gold)
- **Transaction Recording**: Full audit trail
- **Webhook Handling**: Stripe webhook processing

### **Key Features**
- **Real-time Updates**: Live dashboard with Inertia
- **Usage Analytics**: Track feature popularity and user engagement
- **Credit Management**: Automatic deduction and balance tracking
- **Responsive UI**: Works seamlessly on all devices
- **Type Safety**: Full TypeScript support
- **Modern Stack**: Vite, React 19, Tailwind CSS

## 🎯 Business Logic

### **Credit System**
- Users start with a set of credits (configurable via packages)
- Credits are deducted when features are used
- Detailed usage tracking prevents abuse
- Credit purchase system via Stripe integration
- Available credits displayed in real-time

### **Feature Access**
- Features require specific credit amounts to access
- Usage is tracked per user with timestamps
- Popular features can be identified and promoted
- Feature usage data stored for analytics

### **Payment Processing**
- Stripe handles credit purchases securely
- Multiple package tiers (Basic: $5/20 credits, Silver: $20/100 credits, Gold: $50/500 credits)
- Transaction history maintains complete audit trail
- Webhook processing ensures payment confirmation

## 🔐 Security Features

### **Authentication**
- **Secure Registration**: Email verification required
- **Two-Factor Auth**: Optional 2FA for enhanced security
- **Session Security**: Secure session management
- **Password Hashing**: Bcrypt encryption for password storage
- **CSRF Protection**: Built-in Laravel CSRF protection
- **Rate Limiting**: Prevents abuse and API exploitation

## 📱 Frontend Features

### **User Interface**
- **Modern Dashboard**: Clean, intuitive interface with real-time updates
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Interactive Components**: Hover effects, smooth transitions, loading states
- **Data Visualization**: Charts and graphs for usage analytics
- **Accessibility**: WCAG compliant with semantic HTML
- **Performance**: Optimized bundle sizes and lazy loading

## 🚀 Deployment Ready

### **Production Ready**
- **Environment Configured**: Proper `.env` setup for production
- **Asset Optimization**: Vite builds optimized production assets
- **Database Migrations**: Ready for production deployment
- **API Documentation**: Clear endpoints for frontend integration
- **Testing**: Comprehensive test coverage included

## 📚 Documentation

### **API Endpoints**
- `POST /login` - User authentication
- `POST /register` - User registration
- `POST /logout` - User logout
- `GET /dashboard` - Dashboard data and statistics
- `POST /credits/purchase` - Process Stripe payments
- `GET /features` - List available features
- `POST /features/{id}/use` - Access specific feature

### **Configuration**
- **Environment Variables**: Database, Stripe keys, mail settings
- **Package Tiers**: Configurable credit packages and pricing
- **Feature Costs**: Dynamic credit requirements per feature
- **Rate Limits**: Configurable usage limits and restrictions

## 🎓 Perfect For

This starter kit is ideal for:
- **SaaS Applications**: Subscription-based services with credit systems
- **Educational Platforms**: Learning management systems with feature access
- **B2B Services**: Internal tools with usage analytics
- **Freelance Platforms**: Project management with client billing
- **Startups**: MVP development with rapid scaling capability

---

**Built with ❤️ using Laravel 12 + Inertia 2 + React 19 + Stripe + Tailwind CSS**
