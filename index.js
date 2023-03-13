// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

wrapAdjective = function(highlight = '*') {
    return function(adjective = 'special'){
        return `You are ${highlight}${adjective}${highlight}!`
    }
    
}