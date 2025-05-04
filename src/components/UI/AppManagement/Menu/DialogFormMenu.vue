<template>
  <v-card>
    <div class="pa-6 bg-white radius-10">
      <v-row class="d-flex align-center">
        <v-col cols="6">
          <div class="font-24 font-weight-bold">
            Form
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
        <v-col
          cols="12"
          md="6"
        >
          <div
            v-if="selectData !== null"
            class="elevation-3 radius-10 pa-2"
          >
            <form-data
              v-if="selectData !== null"
              :select-data="selectData"
              @refresh-page="moduleRefreshPage"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { IResponseMenu } from '@/model/menu-interface';
import { useLoadingForm } from '@/utils/loading';
import { emitsGlobal, propsForm } from '@/utils/props';
import FormData from './FormDataMenu.vue';

const route = useRoute();

// props
defineProps(propsForm<IResponseMenu>());
const emit = defineEmits(emitsGlobal);

// loading
const { resultLoading } = useLoadingForm();

const moduleRefreshPage = () => {
  emit('refreshPage');
  emit('closeDialog');
};
</script>