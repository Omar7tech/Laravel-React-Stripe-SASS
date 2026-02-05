# Laravel React Educational Platform

<div align="center">

![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20.svg?style=for-the-badge&logo=laravel)
![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0.0-38B2AC.svg?style=for-the-badge&logo=tailwind-css)
![Stripe](https://img.shields.io/badge/Stripe-PHP-19.3.0-purple.svg?style=for-the-badge&logo=stripe)

</div>

> A comprehensive Laravel 12 + Inertia 2 + React 19 educational platform designed for beginners to learn web development concepts through hands-on practice.

---

## 🎓 Educational Purpose

### **Learning Objectives**
This project is designed as an **educational tool** for teaching fundamental web development concepts:

- **🔐 Authentication**: User registration, login, and session management
- **💳 Payment Integration**: Stripe payment processing and credit systems
- **📊 Analytics**: Feature usage tracking and dashboard visualization
- **⚡ Feature Access**: Credit-based feature access system
- **🎨 Modern UI**: Responsive design with Tailwind CSS and React components

### **Target Audience**
- **👨 Beginners**: Developers new to Laravel and React
- **🎓 Students**: Learning web development concepts
- **👨‍🏫 Educators**: Teaching material for web development courses
- **🚀 Startups**: Quick MVP development and prototyping

---

## 🎨 Design Philosophy

### **Modern & Professional**
- **Clean Architecture**: Utilizes modern design patterns with Tailwind CSS
- **Component-Based**: Built with Radix UI for accessible, reusable components
- **Responsive First**: Mobile-optimized layout that works on all screen sizes
- **Interactive Elements**: Smooth transitions, hover states, and loading indicators
- **Semantic HTML**: Proper structure and accessibility compliance
- **Dark Mode Support**: Automatic theme switching for user preference

### **Visual Design System**
- **Color Palette**: 
  - Primary: `#3B82F6` (Blue) - Actions and primary elements
  - Secondary: `#64748B` (Slate) - Text and backgrounds
  - Accent: `#F97316` (Orange) - Warnings and destructive states
  - Success: `#10B981` (Green) - Positive feedback
  - Neutral: `#6B7280` (Gray) - Secondary information

- **Typography**: Inter font family for clean, readable text
- **Spacing**: Consistent visual hierarchy using Tailwind's spacing system
- **Icons**: Lucide React icons for consistency and clarity

---

## 🚀 Features

### **Core Functionality**
- **🔐 User Authentication**: Complete user registration, login, email verification, and 2FA support
- **💳 Credit System**: User credit management with purchase history and usage tracking
- **⚡ Feature Access**: Feature usage tracking with detailed analytics and history
- **💰 Stripe Integration**: Full Stripe payment processing for credit purchases
- **📊 Modern Dashboard**: Comprehensive analytics dashboard with statistics and data visualization
- **📱 Responsive Design**: Mobile-first responsive UI using Tailwind CSS

---

## 🛠 Tech Stack

### **Backend Technologies**
<div align="center">

![PHP](https://img.shields.io/badge/PHP-8.2+-777BB4.svg?style=for-the-badge&logo=php)
![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20.svg?style=for-the-badge&logo=laravel)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-4479A1.svg?style=for-the-badge&logo=mysql)
![Stripe](https://img.shields.io/badge/Stripe-PHP-19.3.0-purple.svg?style=for-the-badge&logo=stripe)

</div>

- **Laravel 12**: Modern PHP framework with robust routing and middleware
- **Inertia 2**: Seamless server-side rendering with client-side routing
- **MySQL/SQLite**: Database with proper relationships and migrations
- **Stripe PHP**: Official Stripe SDK for payment processing
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

### **Frontend Technologies**
<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF.svg?style=for-the-badge&logo=vite)

</div>

- **React 19**: Latest React with hooks and modern patterns
- **TypeScript**: Full type safety and IntelliSense support
- **Vite**: Fast build tool and development server
- **Radix UI**: Modern, accessible component library
- **Lucide React**: Beautiful, consistent icon library

---

## 📁 Project Architecture

```
laravel-react-stripe-sass/
├── 📁 app/                          # Application Logic
│   ├── Http/Controllers/            # API Controllers
│   │   ├── DashboardController.php     # Dashboard analytics
│   │   ├── CreditController.php        # Payment processing
│   │   ├── Feature1Controller.php      # Calculate Sum feature
│   │   └── Feature2Controller.php      # Calculate Subtraction feature
│   ├── Models/                     # Eloquent Models
│   │   ├── User.php                 # User management
│   │   ├── Feature.php              # Feature definitions
│   │   ├── UsedFeature.php          # Usage tracking
│   │   ├── Transaction.php          # Payment records
│   │   └── Package.php              # Credit packages
│   └── Providers/                  # Service Providers
├── 🗄️ database/                     # Database Layer
│   ├── migrations/                  # Schema Definitions
│   └── seeders/                    # Sample Data
├── 🎨 resources/                   # Frontend Assets
│   ├── js/Pages/                 # React Components
│   │   ├── Dashboard.tsx           # Analytics dashboard
│   │   ├── Welcome.tsx             # Landing page
│   │   ├── Feature1.tsx           # Calculate Sum page
│   │   └── Feature2.tsx           # Calculate Subtraction page
│   └── css/                      # Stylesheets
├── 🛣 routes/                       # URL Routing
├── ⚙️ config/                       # Application Config
└── 📦 package.json                  # Dependencies
```

---

## 🗄️ Database Schema

### **Users Table**
```sql
id | name | email | password | available_credits | created_at | updated_at
---|-------|-------|----------|------------------|------------|------------
```

### **Features Table**
```sql
id | image | route_name | name | description | required_credits | active
---|-------|-------|-----------|-------------|----------------|--------
```

### **Packages Table**
```sql
id | name | price | credits | created_at | updated_at
---|----|------|-------|---------|----------|----------
```

### **Transactions Table**
```sql
id | user_id | package_id | price | credits | session_id | status
---|--------|----------|------------|---------|-----------|--------
```

### **Used Features Table**
```sql
id | user_id | feature_id | credits | data | created_at | updated_at
---|----|--------|------------|--------|------|----------|----------
```

---

## 🚀 Quick Start

### **Prerequisites**
<div align="center">

![PHP](https://img.shields.io/badge/PHP-%3E8.2+-777BB4.svg?style=for-the-badge&logo=php)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg?style=for-the-badge&logo=node.js)
![Composer](https://img.shields.io/badge/Composer-2.0+-8856F7.svg?style=for-the-badge&logo=composer)

</div>

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

---

## 💳 Key Components

### **🎯 Dashboard** (`resources/js/Pages/Dashboard.tsx`)
<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg?style=for-the-badge&logo=typescript)

</div>

- **📊 Statistics Cards**: Total credits, credits used, total paid, features used
- **📈 Feature Usage Table**: Detailed history with feature names, descriptions, credits consumed
- **💰 Transaction History**: Payment history with package details, amounts, and dates
- **⚡ Most Used Feature**: Analytics showing most frequently used feature
- **📱 Responsive Design**: Mobile-first layout with Tailwind CSS

### **🔐 Authentication System**
- **Laravel Breeze**: Pre-built authentication scaffolding
- **Email Verification**: Secure email verification workflow
- **Two-Factor Authentication**: Optional 2FA for enhanced security
- **Session Management**: Secure session handling

### **💳 Payment System**
- **Stripe Integration**: Complete payment processing
- **Credit Packages**: Tiered pricing (Basic, Silver, Gold)
- **Transaction Recording**: Full audit trail
- **Webhook Handling**: Stripe webhook processing

### **⚡ Feature System**
- **Calculate Sum**: Educational feature demonstrating basic arithmetic operations
- **Calculate Subtraction**: Educational feature demonstrating subtraction operations
- **Credit Validation**: Prevents usage when credits are insufficient
- **Usage Tracking**: Records all feature interactions for learning analytics

---

## 🚀 Deployment & Production

### **Environment Configuration**
```env
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
STRIPE_SECRET_KEY=sk_test_xxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxx
```

### **Production Ready**
- ✅ **Environment Configured**: Proper `.env` setup for production
- ⚡ **Asset Optimization**: Vite builds optimized production assets
- 🗄️ **Database Migrations**: Ready for production deployment
- 📚 **API Documentation**: Clear endpoints for frontend integration
- 🧪 **Testing**: Comprehensive test coverage included

---

## 📚 API Documentation

### **Core Endpoints**
```http
POST   /login                    # User authentication
POST   /register                 # User registration  
POST   /logout                  # User logout
GET    /dashboard                # Dashboard data and statistics
POST   /buy-credits/webhook      # Stripe webhook handling
GET    /buy-credits             # Credit purchase page
POST   /buy-credits/{package}   # Process credit purchase
GET    /feature1                # Calculate Sum feature page
POST   /feature1/calculate       # Calculate Sum processing
GET    /feature2                # Calculate Subtraction feature page  
POST   /feature2/calculate       # Calculate Subtraction processing
GET    /buy-credits/success       # Purchase success page
GET    /buy-credits/cancel        # Purchase cancel page
```

### **Feature Controllers**
- **Feature1Controller**: Calculate Sum feature with credit validation
- **Feature2Controller**: Calculate Subtraction feature with credit validation

### **Credit Management**
- **CreditController**: Handles Stripe payments, webhooks, and credit packages
- **CreditService**: Manages user credit balance and transactions

### **Request/Response Examples**

#### **Feature Usage**
```http
POST /feature1/calculate
Content-Type: application/json
Body: {
  "number1": 10,
  "number2": 20
}

Response: {
  "answer": "30", // 10 + 20 = 30
  "redirect": "feature1.index"
}
```

#### **Credit Purchase**
```http
POST /buy-credits/{package}
Content-Type: application/json
Headers: {
  "X-CSRF-TOKEN": "token"
}

Response: {
  "redirect": "stripe_checkout_url"
}
```

### **Authentication Flow**
- **Middleware**: `auth` and `verified` middleware applied to protected routes
- **Session Management**: Laravel's built-in session handling
- **CSRF Protection**: Automatic CSRF token validation

---

## 🎯 Educational Use Cases

<div align="center">

![Education](https://img.shields.io/badge/Education-4CAF50.svg?style=for-the-badge)
![Learning](https://img.shields.io/badge/Learning-228B22.svg?style=for-the-badge)

</div>

This educational platform is ideal for:

- **� Students**: Learning web development concepts through hands-on practice
- **👨‍� Educators**: Teaching material for web development courses
- **🏢 Self-Learners**: Understanding full-stack development patterns
- **� Beginners**: Starting their journey in web development
- **� Developers**: Learning modern frameworks and best practices

---

<div align="center">

**Built with ❤️ for educational purposes**

![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20.svg?style=for-the-badge&logo=laravel)
![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg?style=for-the-badge&logo=typescript)
![Stripe](https://img.shields.io/badge/Stripe-PHP-19.3.0-purple.svg?style=for-the-badge&logo=stripe)

</div>
