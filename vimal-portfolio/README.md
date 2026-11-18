# Vimal Reddy Pannala – Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Folder structure
```
vimal-portfolio/
├── index.html              SEO metadata, JSON-LD
├── public/                 favicon + Vimal_Reddy_Pannala_Resume.pdf
├── src/
│   ├── data.js             ALL content (profile, skills, projects, links)
│   ├── App.jsx, main.jsx, index.css
│   └── components/         Navbar, Hero, About, Skills, Experience, Projects,
│                           Education, Leadership, Achievements, Resume, Contact, Footer
└── .env.example
```

## Run locally
Requires Node.js 18+.
```bash
npm install
cp .env.example .env     # then add your Web3Forms key (see below)
npm run dev              # http://localhost:5173
npm run build            # production build in dist/
```

## Make the contact form work
1. Go to https://web3forms.com, enter `reddyvimal087@gmail.com`, and copy the access key emailed to you.
2. Put it in `.env` as `VITE_WEB3FORMS_KEY=your-key`.
3. On Vercel add the same variable (Project → Settings → Environment Variables).
Messages then arrive in your inbox. Without a key the form shows your email address instead.

## Add project links and a photo
- Open `src/data.js`. For each project, replace `github: null` / `demo: null` with real URLs. The "coming soon" labels become live buttons.
- Put a photo in `public/` (e.g. `profile.jpg`) and set `photo: '/profile.jpg'` in `src/data.js`.
- To update the resume, replace `public/Vimal_Reddy_Pannala_Resume.pdf` (keep the file name).

## Upload to GitHub
```bash
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/reddyvimal087-ops/vimal-portfolio.git
git push -u origin main
```
Create the empty `vimal-portfolio` repository on github.com first.

## Deploy on Vercel
1. Sign in at https://vercel.com with GitHub and click **Add New → Project**.
2. Import `vimal-portfolio`. Vercel detects Vite automatically (build: `npm run build`, output: `dist`).
3. Add `VITE_WEB3FORMS_KEY` under Environment Variables, then click **Deploy**.
4. Put the live URL in your LinkedIn, GitHub profile and resume.
