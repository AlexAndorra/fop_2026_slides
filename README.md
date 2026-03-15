# Unveiling True Talent: The Soccer Factor Model

Full slide presentation [here](https://alexandorra.github.io/fop_2026_slides/).

Talk presented by [Alexandre Andorra](https://alexandorra.github.io/) at [Field of Play 2026](https://www.fieldofplay.co.uk/) in Manchester, based on the live modeling platform [soccerfactormodel.com](https://www.soccerfactormodel.com), co-authored with [Maximilian Göbel](https://www.maximiliangoebel.com/).

This repository contains the full [Slidev](https://sli.dev/) presentation source code, including the slides, assets, and speaker notes.

## 🔗 Links and Resources

- **Full Paper**: [arXiv:2412.05911](https://arxiv.org/abs/2412.05911)
- **Live Platform**: [soccerfactormodel.com](https://www.soccerfactormodel.com)
- **Podcast**: [Learning Bayesian Statistics](https://learnbayesstats.com)
- **Alexandre's Website**: [alexandorra.github.io](https://alexandorra.github.io)

---

## 🚀 For the Speaker

To run the presentation live and view speaker notes:

1. Open your terminal in this directory.
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to the URL provided (typically `http://localhost:3030`).
4. **Presenter Mode**: To see your speaker notes, timer, and next slide preview, press `c` while viewing the presentation, or navigate directly to `http://localhost:3030/presenter`.

---

## 🛠 For Attendees & Reproducers

If you'd like to view the slides locally, explore the code, or build your own version of this presentation:

### Setup

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
Clone the repository and install the dependencies:

```bash
git clone https://github.com/AlexAndorra/fop_2026_slides.git
cd fop_2026_slides
npm install
```

### Usage

**Start the local server:**
```bash
npm run dev
```

**Build a static HTML version:**
```bash
npm run build
```
*(This generates a static SPA site in the `dist/` folder.)*

**Export to PDF:**
```bash
npm run export
```
*(Note: Requires Playwright to be installed (`npx playwright install`))*
