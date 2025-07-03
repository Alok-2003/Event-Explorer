# Event Explorer

[![Live Demo](https://img.shields.io/badge/View-Live%20Demo-brightgreen)](https://riyansh-assessment.alokkumaryadav.in/)

A modern web application for browsing and exploring various events, built with Next.js 13+ and TypeScript.

🔗 **Live Demo:** [https://riyansh-assessment.alokkumaryadav.in/](https://riyansh-assessment.alokkumaryadav.in/)

## ✨ Features

- Browse technology, business, and gaming events
- Dark/Light theme support
- Filter events by location
- Responsive design for all devices
- Fast page loads with optimized images
- Accessible keyboard navigation

## 🛠️ Built With

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- date-fns for date formatting

## 🗂️ Project Structure

```
my-project/
├── app/                 # App router pages and layouts
│   ├── components/      # Reusable UI components
│   ├── events/          # Event pages and components
│   ├── context/         # Theme context
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/              # Static assets
│   └── images/          # Event images
├── data/                # Event data
└── types/               # TypeScript types
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

Deploy on Vercel:
1. Push your code to a GitHub repository
2. Import the project on [Vercel](https://vercel.com/import)
3. Vercel will automatically detect and configure the Next.js application

## 🚧 Future Improvements

- Implement user authentication
- Add event categories filter
- Enable event sharing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
