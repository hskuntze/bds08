import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import Filter, { FilterStore } from './components/Filter';
import Header from './components/Header';
import { buildSalesByGender } from './helpers';
import { PieChartConfig, SalesByGender, Summary } from './types';
import { formatPrice } from './util/formatters';
import { buildFilterParams, requestBackend } from './util/requests';

function App() {
  const [filterData, setFilterData] = useState<FilterStore>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const [total, setTotal] = useState<Summary>({
    avg: 0,
    count: 0,
    max: 0,
    min: 0,
    sum: 0
  });

  useEffect(() => {
    requestBackend.get<SalesByGender[]>('/sales/by-gender', { params }).then((response) => {
      const newSalesByGender = buildSalesByGender(response.data);
      setSalesByGender(newSalesByGender);
    });
  }, [params]);

  useEffect(() => {
    requestBackend.get('/sales/summary', { params }).then((response) => {
      setTotal(response.data);
    });
  }, [params]);

  const onFilterChange = (filter: FilterStore) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={onFilterChange} />
        <Chart
          name="Genero"
          labels={salesByGender?.labels}
          series={salesByGender?.series}
          total={formatPrice(total.sum)}
        />
      </div>
    </>
  );
}

export default App;
