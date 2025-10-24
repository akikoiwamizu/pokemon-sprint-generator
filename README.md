# Pokémon Sprint Generator (Public Demo)

![Release](https://img.shields.io/github/v/release/akikoiwamizu/pokemon-sprint-generator)
![Build](https://img.shields.io/github/actions/workflow/status/akikoiwamizu/pokemon-sprint-generator/release-please.yml)
![Project Status](https://img.shields.io/badge/status-public%20launch%20prep-blue)

A public, read-only version of the internal **Pokémon Sprint Generator** tool I originally built for sprint planning. This demo shows how a playful internal app can be safely shared publicly by removing all write operations, re-scoping authentication, and adapting Firebase configuration for secure hosting.

## Background

I first created the Pokémon Sprint Generator as a lightweight way for teams to name Agile sprints in Jira.  
Each sprint received a random Pokémon name, helping make ceremonies more engaging and easy to reference.  
The internal version supports team persistence, favorites, and sprint history using Firebase Firestore.

Because it became popular internally, I decided to publish a **sanitized public demo** to showcase:

- How to transform a private project into a **safe, read-only public app**
- Practical Firebase security patterns for **frontend-only projects**
- My approach to **documentation, version control, and incremental delivery**

This repository will also serve as a **portfolio reference** for how I organize open-source releases:  
from scaffolding → configuration → launch → security hardening.

## Overview

The Pokémon Sprint Generator helps teams or hobby projects quickly create fun sprint names inspired by Pokémon species.

This demo fetches data from the [PokéAPI](https://pokeapi.co/) and generates randomized names directly in the browser.

All **write actions** (saving, editing, renaming) are disabled in this version to prevent misuse. Forks of the project can re-enable them by changing configuration and rules in Firebase.

## Project Structure

```
pokemon-sprint-generator/
├── public/
│   ├── index.html
│   ├── config_example.js
│   ├── style.css
│   └── ...
├── docs/
│   └── demo.png
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── pull_request_template.md
├── firebase.json
├── firestore.rules
├── LICENSE
└── README.md
```

## Running the Demo Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/akikoiwamizu/pokemon-sprint-generator.git
   cd pokemon-sprint-generator
   ```

2. **Copy the example config**

   ```bash
   cp public/config.example.js public/config.js
   ```

   Edit `public/config.js` with your Firebase web app credentials  
   (or leave the placeholders to run in demo mode).

3. **Serve locally**

   ```bash
   python3 -m http.server 8080
   ```

   Then open [http://localhost:8080](http://localhost:8080).

4. **Try it out**
   Click **Generate** to create a new Pokémon-themed sprint name.  
   Write operations are disabled; an alert will indicate read-only mode.

## Read-Only Mode

This public demo disables all Firebase writes by default.

To re-enable write actions in your own fork:

1. Create a new Firebase project.
2. Update `public/config.js` with your credentials.
3. Replace the `firestore.rules` file with one that allows writes.
4. Set `window.demo.allowWrites = true` in `config.js`.

To apply the Firestore security rules in this project to your live Firebase instance:

```bash
firebase deploy --only firestore
```

## Why a Public Demo

Moving this project from private → public was an intentional design exercise in:

- **Security-conscious publishing** (disabling writes, hiding keys)
- **Developer onboarding** (making setup self-contained)
- **Transparent documentation** for readers unfamiliar with Firebase
- **Portfolio storytelling** — demonstrating open-source release discipline

The goal is to make the repo educational for engineers evaluating best practices  
around Firebase demos, small-app security, and project documentation.

## Legal Notice

Pokémon and Pokémon character names are trademarks of Nintendo,  
Creatures Inc., and Game Freak Inc.

This open-source demo is non-commercial and uses data from  
the [PokéAPI](https://pokeapi.co/), which is free for public and educational use.  
No official Pokémon media or proprietary assets are included.

## License

Released under the [MIT License](./LICENSE).
