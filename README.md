# Core & Drill — React Website

A premium, animated React + Vite + Tailwind website for **Core & Drill**, a concrete cutting, drilling, anchor fixing and electrical rewiring business.

## ✨ Features

- **7 fully linked pages**: Home, About, Services, Projects, Videos, FAQ, Contact
- **Framer Motion animations** throughout — page transitions, scroll reveals, parallax, stagger animations
- **Custom magnetic cursor** that grows on hover over interactive elements
- **Magnetic buttons** that subtly follow the cursor
- **Glassmorphism** stat cards with backdrop blur
- **Parallax image effects** on scroll
- **Hover-expanding service list** (services page)
- **Animated counter** stats that tick up on scroll into view
- **Filterable project gallery** with smooth layout animations
- **Video lightbox modal** with YouTube embeds
- **Sticky scroll-aware navigation** that morphs as you scroll
- **Scroll progress bar** at top of every page
- **Animated back-to-top button** with floating arrow
- **FAQ accordion** with smooth expand/collapse
- **Why Choose Us** grid with rotating icon hover effects
- **Client logo marquee** with edge fades
- **Mobile responsive** with animated hamburger menu

## 🎨 Design System

- **Colors**: Orange `#ff6a00` + Dark Grey `#1a1a1a` on Cream `#f5f5f3`
- **Typography**: Bebas Neue (display) + Barlow Condensed (heads) + Barlow (body)
- **Aesthetic**: Industrial / construction with bold typography and sharp angles

## 🚀 Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### 3. Build for production

```bash
npm run build
```

Production files will be in the `dist/` folder. You can preview the build with:

```bash
npm run preview
```

## 📁 Project Structure

```
core-and-drill/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx           # Custom magnetic cursor
│   │   ├── MagneticButton.jsx   # Magnetic hover button
│   │   ├── Header.jsx           # Sticky nav with scroll effect
│   │   ├── Footer.jsx           # Site footer
│   │   ├── PageHeader.jsx       # Interior page hero
│   │   ├── CTABanner.jsx        # Reusable CTA section
│   │   ├── SectionTitle.jsx     # Reusable title + tag + fade
│   │   ├── ScrollProgress.jsx   # Top progress bar
│   │   ├── BackToTop.jsx        # Floating back-to-top button
│   │   ├── WhyChooseUs.jsx      # 6-card reasons grid
│   │   ├── ClientStrip.jsx      # Client logo marquee
│   │   └── FAQ.jsx              # Accordion FAQ
│   ├── pages/
│   │   ├── Home.jsx             # Homepage
│   │   ├── About.jsx            # About + team + process
│   │   ├── Services.jsx         # Services + hover-expand list
│   │   ├── Projects.jsx         # Filterable gallery
│   │   ├── Videos.jsx           # Video grid + modal
│   │   ├── FAQ.jsx              # FAQ page
│   │   └── Contact.jsx          # Form + info card + map
│   ├── App.jsx                  # Routes + page transitions
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles + Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎬 Replacing Video Placeholders

Open `src/pages/Videos.jsx`. The `videos` array contains both real samples (`type: 'video'`) and placeholders (`type: 'placeholder'`).

To convert a placeholder to a real video:

```js
// Before
{ type: 'placeholder', cat: 'Floor Sawing', title: '...', desc: '...', meta: [...] }

// After
{ type: 'video', id: 'YOUR_YOUTUBE_ID', cat: 'Floor Sawing', title: '...', desc: '...', meta: [...], img: 'YOUR_THUMBNAIL_URL' }
```

The YouTube ID is the part after `v=` in any YouTube URL (e.g., `https://youtube.com/watch?v=oHg5SJYRHA0` → ID is `oHg5SJYRHA0`).

## 🛠 Customization

- **Business info** (phone, email, address): Search across files for `+91 98765 43210`, `info@coreanddrill.com`, `Civil Lines, Gorakhpur`
- **Colors**: Edit `tailwind.config.js` — change the `orange` color values
- **Fonts**: Change Google Fonts link in `index.html` and update `tailwind.config.js`
- **Animations intensity**: Each Framer Motion component has `transition` props you can tone down

## 📦 Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- React Router DOM 6
- Lucide React (icons)

## 📝 License

This project is custom-built for Core & Drill. Imagery is from Unsplash (free to use). Fonts are from Google Fonts.
