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

function analyze(array) {
  return {
    min: analyzeMin(array),
    max: analyzeMax(array),
    average: 0,
    length: 0
  };
}

module.exports = { analyze, analyzeMin, analyzeMax };