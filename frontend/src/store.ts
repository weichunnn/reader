import { writable } from 'svelte/store'

export const searchArticles = writable([])
export const searchTerm = writable('')
export let currentId = writable(null)
