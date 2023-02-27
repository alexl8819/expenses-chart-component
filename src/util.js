export function parseFileAsJson (file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
      fileReader.addEventListener('loadend', () => {
        let fileContents = fileReader.result;
        try {
          fileContents = safeJsonParse(fileReader.result);
        } catch (err) {
          reject(err);
        }
        resolve(fileContents);
    });
    if (file) {
      fileReader.readAsText(file);
    }
  });
}

export function safeJsonParse (json) {
  let sj = '';
  try {
    sj = JSON.parse(json)
  } catch (err) {
    throw new Error('Invalid JSON');
  }
  return sj;
}