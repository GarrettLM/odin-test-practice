function analyzeMin(array) {
  return array.reduce((min, current) => {
    return (min > current) ? current : min;
  });
}

function analyze(array) {
  return {
    min: analyzeMin(array),
    max: 0,
    average: 0,
    length: 0
  };
}

module.exports = { analyze, analyzeMin };