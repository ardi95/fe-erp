<template>
  <div class="ma-6">
    <v-row>
      <v-col cols="12">
        <p class="font-24 font-bold">
          {{ route.matched[2].meta.label }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
