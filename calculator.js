const getSleepHours = (day) => {
  switch (day){
      case 'monday':
      return 5
      

    case 'tuesday':
      return 5
      

    case 'wednesday':
      return 7
     

    case 'thursday':
      return 10
     
 
    case 'friday':
      return 6
     

    case 'saturday':
      return 8
   

    case 'sunday':
      return 8
     
  }
};

const getActualSleepHours = () =>{
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') 
}

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours()

if (actualSleepHours === idealSleepHours) {
  console.log('Perfect sleep time.');
  }

else if (actualSleepHours > idealSleepHours)
 {
  console.log('You got ' + (idealSleepHours + actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }

else {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}
}

calculateSleepDebt();
