import type { IRequestMenu, IRequestMenuSort } from '@/model/menu-interface';
import { api } from '../api';

const basePath = '/app-management/menu';

export function list(id: number) {
  return api({
    url: `${basePath}/${id}`,
    method: 'GET',
  });
}

export function add(data: IRequestMenu) {
  return api({
    url: `${basePath}`,
    method: 'POST',
    data,
  });
}

export function sort(id: number, data: IRequestMenuSort) {
  return api({
    url: `${basePath}/sort/${id}`,
    method: 'POST',
    data,
  });
}

export function detail(id: number) {
  return api({
    url: `${basePath}/${id}/detail`,
    method: 'GET',
  });
}

export function update(id: number, data: IRequestMenu) {
  return api({
    url: `${basePath}/${id}`,
    method: 'PATCH',
    data,
  });
}

export function deleteData(id: number) {
  return api({
    url: `${basePath}/${id}`,
    method: 'DELETE',
  });
}

export function activeMenu(id: number) {
  return api({
    url: `${basePath}/active/${id}`,
    method: 'PUT',
  });
}
