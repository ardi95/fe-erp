<template>
  <v-card>
    <div class="pa-6 bg-white radius-10">
      <v-row class="d-flex align-center">
        <v-col cols="6">
          <div class="font-24 font-weight-bold">
            Add
            {{ route.matched[2].meta ? route.matched[2].meta.label : '' }}
          </div>
        </v-col>
        <v-col
          cols="6"
          class="text-right"
        >
          <v-btn
            variant="text"
            color="primary"
            class="mr-2 mb-2"
            icon="mdi-close"
            :loading="resultLoading"
            @click="$emit('closeDialog')"
          />
        </v-col>
      </v-row>

      <v-row class="mt-2">
        <v-col cols="12">
          <div class="elevation-3 rounded pa-2">
            <form-data
              @refresh-page="moduleRefreshPage"
              @change-loading="(data) => loading.submit = data"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useLoadingForm } from '@/utils/loading';
import { emitsGlobal } from '@/utils/props';
import FormData from './FormDataMenu.vue';

const route = useRoute();

// props
const emit = defineEmits(emitsGlobal);

// loading
const { loading, resultLoading } = useLoadingForm();

const moduleRefreshPage = () => {
  emit('refreshPage');
  emit('closeDialog');
};
</script>
