import ReactApexChart from 'react-apexcharts';
import { Gender } from '../../types';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels?: Gender[];
  series?: number[];
  name: string;
  total: string;
};

const Chart = ({ labels = [], series = [], name, total }: Props) => {
  return (
    <div className="chart-container base-card">
      <div className="chart-info">
        <h1 className="chart-title">{total}</h1>
        <span className="chart-subtitle">Total de vendas</span>
      </div>
      <div className="chart-content">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width={300}
          height={350}
          series={series}
        />
      </div>
    </div>
  );
};

export default Chart;
