<template>
  <Card>
    <template #header>
      <h1>这是头部</h1>
    </template>
    <template #default>
      <p>this is context</p>
    </template>
    <template v-slot:footer>
      <p>this is footer</p>
    </template>
  </Card>
</template>
<script setup lang="ts">
import Card from '@/components/Card.vue'
</script>
<style scoped>
/* Your styles go here */
</style>
