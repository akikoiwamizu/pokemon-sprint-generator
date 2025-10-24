# Changelog

All notable changes to this project will be documented in this file.

## [v0.10] - 2025-10-24

### Highlights

- Read-only Firestore security rules and config defaults for public demo
- Static data support for offline demo mode (teams + sprint history)
- Demo mode now fetches Pokémon from PokéAPI
- All write actions are gated with a read-only flag

### Added

- `public/data/teams.json` and `sprint_history.json` with sample data (#30)
- `window.demo.useFirebase` flag to toggle Firebase usage (#29)
- PokéAPI integration for fetching Pokémon names and sprites (#37)

### Changed

- Firestore security rules updated to restrict all writes by default (#29)
- `index.html` logic now loads local data and PokéAPI for demo mode (#37)
- Firebase hooks and writes are gated behind config flag (#37)

## [0.9.0] - 2025-10-19

Initial pre-release of the Pokémon Sprint Generator.

Features:

- Add/delete teams
- Random Pokémon selector with reveal animation
- Type filters and generation filters
- Sprint history grouped by team
- Firebase integration for real-time sync
