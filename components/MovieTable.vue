  <script setup>
    const { data } = await useFetch('/api/listar-peliculas')
  </script>

<template>
    <v-data-table :items="data.peliculas" />
  </template>
  