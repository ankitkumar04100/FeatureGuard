# 🔒 FeatureGuard: Baseline Web Dev Tool Integration  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ankitkumar04100/FeatureGuard)  
[![Made with Baseline](https://img.shields.io/badge/Made%20with-Baseline-blue)](https://web.dev/baseline/)  
[![Hackathon](https://img.shields.io/badge/Google%20Hackathon-2025-brightgreen)](https://devpost.com)  

> ⚡ **FeatureGuard** integrates Baseline compatibility data into developer tools (IDE plugins, CLI utilities, and dashboards) to help web developers **instantly know if modern features are production-ready**.

---

## 🚀 Elevator Pitch
**"FeatureGuard integrates Baseline data into IDEs, CLI, and dashboards, helping web developers instantly know which modern features are safe to use in production."**

---

## 🎥 Demo (Preview)

> 📌 Replace with actual demo links once available.

- 🎬 **Video Walkthrough (3+ min required):**  
  [Demo Video Placeholder](#)

- 🖥️ **Live App Demo:**  
  [FeatureGuard App](https://feature-guardian-ai.lovable.app)

- 📷 **Screenshots:**  
  ![IDE Integration Screenshot](assets/screenshots/ide-plugin.png)  
  ![CLI Tool Report Screenshot](assets/screenshots/cli-report.png)  
  ![Dashboard Screenshot](assets/screenshots/dashboard.png)  

---

## ✨ Features

### 1. IDE Plugin (VS Code)
- Real-time linting of HTML, CSS, and JS.
- Highlights unsupported or risky features.  
- Instant feedback without slowing typing performance.  
- Powered by **Baseline datasets** for accurate compatibility checks.

### 2. CLI Tool
- Developed with **Node.js** for cross-platform compatibility.  
- Scans HTML, CSS, and JS files across the project.  
- Generates **compatibility reports**:  
  - ✅ Browser support percentages  
  - ⚠️ Risk level of each feature  
  - 🛠️ Recommended polyfills  

**Example Output:**
FeatureGuard Report:
- CSS:gap — 92% support (partial fallback suggested)
- HTML:dialog — 85% support (use polyfill)
- JS:fetch — 99% support (safe)
- CI/CD ready → blocks risky features before merging.

### 3. Dashboard & Analytics
- Built with **React.js + Tailwind CSS**, hosted on **Vercel**.  
- Visual insights for team-wide adoption.  
- 📊 Interactive charts:
  - Feature usage heatmaps  
  - Risk scoring visualizations  
  - Adoption trend tracking  

---

## 💡 About the Project

### 📌 Inspiration
Developers spend countless hours jumping between **MDN docs, CanIUse, and blogs** to check if a web feature is safe to use. This slows productivity and creates uncertainty.  
We wanted a **unified solution** that brings compatibility data directly into developer workflows.

---

### ⚙️ What it does
FeatureGuard ensures that:  
- Developers **instantly know** if a feature is production-ready.  
- Teams get **analytics** on risky features across projects.  
- CI/CD pipelines can **block incompatible code** before deployment.  

---

### 🛠️ How we built it
- IDE plugin using **VS Code API + TypeScript**.  
- CLI tool in **Node.js**, powered by `web-features` npm package.  
- Dashboard in **React.js + Tailwind CSS**, backed by **Express API**.  
- Hosted on **Vercel/Netlify** for easy deployment.  
- Unified **JSON interface** to normalize Baseline data across tools.  

---

### 🚧 Challenges we ran into
1. **Data normalization** → IDE needed fast local access; dashboard could fetch async.  
2. **Performance** → Real-time linting risked slowing typing. Solved via caching + incremental checks.  
3. **Browser quirks** → Some features supported differently. We created a **support scoring model**.  
4. **Large projects** → CLI scans slowed down. Optimized with **parallelized scanning**.  

---

### 🏆 Accomplishments we’re proud of
- Built **3 integrated tools** (IDE, CLI, Dashboard).  
- Real-time linting that **doesn’t impact typing**.  
- Visual analytics for team-wide decisions.  
- Fully **open-source MIT licensed**.  
- Bridged gap between **Baseline data** and real-world dev tools.  

---

### 📚 What we learned
- Web feature adoption is **complex and inconsistent** across browsers.  
- Developer tools need **instant feedback** without distraction.  
- Handling **large datasets** efficiently is critical.  
- Open-source licensing fosters adoption and contributions.  

---

### 🔮 What’s next
- Expand IDE support → JetBrains, Sublime, etc.  
- AI-driven recommendations for polyfills.  
- CI/CD integration with GitHub Actions & GitLab pipelines.  
- Community plugins + localization.  
- Accessibility-first dashboard improvements.  

---

---

## 🧰 Tech Stack

**FeatureGuard** is powered by modern technologies across multiple layers:  

- **Languages:** TypeScript, JavaScript, HTML, CSS  
- **Frameworks & Libraries:** React.js, Tailwind CSS, Vite.js, Node.js, Express  
- **Developer Tools:** VS Code API, ESLint, web-features npm  
- **Cloud Hosting:** Vercel, Netlify  
- **Version Control:** Git, GitHub  
- **Package Management:** npm, yarn, pnpm  
- **Data Source:** Baseline datasets, Web Platform Dashboard  
- **Optional:** Docker for containerized deployment  

---

## ⚡ Installation & Setup

### 1️⃣ Clone Repository
bash
git clone https://github.com/ankitkumar04100/FeatureGuard.git
cd FeatureGuard

### 2️⃣ Install Dependencies
bash
Copy code
npm install

### 3️⃣ Run Development Servers
- IDE Plugin → Install via VS Code Extensions (instructions in /ide-plugin).

- CLI Tool →
bash
Copy code
node cli/index.js scan ./your-project

- Dashboard →
bash
Copy code
cd dashboard
npm install
npm run dev

### 4️⃣ Build for Production
bash
Copy code
npm run build

### 📖 Usage
#### 🖥️ IDE Plugin
- Open your project in VS Code.
- Plugin highlights unsupported or risky features.
- Hover for details → browser support %, fallback suggestions.

#### 🧑‍💻 CLI Tool
bash
node cli/index.js scan ./src

#### Output Example:

diff

##### FeatureGuard Report:
- CSS:gap — 92% support (partial fallback suggested)
- HTML:dialog — 85% support (use polyfill)
- JS:fetch — 99% support (safe)

---

## 📊 Dashboard
- Start the dashboard locally → npm run dev.
- Login or upload your project report.
- Explore heatmaps, trends, and risk scores.

---

## 🛣️ Roadmap
-  VS Code plugin integration✔️
- CLI report generation✔️
- Dashboard for analytics✔️
- JetBrains & Sublime IDE support
- GitHub Action integration
- AI-driven fallback suggestions
- Multi-language support
- Accessibility improvements

---

## 🤝 Contributing
- We welcome contributions! 🎉
1. Fork the repo
2. Create a feature branch → git checkout -b feature-name
3. Commit changes → git commit -m "Add feature"
4. Push → git push origin feature-name
5. Open a Pull Request
- Please check our [CONTRIBUTING.md](https://github.com/ankitkumar04100/FeatureGuard/blob/main/CONTRIBUTING.md) for more details.

---

## 📜 License
- This project is licensed under the MIT License — see LICENSE file for details.

---

## 📬 Contact
- Author: Ankit Kumar
- 📧 Email: ankitkumarforall@gmail.com
- 🌐 GitHub: @ankitkumar04100

--- 

