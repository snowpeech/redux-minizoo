const INITIAL_STATE = { animal: '' };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case "BEAR":
        return { ...state, animal: "ʕ·ᴥ·ʔ", name:"bear" };
    
    case "SHEEP":
        return { ...state, animal: "{ @’ꈊ’@ }", name:"sheep" };
    
    case "RABBIT":
        return { ...state, animal: "／(=∵=)＼",name:"rabbit" };

    case "CAT":
        return { ...state, animal: " ि०॰०ॢी",name:"cat" };
            
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);

// feed the bear: ʕ　·ᴥʔ   且 ┌iii┐
