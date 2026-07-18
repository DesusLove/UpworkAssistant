<div align="center">

# Upwork Assistant

<img src="assets/banner.png" alt="Banner" width="400">

**Supercharge your Upwork job browsing with instant insights.**

[![Plasmo](https://img.shields.io/badge/built%20with-Plasmo-1a1a2e?style=flat-square)](https://www.plasmo.com/)
[![Vue](https://img.shields.io/badge/Vue-3-4fc08d?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

---

[Features](#-features) • [Installation](#-installation) • [Why Choose Us](#-why-choose-us) • [Privacy](#-privacy) • [Changelog](#-changelog)

</div>

## 🌟 Overview

Upwork Assistant is a **browser extension** that automatically extracts and displays key job information directly on Upwork's job detail panel budget, competition stats, client info, and required Connects so you never have to hunt for data again.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 📊 Smart Info Card
Automatically injects a beautifully styled info card into Upwork's job detail slider showing everything you need at a glance:

- **Budget / hourly rate** with fixed & range support
- **Competition metrics** — proposals, interviews, hires
- **Client details** — location, total spent, hire rate
- **Connects** required to submit a proposal
- **Unanswered invites** count

</td>
<td width="50%">

### 🧠 Resilient DOM Engine
Upwork's UI changes frequently — this extension adapts:

- 3 fallback strategies for budget extraction
- 4 methods for Connects detection
- Title-based stat matching (Proposals, Hires, etc.)
- Two-layer `MutationObserver` system for dynamic content

</td>
</tr>
<tr>
<td width="50%">

### 🌍 14 Languages
Covering **80–90%** of Upwork's global freelancer community:

| Priority | Languages |
|----------|-----------|
| **Core** | English, Chinese, Spanish, Hindi, Portuguese, Bengali |
| **Extended** | Ukrainian, Filipino, Russian, Arabic |
| **Plus** | Japanese, Korean, German, French |

Smart compact mode prevents text overflow in long-word languages.

</td>
<td width="50%">

### 💡 UX First
- Seamless Upwork visual integration
- Color-coded metrics (green for hires)
- Lazy loading — never blocks the page
- Privacy-first: **zero data leaves your browser**

</td>
</tr>
</table>

---

## 🎯 Why Choose Us

| Benefit | Description |
|---------|-------------|
| ⏱️ **Save Time** | No more manual scanning for numbers |
| 🎯 **Informed Decisions** | Budget, competition & client quality at a glance |
| ⚡ **Efficient Bidding** | Know the Connects cost and competition before you apply |
| 🎨 **Professional UX** | Looks like it belongs in Upwork's design system |

---

## 🚀 Installation

```bash
# 1. Install from Chrome Web Store
#    (link coming soon)

# 2. Navigate to Upwork
open https://www.upwork.com

# 3. Click any job listing
#    → Info card appears automatically
```

### Manual Install (Developer Mode)

1. Clone the repo & install dependencies:
   ```bash
   git clone <repo-url>
   cd UpworkAssistant
   pnpm install
   ```
2. Build the extension:
   ```bash
   pnpm build
   ```
3. Open `chrome://extensions`, enable **Developer mode**
4. Click **Load unpacked** and select the `build/` directory

---

## 🔒 Privacy

> **No data ever leaves your device.**

```
✅ Works only on upwork.com
✅ All processing happens locally
✅ No analytics, no trackers, no external calls
✅ No personal information collected
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Plasmo](https://www.plasmo.com/) 0.90 |
| UI | [Vue 3](https://vuejs.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) 5.7 |
| Storage | `@plasmohq/storage` (Chrome Storage API) |
| Bundler | Plasmo (Parcel-based) |

---

## 📋 Changelog

> Full history in [CHANGELOG.md](./CHANGELOG.md)

<details>
<summary><strong>v1.0.0</strong> — 14 languages, architecture refactor</summary>

- **🌍 14 languages** covering 80-90% of Upwork freelancers
- **🏗️ i18n modularization** — separated from main content script
- **📱 Compact display mode** for long-word languages (DE, FR)
- **🐛 Bug fixes** — default language, popup selector, TS types
</details>

<details>
<summary><strong>v0.0.1</strong> — Initial release</summary>

- Info card injection on job detail slider
- Budget, proposals, hires, Connects extraction
- Two-layer MutationObserver system
- EN/ZH bilingual support
</details>

---

<div align="center">

Made with ❤️ for Upwork Freelancers

</div>
