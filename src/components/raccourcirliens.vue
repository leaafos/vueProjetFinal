<script setup>
import { ref } from 'vue'
import { shortenUrl } from '@/composables/shorten'

const longUrl = ref('')
const shortUrl = ref('')
const error = ref(null)

async function handleShorten() {
  try {
    const response = await shortenUrl(longUrl.value)
    shortUrl.value = response.shortUrl
    error.value = null
  } catch (err) {
    error.value = 'Erreur : impossible de raccourcir cette URL.'
    console.error('Erreur API :', err)
  }
}

</script>

<template>
  <div class="bloc2">
    <input
      v-model="longUrl"
      placeholder="Entrez une URL longue"
      class="enterURL"
    />
    <button @click="handleShorten" class="btn">
      Raccourcir
    </button>
    <div v-if="shortUrl" class="mt-4 text-green-600">Lien court : <a :href="shortUrl" target="_blank">{{ shortUrl }}</a></div>
    <div v-if="error" class="mt-4 text-red-600">{{ error }}</div>
  </div>
</template>

<style scoped>
.btn {
  background-color: palevioletred;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.enterURL {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 30%;
}
.bloc2 {
  margin: 100px auto;
  width: 50%;
  border-radius: 10px;
  
}

</style>

