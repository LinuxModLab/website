# Linux Mod Lab

**Breaking compatibility barriers.**

Linux Mod Lab is an open-source initiative exploring Linux gaming, game modding, compatibility research, and software development.

Our goal is to investigate technical barriers, document reproducible findings, collaborate with developers, and help expand what's possible on Linux.

**Website:** https://linuxmodlab.com

## Our Mission

Linux Mod Lab aims to bring together Linux users, modders, developers, and enthusiasts interested in advancing gaming and modding compatibility.

Our areas of interest include:

- Investigating compatibility between Windows-based games, modding tools, and Linux.
- Researching compatibility layers such as Wine and Proton.
- Documenting technical findings, experiments, limitations, and potential solutions.
- Encouraging testing across different Linux distributions.
- Collaborating with open-source developers and gaming communities.
- Exploring opportunities to create original open-source software and mods.

Linux Mod Lab is not limited to one game, distribution, or compatibility technology.

## Current Research

### GTA V Legacy / LSPDFR on Linux

Our initial research focuses on running Grand Theft Auto V Legacy with RAGE Plugin Hook (RPH) and LSPDFR on Linux.

Research areas include:

- Proton and Wine compatibility
- RAGE Plugin Hook integration
- Plugin loading and runtime behavior
- Audio and DirectSound compatibility
- Stability, crashes, and diagnostic logging
- Reproducible testing and potential workarounds

Gentoo Linux serves as our primary research environment, but the broader goal is to support investigation and validation across Linux distributions.

Research is ongoing. Compatibility and functionality should not be assumed unless verified through testing.

## Website Development

This repository contains the source code for the official Linux Mod Lab website.

### Technology Stack

- **Astro** — Static website framework
- **Node.js and npm** — Development environment and package management
- **HTML and CSS** — Website structure and styling
- **Git and GitHub** — Version control and source hosting
- **Cloudflare Pages** — Website hosting and deployment

The website is designed to remain lightweight, maintainable, and accessible without requiring a complex backend.

### Local Development

Clone the repository:

```bash
git clone https://github.com/LinuxModLab/website.git
cd website
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open http://localhost:4321 in your browser.

### Production Build

Generate the static website:

```bash
npm run build
```

The generated files are written to the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

Changes pushed to the production branch are automatically built and deployed through Cloudflare Pages.

## Contributing

Linux Mod Lab welcomes constructive discussion, technical research, reproducible testing, documentation improvements, and collaboration.

As the project develops, we intend to establish clearer contribution guidelines and opportunities for community involvement.

For now, GitHub provides a starting point for reviewing the website's source code and proposing improvements.

## Project Status

Linux Mod Lab is in its early development stage.

The website is publicly available, initial compatibility research is underway, and additional documentation, research resources, and community features are planned.

## Contact

**Email:** contact@linuxmodlab.com

**Website:** https://linuxmodlab.com

---

*Built on Linux. Powered by open source.*