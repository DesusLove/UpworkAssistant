# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-24

### 🌍 New Features
- **Multi-language Support**: Added 14 languages covering 80-90% of Upwork's global freelancers
  - Priority 1: Spanish (es), Hindi (hi), Portuguese (pt), Bengali (bn)
  - Priority 2: Ukrainian (uk), Filipino (tl), Russian (ru), Arabic (ar)
  - Priority 3: Japanese (ja), Korean (ko), German (de), French (fr)
- **Smart Compact Display**: Provides concise text versions for long-word languages to avoid layout issues
- **Language List Optimization**: English adjusted to first option, Chinese second

### 🏗️ Architecture Changes
- **i18n Module Refactoring**: Separated internationalization code from the main file
- Added `contents/i18n/` directory structure with 17 language-related files
- Complete TypeScript type definitions and interfaces
- Modular design for improved code maintainability
- Main file `upwork-monitor.ts` optimized from 773 lines to 759 lines

### 📱 Interface Optimization
- **Compact Display Mode**:
  - English: "Proposals" → "Prop", "Total" → "Total"
  - Chinese: "投标情况" → "投标", "面试中" → "面试"
  - German: "Vorschläge" → "Vorsch", "Gespräch" → "Gespr"
  - French: "Propositions" → "Prop", "Entretien" → "Entre"
- 30-60% improvement in space utilization, especially optimized for German, French and other long-word languages
- Smart text fallback: languages without short versions automatically use the full version

### 🐛 Bug Fixes
- Fixed default language setting on first install (now defaults to English)
- Fixed popup language selector compatibility issues
- Fixed TypeScript type safety errors

### 📦 Project Info
- Version upgraded from 0.0.1 to 1.0.0
- Project description updated to highlight multi-language support
- Build system optimized for new modular structure

## [0.0.1] - Published Version

### 🆕 Core Features
- Smart information card display
- Real-time competition data analysis
- Connects requirement display
- Client information aggregation
- Unanswered invites display support

### 🧠 Technical Features
- Two-layer MutationObserver monitoring system
- Multi-strategy DOM structure adaptive parsing
- Title-based precise information targeting
- Local data processing for user privacy protection
- Basic English & Chinese support

---

## Version Notes

### Major
- 1.0.0: Major feature update, 14 languages support, architecture refactor

### Minor
- New features
- Existing feature improvements

### Patch
- Bug fixes
- Minor improvements
