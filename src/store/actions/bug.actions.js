export const TRIGGER_BUGGED = 'TRIGGER_BUGGED';

export function triggerBugged(name){
  return dispatch => {
    if(name){
      dispatch({type: TRIGGER_BUGGED, payload: name});
    }
  };
}