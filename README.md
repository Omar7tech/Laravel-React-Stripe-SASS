# Laravel + React + Stripe SaaS Starter Kit

<div align="center">

![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20.svg?style=for-the-badge&logo=laravel)
![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0.0-38B2AC.svg?style=for-the-badge&logo=tailwind-css)
![Stripe](https://img.shields.io/badge/Stripe-PHP-19.3.0-purple.svg?style=for-the-badge&logo=stripe)
![Stars](https://img.shields.io/github/stars/Omar7tech/Laravel-React-Stripe-SASS?style=for-the-badge&logo=github)
![Forks](https://img.shields.io/github/forks/Omar7tech/Laravel-React-Stripe-SASS?style=for-the-badge&logo=github)
![License](https://img.shields.io/github/license/Omar7tech/Laravel-React-Stripe-SASS?style=for-the-badge)

</div>

> A complete Laravel 12 + React 19 starter kit with Stripe payments, authentication, and credit system - everything you need to build your SaaS application.

---

## What This Includes

A well-structured starter kit with the essential SaaS features:

- **User Authentication** - Registration, login, email verification
- **Stripe Payments** - Credit packages and payment processing
- **Credit System** - Feature access control with usage tracking
- **Analytics Dashboard** - User metrics and transaction history
- **Modern UI** - Responsive design with Tailwind CSS

---

## Who This Is For

### **Entrepreneurs & Indie Hackers**
- Get started quickly with proven patterns
- Focus on your unique features
- Built-in payment processing

### **Developers & Agencies**
- Save development time on common features
- Modern, maintainable codebase
- Good foundation for client projects

### **Students & Learners**
- Real-world SaaS architecture example
- Learn modern web development patterns
- Complete project with best practices

---

## Features

### **Core Functionality**
- **Authentication** - Complete user registration and login system
- **Credit System** - Users can purchase credits and use features
- **Stripe Integration** - Full payment processing with webhooks
- **Dashboard** - Analytics and user management interface
- **Responsive Design** - Works on all screen sizes

---

## Tech Stack

### **Backend**
- **Laravel 12** - Modern PHP framework
- **MySQL/SQLite** - Database with migrations
- **Stripe PHP** - Payment processing
- **Inertia 2** - Seamless SPA experience

### **Frontend**
- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible components

---

## Quick Start

### Prerequisites
- PHP 8.2+
- Node.js 18+
- Composer

### Installation

```bash
# Clone the repository
git clone https://github.com/Omar7tech/Laravel-React-Stripe-SASS.git

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

## Project Structure

```
laravel-react-stripe-sass/
├── app/                    # Application logic
│   ├── Http/Controllers/   # Controllers
│   └── Models/            # Eloquent models
├── database/              # Database files
│   ├── migrations/        # Schema definitions
│   └── seeders/          # Sample data
├── resources/js/          # React components
├── routes/               # API routes
└── config/               # Configuration
```

---

## Database Schema

- **Users** - User accounts with credit balance
- **Features** - Available features with credit costs
- **Packages** - Credit packages for purchase
- **Transactions** - Payment records
- **Used Features** - Feature usage tracking

---

## API Endpoints

```
POST   /login                    # User authentication
POST   /register                 # User registration
GET    /dashboard                # Dashboard data
POST   /buy-credits/{package}   # Purchase credits
GET    /feature1                # Calculate sum feature
POST   /feature1/calculate       # Process calculation
```

---

## Environment Configuration

```env
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is licensed under the MIT License.

---

<div align="center">

**Built with ❤️ by [Omar7tech](https://github.com/Omar7tech)**

</div>
