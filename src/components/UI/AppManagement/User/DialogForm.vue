<template>
  <v-card>
    <div class="pa-6 bg-white radius-10">
      <v-form @submit.prevent="submitForm">
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
              variant="outlined"
              color="primary"
              class="mr-2 mb-2"
              :loading="resultLoading"
              @click="$emit('closeDialog')"
            >
              Cancel
            </v-btn>

            <v-btn
              type="submit"
              color="primary"
              class="mr-2 mb-2"
              :loading="resultLoading"
              :disabled="v$.$invalid"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="mt-2">
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="state.name"
              class="mt-2"
              density="compact"
              name="name"
              label="Name"
              variant="outlined"
              clearable
              :error-messages="v$.name.$errors.map((e) => e.$message as string)"
              @blur="v$.name.$touch()"
            />

            <v-text-field
              v-model="state.email"
              :disabled="!!selectData"
              class="mt-2"
              density="compact"
              name="email"
              label="Email"
              variant="outlined"
              clearable
              :error-messages="v$.email.$errors.map((e) => e.$message as string)"
              @blur="v$.email.$touch()"
            />

            <v-radio-group
              v-model="state.gender"
              class="mt-2"
              inline
            >
              <template #label>
                <div>Gender</div>
              </template>
              <v-radio
                color="primary"
                value="Male"
              >
                <template #label>
                  <div>Male</div>
                </template>
              </v-radio>
              <v-radio
                color="primary"
                value="Female"
              >
                <template #label>
                  <div>Female</div>
                </template>
              </v-radio>
            </v-radio-group>

            <date-picker
              v-model="state.birthdate"
              label="Birhtdate"
              class="mt-2"
            />
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { rules } from '@/utils/appmanagement/user/form';
import { useLoadingForm } from '@/utils/loading';
import { emitsGlobal, propsForm } from '@/utils/props';
import useVuelidate from '@vuelidate/core';
import { format } from 'date-fns';
import DatePicker from '@/components/common/DatePicker.vue';
import { add, detail, update } from '@/service/AppManagement/user';
import type { IResponseUser } from '@/model/user-interface';

const route = useRoute();
const swal = inject('$swal') as typeof import('sweetalert2').default;

// props
const props = defineProps(propsForm<IResponseUser>());
const emit = defineEmits(emitsGlobal);

// loading
const { loading, resultLoading } = useLoadingForm();

// data
const state = reactive({
  name: '',
  email: '',
  gender: 'Male',
  birthdate: format(new Date(), 'yyyy-MM-dd'),
});

// rules
const v$ = useVuelidate(rules, state);

const submitForm = () => {
  loading.submit = true;

  let type
  if (props.selectData) type = update(props.selectData.id, state)
  else type = add(state)

  if (type) {
    type
      .then(({ data }) => {
        v$.value.$reset();
        swal.fire('Success', data.message, 'success');
        emit('refreshPage');
        emit('closeDialog');
      })
      .finally(() => (loading.submit = false));
  }

};

const fetchForm = () => {
  v$.value.$touch();

  if (props.selectData) {
    loading.data = true;
    detail(props.selectData.id)
      .then(({ data }) => {
        Object.assign(state, data.data);
      })
      .finally(() => (loading.data = false));
  }
};

fetchForm();
</script>
