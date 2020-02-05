import { produce } from "immer";
import { MYACTION } from "../utils/constants";

const ReducerList = produce((draft, action) => {
  switch (action.type) {
    case MYACTION.CHANGECOUNT:
      draft.count = action.payload.count;
      draft.Total = action.payload.Total;
      return;
    case MYACTION.DrawerState:
      debugger;
      draft.visible = action.payload;
      return;
    case MYACTION.updateCartList:
      debugger;
      draft.myCartList=action.payload;
      return;
      case MYACTION.GetSortedList:
        debugger
        // draft.CardImages=action.payload.List
        action.payload.myList=action.payload.List
        
        return;


    default:
      return draft;
  }
});

export default ReducerList;
