// src/composables/shorten.js
import { useApi } from './api'

export async function shortenUrl(longUrl) {
  const $api = useApi()
  try {
    const response = await $api('/rest/v3/short-urls', {
      method: 'POST',
      body: {
        longUrl
      }
    })
    return response
  } 
  catch (error) {
    console.error('Erreur lors de la création du lien court :', error.response || error)
    throw error
  }
}
