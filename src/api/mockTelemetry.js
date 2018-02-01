const YPR = {
  data: {
    columns: [
      ['Yaw', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150],
      ['Pitch', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150],
      ['Roll', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150],
    ],
  },
  axis: {
    x: {
      label: 'Time',
      position: 'outer-center',
    },
    y: {
      label: 'Power',
      position: 'outer-middle',
    },
  },
  size: {
    height: 300,
  },
}

const SOLAR = {
  data: {
    columns: [
      ['Health', 91.4],
    ],
    type: 'gauge',
  },
  color: {
    pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
    threshold: {
      values: [30, 60, 90, 100],
    },
  },
  size: {
    height: 150,
  },
}


const VOLTAGE = {
  data: {
    columns: [
      ['Voltage', 1000, 999, 998, 1000, 1000, 1000, 1000, 1000, 999, 997, 995, 1000, 999, 999, 998, 998, 998, 1000],
    ],
  },
  axis: {
    x: {
      label: 'Time',
      position: 'outer-center',
    },
    y: {
      label: 'Voltage',
      position: 'outer-center',
    },
  },
  size: {
    height: 300,
  },
}


const CMG = {
  data: {
    columns: [
      ['RPM', 2000, 2005, 2990, 2898, 3000, 2500, 2600, 2789, 2730, 2700, 3000, 2100, 2200, 2150],
    ],
  },
  axis: {
    x: {
      label: 'Time',
      position: 'outer-center',
    },
    y: {
      label: 'RPM',
      position: 'outer-middle',
    },
  },
  size: {
    height: 300,
  },
}


function randomizeYPR(chart) {
  const ypr = [
    Math.floor(Math.random() * Math.floor(Math.random() * 400)),
    Math.floor(Math.random() * Math.floor(Math.random() * 400)),
    Math.floor(Math.random() * Math.floor(Math.random() * 400)),
  ];
  const flowData = {
    columns: [
      ['Yaw', ypr[0]],
      ['Pitch', ypr[1]],
      ['Roll', ypr[2]],
    ],
  };
  chart.flow(flowData);
  return flowData;
}

function randomizeCMG(chart) {
  const cmg = 2000 - Math.floor(Math.random() * 2000);
  const flowData = {
    columns: [['RPM', 3000 - cmg]],
  };
  chart.flow(flowData);
  return flowData;
}

function randomizeBatteryVoltage(chart) {
  const voltage = [
    'Voltage',
    Math.floor(1000 - Math.floor((Math.random() * 10))),
  ];
  const flowData = {
    columns: [voltage],
  };
  chart.flow(flowData);
  return voltage;
}

function randomizeSolarHealth(chart) {
  const health = [
    'Health',
    Math.floor(100 - Math.floor((Math.random() * 50))),
  ];
  const flowData = {
    columns: [health],
  };
  chart.load(flowData);
  return flowData;
}

export {
    YPR,
    SOLAR,
    VOLTAGE,
    CMG,
    randomizeYPR,
    randomizeCMG,
    randomizeBatteryVoltage,
    randomizeSolarHealth
  }
