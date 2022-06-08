import { FilterStore } from './../components/Filter/index';
import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const requestBackend = axios.create({
  baseURL: BASE_URL
});

export const buildFilterParams = (
  filterData?: FilterStore,
  extraParams?: Record<string, unknown>
) => {
  return {
    storeId: filterData?.store?.id,
    ...extraParams
  };
};
