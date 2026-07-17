<template>
  <div class="popup-container">
    <h2>Upwork Assistant</h2>

    <div class="language-selector">
      <label>Language / 语言 / Idioma / भाषा / Língua / বাংলা</label>
      <select v-model="language" @change="handleLanguageChange">
        <option value="en">English</option>
        <option value="zh">中文</option>
        <option value="es">Español</option>
        <option value="hi">हिन्दी</option>
        <option value="pt">Português</option>
        <option value="bn">বাংলা</option>
        <option value="uk">Українська</option>
        <option value="tl">Filipino</option>
        <option value="ru">Русский</option>
        <option value="ar">العربية</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCurrentLanguage, setLanguage } from "../contents/i18n"

const language = ref('en')

onMounted(async () => {
  language.value = await getCurrentLanguage()
})

const handleLanguageChange = async () => {
  await setLanguage(language.value as any)
}
</script>

<style>
.popup-container {
  padding: 16px;
  width: 250px;
}

h2 {
  margin: 0 0 12px 0;
  font-size: 18px;
}

.language-selector {
  margin-bottom: 16px;
}

.language-selector label {
  display: block;
  margin-bottom: 8px;
}

.language-selector select {
  width: 100%;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
