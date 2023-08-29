import * as spendingData from './data.json';

import { 
  buildChart,
  addChartData,
  removeExistingChartData
} from './chart.js';

document.addEventListener('DOMContentLoaded', () => {
  const chartInstance = buildChart(document.querySelector('canvas'), spendingData);
  // Handle loading custom data
  document.querySelector('header > div > button').addEventListener('click', async () => {
    const { parseFileAsJson } = await import('./util.js');
    const inputContainer = document.getElementById('custom-input-field');
    const errorField = inputContainer.querySelector('div > p.hidden > span');
    const inputField = inputContainer.querySelector('input[type="file"]');
    inputField.addEventListener('change', async (e) => {
      let newData;
      // Parse data
      try {
        newData = await parseFileAsJson(e.target.files[0]);
      } catch (err) {
        console.error(err);
        if (errorField.parentNode.classList.contains('hidden')) {
          errorField.parentNode.classList.toggle('hidden');
        }
        errorField.innerText = err.message;
        return;
      }
      // Validate data
      try {
        validateCustomData(newData)
      } catch (err) {
        console.error(err);
        if (errorField.parentNode.classList.contains('hidden')) {
          errorField.parentNode.classList.toggle('hidden');
        }
        errorField.innerText = err.message;
        return;
      }
      // Remove existing data
      removeExistingChartData(chartInstance);
      // Add new data
      addChartData(chartInstance, newData);
      // Update chart
      chartInstance.update();
      // Hide input container
      inputContainer.classList.toggle('hidden');
    });
    // Unhide input container
    inputContainer.classList.toggle('hidden');
    // Emulate input[file] click behavior
    inputContainer.querySelector('label[for="file-input"]').addEventListener('click', () => inputField.click());
  });
});

function validateCustomData (dataset) {
  if (!Array.isArray(dataset) || !dataset.length) {
    throw new Error('Dataset is not an array or is empty');
  }
  if (dataset.length && dataset.length > 14) {
    throw new RangeError('Dataset is too long: 14 elements allowed maximum');
  }
  for (const data of dataset) {
    const keys = Object.keys(data);
    if (!{}.hasOwnProperty.call(keys, 'day') || !{}.hasOwnProperty.call(keys, 'amount')) {
      throw new Error('Invalid keys found: Must be type str (day, amount)');
    }
    if (typeof data['day'] !== 'string') {
      throw new Error('Value of day must be type str');
    }
    if (typeof data['amount'] !== 'number' || isNaN(data['amount'])) {
      throw new Error('Value of amount must be type number');
    }
  }
}
