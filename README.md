# 📚 BookBorrow

A modern book discovery & borrowing platform built with Next.js — browse books, track your reading status, leave reviews, and manage your reader profile.

**🔗 Live Demo:** [bookborrow-blue.vercel.app](https://bookborrow-blue.vercel.app/)

---

## 📖 Overview

BookBorrow is a full-stack Next.js application where readers can explore a curated book collection, view detailed book pages, track what they're reading, and share reviews with the community. It features a fully authenticated experience powered by Better Auth, an animated hero banner, and live count-up stats showcasing platform activity.

## ✨ Features

- 🎠 Swiper.js powered hero banner with autoplay & navigation
- 📊 Animated count-up statistics (books read, registered readers, collection size, satisfaction rate) triggered on scroll via Intersection Observer
- 🔐 Full authentication flow (Sign up / Login / Logout) using **Better Auth** + MongoDB adapter
- 📚 Browse all books & view individual book detail pages
- ✅ Reading status tracker per book
- ⭐ Book review system
- 👤 User profile page
- 🎞️ Marquee-style scrolling section (react-fast-marquee)
- 🔔 Toast notifications (react-toastify)
- 📱 Fully responsive UI with Tailwind CSS + DaisyUI

## 🛠️ Tech Stack

| Category | Tech |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Styling | Tailwind CSS 4 + DaisyUI |
| Auth | Better Auth + MongoDB Adapter |
| Database | MongoDB |
| Forms | React Hook Form |
| Carousel | Swiper.js |
| Notifications | react-toastify |
| Deployment | Vercel |

## 📂 Project Structure

```
bookborrow/
├── public/                    # Book cover images
├── src/
│   ├── app/
│   │   ├── api/auth/          # Better Auth API routes
│   │   ├── book/[id]/         # Dynamic book detail page
│   │   ├── books/             # All books listing
│   │   ├── login/ signin/     # Auth pages
│   │   ├── profile/           # User profile
│   │   └── page.js            # Home page
│   ├── Component/
│   │   ├── Homebanner/        # Swiper hero banner
│   │   ├── Homebook/          # Book cards
│   │   ├── Readstatus/        # Animated stats counter
│   │   ├── Review/            # Book review system
│   │   ├── Navbar/ Footer/
│   │   └── logoutbtn/
│   ├── Data/                  # Static/seed data
│   └── lib/                   # Utilities & auth config
└── package.json
```

## 🚀 Getting Started

\`\`\`bash
# Clone the repo
git clone https://github.com/turkyfarhad999/bookborrow.git
cd bookborrow

# Install dependencies
npm install

# Set up environment variables
# Create a .env.local file with your MongoDB URI & Better Auth secrets

# Run locally
npm run dev
\`\`\`

## 🔮 Future Improvements

- Actual book borrowing/return workflow with due dates
- Search & filter by genre/author
- Admin dashboard for managing the book collection
- Wishlist / bookmarking feature

## 👤 Author

**Turky Farhad**
CSE, RUET | MERN Stack Developer
[GitHub](https://github.com/turkyfarhad999)

---

⭐ If you liked this project, consider giving it a star!
