// 语言资源接口定义
export interface LanguageResources {
  budget: string;
  proposals: string;
  totalProposals: string;
  interviewing: string;
  invitesSent: string;
  unansweredInvites: string;
  connectsRequired: string;
  hires: string;
  clientInfo: string;
  totalSpent: string;
  hireRate: string;
  lastViewed: string;
  hourly: string;
  unknown: string;
  notification: {
    title: string;
    body: string;
  };
  // 简短版本（用于紧凑显示）
  short?: {
    proposals: string;
    totalProposals: string;
    interviewing: string;
    invitesSent: string;
    unansweredInvites: string;
    hires: string;
    clientInfo: string;
    totalSpent: string;
    hireRate: string;
    lastViewed: string;
  };
}

// 支持的语言类型
export type SupportedLanguage =
  | "zh" | "en" | "es" | "hi" | "pt" | "bn"
  | "uk" | "tl" | "ru" | "ar" | "ja" | "ko" | "de" | "fr";

// 语言显示名称映射
export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  zh: "中文",
  en: "English",
  es: "Español",
  hi: "हिन्दी",
  pt: "Português",
  bn: "বাংলা",
  uk: "Українська",
  tl: "Filipino",
  ru: "Русский",
  ar: "العربية",
  ja: "日本語",
  ko: "한국어",
  de: "Deutsch",
  fr: "Français"
} as const;