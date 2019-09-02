const tenCounting =[1,2,3,4,5,6,7,8,9,10];
    tenCounting.filter(num => num%2===0)
    const monday = [
        {
          name: 'Write a summary HTML/CSS',
          duration: 180
        },
        {
          name: 'Some web development',
          duration: 120
        },
        {
          name: 'Fix homework for class10',
          duration: 20
        },
        {
          name: 'Talk to a lot of people',
          duration: 1.0
        }
      ];
      
      const tuesday = [
        {
          name: 'Keep writing summary',
          duration: 1.0
        },
        {
          name: 'Some more web development',
          duration: 180
        },
        {
          name: 'Staring out the window',
          duration: 10
        },
        {
          name: 'Talk to a lot of people',
          duration: 1.0
        },
        {
          name: 'Look at application assignments new students',
          duration: 40
        }
      ];
      let mondayMap=[] ;
      mondayMap=monday.map(hourDuration =>hourDuration.duration/60)
      let tuesdayMap=[]; 
      tuesdayMap =tuesday.map(hourDuration =>hourDuration.duration/60)
console.log(mondayMap)
console.log(tuesdayMap)

mondayMap.filter(index=>index >= 2)
tuesdayMap.filter(index=>index >= 2)

let mondayCosts =( monday.reduce((accumulator, currentValue)=>accumulator + currentValue.duration,0)) (20/ 60)
let tuesdayCosts =( tuesday.reduce((accumulator, currentValue)=>accumulator + currentValue.duration,0)) (20/ 60)
console.log(mondayCosts)
console.log(tuesdayCosts)



