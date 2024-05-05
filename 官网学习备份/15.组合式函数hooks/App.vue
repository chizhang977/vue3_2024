<script setup name="App">
import { useMouse } from '@/hooks/mouse.js'
import { useFetch } from '@/hooks/fetch.js'
const { data, error } = useFetch()

const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
