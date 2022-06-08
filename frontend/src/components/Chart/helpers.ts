import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    colors: ['#FF7A00', '#7234F5', '#FF0000'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 1,
      horizontalAlign: 'center',
      labels: {
        colors: ['#8D8D8D']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '18px',
      itemMargin: {
        horizontal: 37,
        vertical: 8
      }
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        blur: 3,
        opacity: 0.8
      }
    },
    plotOptions: {
      pie: {
        size: 700,
        donut: {
          size: '64%',
          labels: {
            show: true,
            name: {
              show: false,
              offsetY: 5,
              formatter: function () {
                return name;
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '24px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '300px'
    }
  } as ApexOptions;
};
