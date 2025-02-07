// Data from https://finance.yahoo.com/quote/NFLX/financials/

const translations = {
    Alectra: 'Alectra',
    Bhydro: 'Hydro',
    Enbridge: 'Enbridge',
    Reliance: 'Reliance',
  };
  
  export function addLabels(series) {
    return series.map((item) => ({
      ...item,
      label: translations[item.dataKey],
      valueFormatter: (v) => (v ? `$ ${v.toLocaleString()}` : '-'),
    }));
  }
  
  export const fakeData = [
    {
        month: 'Jan',
        Alectra: 200,
        Bhydro: 400,
        Enbridge: 230,
        Reliance: 40.50,
    },
    {
        month: 'Feb',
        Alectra: 191,
        Bhydro: 0,
        Enbridge: 210,
        Reliance: 40.50,
    },
    {
        month: 'Mar',
        Alectra: 150,
        Bhydro: 0,
        Enbridge: 180,
        Reliance: 40.50,
    },
    {
        month: 'Apr',
        Alectra: 180,
        Bhydro: 380,
        Enbridge: 150,
        Reliance: 40.50,
    },
    {
        month: 'May',
        Alectra: 170,
        Bhydro: 0,
        Enbridge: 150,
        Reliance: 40.50,
    },
    {
        month: 'Jun',
        Alectra: 145,
        Bhydro: 0,
        Enbridge: 120,
        Reliance: 40.50,
    },
    {
        month: 'Jul',
        Alectra: 130,
        Bhydro: 387,
        Enbridge: 110,
        Reliance: 40.50,
    },
    {
        month: 'Aug',
        Alectra: 115,
        Bhydro: 0,
        Enbridge: 80,
        Reliance: 40.50,
    },
    {
        month: 'Sep',
        Alectra: 140,
        Bhydro: 0,
        Enbridge: 90,
        Reliance: 40.50,
    },
    {
        month: 'Oct',
        Alectra: 165,
        Bhydro: 378,
        Enbridge: 105,
        Reliance: 40.50,
    },
    {
        month: 'Nov',
        Alectra: 176,
        Bhydro: 0,
        Enbridge: 130,
        Reliance: 40.50,
    },
    {
        month: 'Dec',
        Alectra: 180,
        Bhydro: 0,
        Enbridge: 135,
        Reliance: 40.50,
    },
  ];
  