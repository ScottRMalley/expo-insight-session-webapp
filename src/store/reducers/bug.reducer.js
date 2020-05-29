import { TRIGGER_BUGGED } from '../actions/bug.actions';

const initialBugState = {
  numBugs: 0,
  buggerNames: [],
};

export default function bugReducer(prevState=initialBugState, action){
  console.log(prevState);
  switch(action.type){
    case TRIGGER_BUGGED:
      return {
        ...prevState,
        numBugs: prevState.numBugs + 1,
        buggerNames: [...prevState.buggerNames, action.payload],
      };
    default:
      return {...prevState};
  }
}