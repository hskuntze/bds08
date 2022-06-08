import { Controller, useForm } from 'react-hook-form';
import { Store } from '../../types';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../util/requests';
import Select from 'react-select';
import './styles.css';

export type FilterStore = {
  store: Store | null;
};

type Props = {
  onSubmitFilter: (data: FilterStore) => void;
};

const Filter = ({ onSubmitFilter }: Props) => {
  const { control, setValue, getValues, handleSubmit } = useForm<FilterStore>();

  const [selectStores, setSelectStores] = useState<Store[]>([]);

  useEffect(() => {
    requestBackend.get('/stores').then((response) => {
      setSelectStores(response.data);
    });
  }, []);

  const onSubmit = (filter: FilterStore) => {
    onSubmitFilter(filter);
  };

  const handleFilterChange = (store: Store) => {
    setValue('store', store);
    const obj = {
      store: getValues('store')
    };
    onSubmitFilter(obj);
  };

  return (
    <div className="filter-container base-card">
      <form onSubmit={handleSubmit(onSubmit)} className="filter-bar">
        <div className="filter-select">
          <Controller
            name="store"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectStores}
                isClearable
                onChange={(value) => handleFilterChange(value as Store)}
                placeholder="Loja"
                classNamePrefix="store-select"
                getOptionLabel={(store: Store) => store.name}
                getOptionValue={(store: Store) => String(store.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
