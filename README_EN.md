# Upwork Assistant

![Upwork Assistant Logo](assets/icon.png)

## 🌟 Features

Upwork Assistant is a browser extension designed specifically for Upwork freelancers, making it easier to browse and evaluate job opportunities efficiently.

### 📊 Smart Information Aggregation
- Automatically displays key information cards on job detail pages
- Clearly presents budget/hourly rate information (including fixed price and hourly ranges)
- Shows real-time competition status (number of proposals, interviews, and hires)
- Provides at-a-glance client information (location, total spent, hire rate)
- Displays the number of Connects required for job applications

### 🧠 Intelligent Data Extraction
- Adaptive parsing for various DOM structures
- Title-based precise information targeting
- Automatically adapts to Upwork interface changes
- Multiple data extraction methods to ensure reliability

### 🌍 Multi-language Support (14 Languages)
- **Major Languages**: English, Chinese, Spanish, Hindi, Portuguese, Bengali
- **Extended Support**: Ukrainian, Filipino, Russian, Arabic, Japanese, Korean, German, French
- Covers 80-90% of Upwork's global freelancer community
- Smart compact display: Provides concise versions for long-word languages
- Easy language preference switching

### 💡 User-Friendly Design
- Elegant information card layout
- Seamlessly adapts to Upwork's interface
- Color highlighting for important information
- Delayed loading to ensure data completeness

## 🎯 Why Choose Us?

- **Save Time**: No need to manually search and calculate key information
- **Make Informed Decisions**: See important project and client metrics at a glance
- **Efficient Bidding**: Immediately understand required Connects and competition
- **Global Accessibility**: 14 language support for freelancers worldwide
- **Professional Experience**: Design that perfectly integrates with Upwork's interface

## 🚀 Getting Started

1. Install the extension from the Chrome Web Store
2. Visit the Upwork website
3. Click on any job details
4. Enjoy a more efficient job opportunity screening experience

## 💪 Supporting Freelancers

This extension was born from a deep understanding of freelancers' needs for work efficiency. Through technological innovation, we aim to help every freelancer find suitable projects more easily.

## 🔒 Privacy Protection

- Only runs on the Upwork website (only requests permission for https://www.upwork.com/*)
- Doesn't collect any personal information
- All data processing happens locally
- Doesn't interfere with your browsing experience

## 📋 Changelog

> 📖 **Full Change History**: Check [CHANGELOG.md](CHANGELOG.md) for detailed version update history

### v1.0.0 - 2025-01-24 (Upcoming Release)

#### 🌍 New Multi-language Support (14 Languages)
- **Priority 1**: Spanish, Hindi, Portuguese, Bengali
- **Priority 2**: Ukrainian, Filipino, Russian, Arabic
- **Priority 3**: Japanese, Korean, German, French
- Covers 80-90% of Upwork's freelancer community

#### 🏗️ Architecture Optimization
- **i18n Module Refactoring**: Separated internationalization code from main files
- New `contents/i18n/` directory with 17 language files
- Type-safe TypeScript interface definitions
- Modular design for easier maintenance and expansion

#### 📱 Interface Optimization
- **Compact Display Mode**: Added concise text versions for long-word languages (German, French, etc.)
- Smart text adaptation: English/Chinese use short versions, others auto-fallback
- 30-60% improvement in space utilization, prevents text wrapping issues

#### 🌐 Language List Optimization
- English adjusted to first option, Chinese second
- Follows international application best practices

#### 🐛 Bug Fixes
- Fixed default language setting issue (first install now defaults to English)
- Fixed popup language selector compatibility issues

---

### v0.0.1 - Published Version

#### 🆕 Core Features
- Automatic key information card display on job details
- Real-time competition data display (proposals, interviews, hires)
- Connects requirement display
- Unanswered invites support
- Basic English & Chinese interface support

#### 🧠 Smart Data Extraction
- Two-layer MutationObserver monitoring system
- Multiple DOM structure adaptive parsing
- Title-based precise information targeting
- Automatic adaptation to Upwork interface changes

#### 🔒 Privacy & Performance
- Only runs on Upwork website
- Local data processing, no external calls
- Delayed loading ensures data completeness

---

Made with ❤️ for Upwork Freelancers