import Temperature from './schemas/temperature.js'
import Prediction from './schemas/prediction.js'

function fib(n) {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2)
  } else {
    return n;
  }
}

function getFibonacci(predictionDays) {
  var results = []
  for (let index = 1; index <= predictionDays; index++) {
    results.push(fib(index));
  }

  const resultsSum = results.reduce((a, b) => a + b, 0) //suma de la lista

  const fibPercent = results.map((value) => (value / resultsSum).toFixed(2))
  return fibPercent.reverse();
}

function getMinTemperature(dayTemperatures) {
  let min = 9999999999999;
  dayTemperatures.forEach(dayTemperature => {
    if (dayTemperature.temp < min) {
      min = Math.round(dayTemperature.temp, 1)
    }
  });

  return min
}

function getMaxTemperature(dayTemperatures) {
  let max = -9999999999999;
  dayTemperatures.forEach(dayTemperature => {
    if (dayTemperature.temp > max) {
      max = Math.round(dayTemperature.temp, 1)
    }
  });

  return max
}

export async function calculateTemperatures(predictionDays) {
  let timeNow = Math.round(Date.now() / 1000)
  console.log(timeNow) 
  let timestampDay = 86400 
  let gt = timeNow - timestampDay;
  let lt = timeNow;
  let city;
  let predicctions = [];

  for (let index = 0; index < predictionDays; index++) {
    let dayPreddiction = []
    let oneDayTemperatures = await Temperature.find({ timestamp: { $lt: lt, $gte: gt } })
    console.log(oneDayTemperatures)
    console.log("soy gt: ", gt, "soy lt: ", lt)
    gt -= timestampDay
    lt -= timestampDay

    city = oneDayTemperatures.city

    let average = 0;
    let counter = 0;
    oneDayTemperatures.forEach(oneDayTemperature => {
      average += oneDayTemperature.temp
      counter++
      if (counter % 4 == 0) {
        average = Math.round(average / 4)
        dayPreddiction.push(average)
        average = 0
      }
    });
    dayPreddiction.push(getMinTemperature(oneDayTemperatures))
    dayPreddiction.push(getMaxTemperature(oneDayTemperatures))

    predicctions.push(dayPreddiction)
    console.log(dayPreddiction)
  }

  let finalPredictions = [] 
  
  for (let i = 0; i < predictionDays; i++) {
    for (let j = 0; j < predicctions[i].length; j++) {
      predicctions[i][j] = (predicctions[i][j] * getFibonacci(predictionDays)[i])
    }
  }
  
  for (let j = 0; j < predicctions[0].length; j++) {
    let sumPredictions = 0;
    for (let i = 0; i < predictionDays; i++) {
      sumPredictions += predicctions[i][j]
    }
    finalPredictions.push(sumPredictions)
  }

  await Prediction.create({
    city: 'Santiago',
    temp: {
      night: finalPredictions[0],
      morning: finalPredictions[1],
      afternoon: finalPredictions[2],
      min: finalPredictions[3], 
      max: finalPredictions[4]  
    },
    timestamp: Date.now()
  })

  console.log(finalPredictions)
  return finalPredictions
}


