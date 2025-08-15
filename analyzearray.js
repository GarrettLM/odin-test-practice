function analyzeMin(array) {
  return array.reduce((min, current) => {
    return (min > current) ? current : min;
  });
}

function analyzeMax(array) {
  return array.reduce((max, current) => {
    return (max < current) ? current : max;
  });
}

function analyzeAverage(array) {
  let total = array.reduce((total, current) => {
    return total + current;
  }, 0);
  return total / array.length;
}

function analyze(array) {
  return {
    min: analyzeMin(array),
    max: analyzeMax(array),
    average: analyzeAverage(array),
    length: array.length,
  };
}

module.exports = { analyze, analyzeMin, analyzeMax };