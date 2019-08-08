import { writable } from 'svelte/store'

export const todoItems = writable([])

console.log('todoItems', todoItems)
