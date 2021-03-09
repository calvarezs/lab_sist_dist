import date from 'date-and-time';

export function dayRangeTimestamp(type){
if (type === 'temperatures') {
    //const timeNow = new Date(2020, 11, 18); For testing
    const timeNow = new Date();
    let timestampDay = 86400 
    const yesterday = date.addDays(timeNow, -1)
    const formatedYesterday = date.format(yesterday, 'YYYY-MM-DD');
    const timeSplitted = formatedYesterday.split('-')
    const monthToNumber = (parseInt(timeSplitted[1]) - 1).toString()
    timeSplitted[1] = monthToNumber
    let lt = new Date(timeSplitted[0],timeSplitted[1], timeSplitted[2], 23, 59).getTime()
    lt = Math.round(lt / 1000)
    let gte = new Date(timeSplitted[0],timeSplitted[1], timeSplitted[2], 0, 0).getTime()
    gte = Math.round(gte / 1000)
  
    const range = [lt,gte]
    return range   
} else {
      //const timeNow = new Date(2020, 11, 18); For testing
      const timeNow = new Date();
      let timestampDay = 86400 
      const formatedNow = date.format(timeNow, 'YYYY-MM-DD');
      const timeSplitted = formatedNow.split('-')
      const monthToNumber = (parseInt(timeSplitted[1]) - 1).toString()
      timeSplitted[1] = monthToNumber
      let lt = new Date(timeSplitted[0],timeSplitted[1], timeSplitted[2], 23, 59).getTime()
      lt = Math.round(lt / 1000)
      let gte = new Date(timeSplitted[0],timeSplitted[1], timeSplitted[2], 0, 0).getTime()
      gte = Math.round(gte / 1000)
    
      const range = [lt,gte]
      return range   
}

}