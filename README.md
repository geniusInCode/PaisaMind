# 💰 PaisaMind — Smart Personal Finance Tracker

> A full-stack personal finance web app with 25+ features — track expenses, plan investments, manage budgets, and get AI-driven financial insights.

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)
![Stack](https://img.shields.io/badge/Stack-MERN-green)
![Features](https://img.shields.io/badge/Features-25+-purple)

---

## 📸 Screenshots

> _Coming soon_

---

## ✨ Features

### 📊 Core Financial Features
| Feature | Description |
|---|---|
| **Dashboard** | Overview with stat cards (Income, Expense, Balance, Savings) + animated charts |
| **Transaction Manager** | Add/Edit/Delete income & expense entries with category, date, notes, and search/filter |
| **Analytics** | Visual breakdowns — bar charts, pie charts, spending trends by month/category |
| **Budget Planner** | Set and track monthly budgets per category with overspend alerts |
| **Savings Goals** | Create goals with target amount, emoji icon, deadline & progress bars |
| **Subscription Calendar** | Track all recurring subscriptions with renewal dates |

### 🔮 Advanced Planning Tools
| Feature | Description |
|---|---|
| **SIP & FIRE Calculator** | Simulate SIP investments and calculate Financial Independence target |
| **Net Worth Time Machine** | 3D timeline visualization of assets, liabilities & projected net worth |
| **Portfolio Manager** | Track stock/investment holdings with live-style metrics |
| **Card Optimizer** | Credit card recommendations based on spending habits |
| **Debt Tracker** | Monitor loan EMIs, remaining amounts, and interest rates |
| **Financial Passport** | Consolidated financial health summary and score |

### 🤖 AI & Smart Features
| Feature | Description |
|---|---|
| **AI Smart Analyzer** | Pattern-based insights — spending anomalies, savings tips, projections |
| **AI Financial Chatbot** | Interactive chatbot answering finance questions based on user data |
| **Voice Expense Tracker** | Log expenses using voice (Beta) |
| **Receipt Scanner** | Upload receipt images for auto expense extraction |

### 🛠️ Utility Features
| Feature | Description |
|---|---|
| **Bill Splitter** | Split group expenses with settlement tracking |
| **Tax Report** | Auto-generate tax summary from transaction data |
| **Achievements & Gamification** | XP points, levels, badges (Budget Master, 7-Day Streak, etc.) |
| **Notifications Center** | Alerts for budget limits, subscription renewals, and insights |
| **Trading App Guide** | Top 10 trading platforms with recommendations |
| **Insurance Guide** | Insurance product recommendations |

### ⚙️ Technical & UX Features
| Feature | Description |
|---|---|
| **Multi-Currency Support** | 7 currencies: INR, USD, EUR, GBP, JPY, AED, SGD with live rate conversion |
| **Live Market Ticker** | Scrolling NIFTY 50, SENSEX, and top stocks ticker in topbar |
| **6 Themes** | Default Dark, Cyberpunk, Matrix, Light, Ocean, Sunset — switchable in real time |
| **Dual Storage** | MongoDB (online) + localStorage fallback — seamless offline mode |
| **Data Export/Import** | JSON backup download and restore |
| **Auth System** | Login/Register with JWT + offline demo mode fallback |
| **Responsive Design** | Mobile-friendly with collapsible sidebar and hamburger menu |
| **Page Animations** | Smooth fadeUp and slideUp transitions between pages |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript, Chart.js |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcryptjs |
| Storage | MongoDB + localStorage (dual fallback) |

---

## 📁 Project Structure

```
paisamind-backend/
├── server.js               ← Entry point
├── config/
│   └── db.js               ← MongoDB connection
├── middleware/
│   └── auth.js             ← JWT auth middleware
├── models/
│   ├── User.js
│   ├── Transaction.js
│   ├── Goal.js
│   ├── Budget.js
│   ├── Subscription.js
│   └── SplitGroup.js
├── routes/
│   ├── auth.js
│   ├── transactions.js
│   ├── goals.js
│   ├── budgets.js
│   ├── subscriptions.js
│   ├── splits.js
│   ├── settings.js
│   └── analytics.js
└── utils/
    └── seedData.js
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/PaisaMind.git
cd PaisaMind
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
```bash
cp .env.example .env
```
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server
```bash
# Development
npm run dev

# Production
npm start
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| GET | /api/transactions | Get all transactions |
| POST | /api/transactions | Add transaction |
| PUT | /api/transactions/:id | Update transaction |
| DELETE | /api/transactions/:id | Delete transaction |
| GET | /api/goals | Get all goals |
| POST | /api/goals | Add goal |
| GET | /api/budgets | Get budget |
| PUT | /api/budgets | Update budget |
| GET | /api/subscriptions | Get subscriptions |
| GET | /api/splits | Get split groups |
| GET | /api/analytics/summary | Get financial summary |

---

## 👨‍💻 Author

**Abdul**
- 🔗 [GitHub](https://github.com/yourusername)
- 💼 [LinkedIn](https://linkedin.com/in/yourusername)

---

## 📌 Status

> This project is currently in **active development**.
> Core features are fully functional. Advanced AI and planning features are being integrated progressively.

---

⭐ If you found this useful, consider giving it a star!
