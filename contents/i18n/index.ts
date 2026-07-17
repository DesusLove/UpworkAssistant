import type { LanguageResources, SupportedLanguage } from "./types";
import { Storage } from "@plasmohq/storage";

import { zh } from "./zh";
import { en } from "./en";
import { es } from "./es";
import { hi } from "./hi";
import { pt } from "./pt";
import { bn } from "./bn";
import { uk } from "./uk";
import { tl } from "./tl";
import { ru } from "./ru";
import { ar } from "./ar";
import { ja } from "./ja";
import { ko } from "./ko";
import { de } from "./de";
import { fr } from "./fr";

export const languages: Record<SupportedLanguage, LanguageResources> = {
  zh, en, es, hi, pt, bn, uk, tl, ru, ar, ja, ko, de, fr
};

const storage = new Storage();

export async function getCurrentLanguage(): Promise<SupportedLanguage> {
  const lang = await storage.get("upwork-language") as SupportedLanguage;
  return lang || "en";
}

export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
  return lang in languages;
}

export async function getLanguageResources(lang?: SupportedLanguage): Promise<LanguageResources> {
  const currentLang = lang || await getCurrentLanguage();
  return isSupportedLanguage(currentLang) ? languages[currentLang] : languages["en"];
}

export async function setLanguage(lang: SupportedLanguage): Promise<void> {
  await storage.set("upwork-language", lang);
}

export async function t(key: keyof LanguageResources, lang?: SupportedLanguage): Promise<string> {
  const resources = await getLanguageResources(lang);
  return resources[key];
}
