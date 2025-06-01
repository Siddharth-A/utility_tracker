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

// function to return month name for month number
function getMonthName(month) {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthNames[parseInt(month)-1];
}

// Function to fetch and transform data from the API
export async function fetchUtilityData() {
  try {
    const response = await fetch('http://localhost:3002/api/bills');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const bills = await response.json();
    
    // Transform the data into the required format
    const transformedData = bills.map(bill => ({
      month: getMonthName(bill.month),
      year: bill.year,
      Alectra: bill.Alectra || 0,
      Bhydro: bill.Bhydro || 0,
      Enbridge: bill.Enbridge || 0,
      Reliance: bill.Reliance || 0,
    }));

    return transformedData;
  } catch (error) {
    console.error('Error fetching utility data:', error);
    return [];
  }
}

// Keep fakeData as fallback in case API fails
export const fakeData = [
  {
    month: 'Jan',
    year: 2024,
    Alectra: 300,
    Bhydro: 400,
    Enbridge: 230,
    Reliance: 40.50,
  },
  {
    month: 'Feb',
    year: 2024,
    Alectra: 191,
    Bhydro: 0,
    Enbridge: 210,
    Reliance: 40.50,
  },
  {
    month: 'Mar',
    year: 2024,
    Alectra: 150,
    Bhydro: 0,
    Enbridge: 180,
    Reliance: 40.50,
  },
  {
    month: 'Apr',
    year: 2024,
    Alectra: 180,
    Bhydro: 380,
    Enbridge: 150,
    Reliance: 40.50,
  },
  {
    month: 'May',
    year: 2024,
    Alectra: 170,
    Bhydro: 0,
    Enbridge: 150,
    Reliance: 40.50,
  },
  {
    month: 'Jun',
    year: 2024,
    Alectra: 145,
    Bhydro: 0,
    Enbridge: 120,
    Reliance: 40.50,
  },
  {
    month: 'Jul',
    year: 2024,
    Alectra: 130,
    Bhydro: 387,
    Enbridge: 110,
    Reliance: 40.50,
  },
  {
    month: 'Aug',
    year: 2024,
    Alectra: 115,
    Bhydro: 0,
    Enbridge: 80,
    Reliance: 40.50,
  },
  {
    month: 'Sep',
    year: 2024,
    Alectra: 140,
    Bhydro: 0,
    Enbridge: 90,
    Reliance: 40.50,
  },
  {
    month: 'Oct',
    year: 2024,
    Alectra: 165,
    Bhydro: 378,
    Enbridge: 105,
    Reliance: 40.50,
  },
  {
    month: 'Nov',
    year: 2024,
    Alectra: 176,
    Bhydro: 0,
    Enbridge: 130,
    Reliance: 40.50,
  },
  {
    month: 'Dec',
    year: 2024,
    Alectra: 180,
    Bhydro: 0,
    Enbridge: 135,
    Reliance: 40.50,
  },
  {
    month: 'Jan',
    year: 2025,
    Alectra: 180,
    Bhydro: 450,
    Enbridge: 220,
    Reliance: 40.50,
  },
  {
    month: 'Feb',
    year: 2025,
    Alectra: 160,
    Bhydro: 0,
    Enbridge: 190,
    Reliance: 40.50,
  },
];
  