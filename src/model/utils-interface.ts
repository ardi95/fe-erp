export interface IAttributeDialogConfirm {
  title: string;
  html: string;
  confirmButtonText?: string | null;
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  denyButton?: string;
  width?: string | number;
}
