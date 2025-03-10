
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  

  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
 
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  

  console.log(saturdayFun()); 
  console.log(saturdayFun("dance")); 
  
  console.log(mondayWork()); 
  console.log(mondayWork("work from home")); 
  
  const encouragingPromptFunction = wrapAdjective("%");
  console.log(encouragingPromptFunction("a dedicated programmer"));
  console.log(wrapAdjective("!")("an amazing developer")); 
  
