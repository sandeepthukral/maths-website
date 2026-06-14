# Maths Practice

A static website for browsing and practising maths question sets, organised by topic. Questions are rendered with KaTeX and answers are hidden by default.

## Local development

```bash
node server.js
```

Then open `http://localhost:8765`.

After adding or editing question sets, regenerate the topic index:

```bash
node generate_manifest.js
```

## Adding content

**New topic:**
1. Create `data/<topic-slug>/meta.json`:
   ```json
   {
     "title": "Topic Name",
     "description": "Short description shown on the home page.",
     "color": "#7c3aed"
   }
   ```
2. Add at least one set file (see below).
3. Run `node generate_manifest.js`.

**New question set:**
1. Create `data/<topic-slug>/set-02.js` (increment the number):
   ```js
   // Use var — required for dynamic loading in the browser
   var PAPER = {
     title: "Topic name — N questions"
   };

   var QUESTIONS = [
     {
       id: 1,
       category: "Category",
       question: "Question text with $\\LaTeX$ math.",
       answer: "$$answer$$"
     }
   ];
   ```
2. Run `node generate_manifest.js`.

Use `$...$` for inline maths and `$$...$$` for display (centred) maths. Every `\` in LaTeX must be written as `\\` inside a JS string.

## Deploying to Render

The repo includes a `render.yaml` that configures the service automatically.

1. Push the repo to GitHub.
2. Go to [render.com](https://render.com) → **New** → **Static Site**.
3. Connect your GitHub repository.
4. Render will detect `render.yaml`. Confirm the settings:
   - **Build command:** `node generate_manifest.js`
   - **Publish directory:** `.`
5. Click **Create Static Site**.

Every `git push` to `main` triggers a redeploy automatically. `manifest.json` is generated fresh on each deploy — it is intentionally not committed to the repo.

## Project structure

```
maths-website/
├── index.html              # Home page — topic grid
├── topic.html              # Topic page — set list
├── practice.html           # Practice page — questions
├── styles.css              # Shared styles
├── server.js               # Local dev server (Node.js)
├── generate_manifest.js    # Builds manifest.json from data/
├── render.yaml             # Render deployment config
└── data/
    └── <topic-slug>/
        ├── meta.json       # Topic metadata
        ├── set-01.js       # Question set
        └── set-02.js       # …
```
