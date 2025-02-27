import type { PropType } from "vue";

export const emitsGlobal = [
  'closeDialog',
  'refreshPage',
  'submitForm',
  'submitDelete',
  'fetchDataSummary',
  'optionsPerPage',
];

export const propsForm = <T>() => ({
  selectData: {
    type: Object as PropType<T | null>,
    default: () => null,
  },
});

export const propsComponentCommon = {
  modelValue: {
    type: String,
    default: null,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: 'Date',
  },
  variant: {
    type: String as PropType<'outlined' | 'filled' | 'underlined' | 'plain' | 'solo' | 'solo-inverted' | 'solo-filled'>,
    default: 'outlined',
  },
  hideDetails: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array as PropType<string[]>, // Pastikan didefinisikan sebagai array string
    default: () => [] as string[], // Pastikan default adalah array string
  },
}
