
<script setup>
// @ is an alias to `src`. It's better going down the tree than walking up with `../../..`
import { useApi } from '@/composables/api'
const $api = useApi()
async function loadUrls() {
  // Thanks to ofetch, no need to do `await (await fetch()).json()` !
  const data = await $api("/rest/v3/short-urls")
  console.log(data)
}
import Raccourcirliens from '@/components/raccourcirliens.vue'
</script>

<template>
  <Raccourcirliens></Raccourcirliens>
</template>