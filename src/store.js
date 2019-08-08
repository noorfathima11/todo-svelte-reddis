import { writable } from 'svelte/store'

console.log('writable', writable)

export const todoItems = writable([])

console.log('todoItems', todoItems)
