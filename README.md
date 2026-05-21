##🎓 SkillSphere - Online Learning PlatForm

A mordern online learning platform where users can explore courses, watch lessons, 
and enroll in skill-besed programs like Web Development, Design, Marketiong, and more.

## 🌐 Live URL
📎  [https://a-8-skil-shaper.vercel.app]

---

## ✨ Key Features

 - 🔐**Authenticaiton** - Email/Password Login & Google OAuth via Better Auth
 - 📚**All Courses Page** - Browse and serch courses by title
 - 🔒**Proteced Courses Page** - Only accessible when logged in 
 - 👤**My profile page** - View loged-in user info
 - 🏠**Hero Section** - Banner With call-to-action
 - ✏️**Update Profile** - Update name and image
 - 🔥**Populer section** - Top 3 highest-rated courses on hompage
 - 📌**Learning Tips** - Study and tiome manangement tips
 - 🏆**Top instructor section - Featured instructor cards 
 - 🆕**Trending courses** - Latest and thrending courses highlights
 - 🔎**Search funcitonality** - Search courses by title on All courses page
 - 🍞**Toast Notification** - A toast will be displayed when the user logs in
 - 🔃**Loading States** - Skeleton/spinenr on data fetching
 - ❎**404 Not found page** - Custom Not found page
 - 📱**Fully mobile responsive - Mobile, teblet, desktop
 - 📼**Animations** - smooth UI animation vai [Swiper.js / Mothon / Animation.css]

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | UI component library |
| [Better Auth](https://better-auth.com/) | Authentication (Email + Google) |
| [MongoDB](https://www.mongodb.com/) | Database via MongoDB Atlas |
| [ReactSpring](https://reactSpring.com/) | Hero slider / carousel |

---

##📁 Project structure

```
src/
├── app/
|   ├── (auth)/
|   |   ├── login                    #login page
|   |   └── register                 #register page
│   ├── (main)/   
│   │   ├── cours/[id]/              # Course details (protected)
│   │   ├── courses/                 # All courses page
│   │   ├── profile/                 # My Profile page
│   │   ├──  update-profile/         # Update profile form
│   │   ├── layout.jsx               # main layout
│   │   └── page.js                  # Home page
│   ├── api/   
│   │   └── auth/[...all]/route.js   # Better Auth API handler
│   └── not-found.jsx                # 404 page
│   └── layout.js                    # root layout
├── assets/
├── components/                      # Shared UI components
|        ├── hompage 
|        ├── sheard
├── lib/   
│   ├── auth.js                      # Better Auth server config
│   └── auth-client.js               # Better Auth client config
│   └── data.js                      # function configer
└── proxy.js