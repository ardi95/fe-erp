export interface IAttributeDialogConfirm {
  title: string;
  html: string;
  confirmButtonText?: string | null;
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  denyButton?: string;
  width?: string | number;
}

export interface IParamsList {
  page: number;
  per_page: number;
  search?: string;
  order_field?: string | null;
  order_dir?: string | null;
}

export interface IListResponse<T> {
  data: T[];
  total: number;
}
