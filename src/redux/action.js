export const login = (userData) => {
  return {
    type: "LOGINSUCCESS",
    userData: userData,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const addFoodOrder = (item) => {
  return {
    type: "ADDFOODORDER",
    data: item,
  };
};

export const removeFoodOrder = (item) => {
  return {
    type: "REMOVEFOODORDER",
    data: item,
  };
};

export const sumAddOrder = (item) => {
  return {
    type: "SUMADDORDER",
    data: item,
  };
};

export const sumRemoveOrder = (item) => {
  return {
    type: "SUMREMOVEORDER",
    data: item,
  };
};

export const orderAction = (state = [], action) => {
  switch (action.type) {
    case "ADDFOODORDER":
      {
        for(let item of state){
          if(item.name === action.data.name){
            item.quantity++;
            const priceItem = String(item.priceItem).slice(2);
            console.log(item.price);
            item.price = Number(Number(item.price) + Number(priceItem));
            return [...state];
          }
        }
        return [...state, action.data];
      }
    case "REMOVEFOODORDER":
      {
        for(let item of state){
          if(item.name === action.data.name){
            item.quantity = 1;
            item.price = Number(String(item.priceItem).slice(2));
            return state.filter((item) => item.name !== action.data.name);
          }
        }
        return [...state];
      }
    default:
      return state;
  }
};

export const sumOrderAction = (state = 0, action) => {
  switch(action.type){
    case "SUMADDORDER":
      {
        return Number(Number(state) + Number(String(action.data.priceItem).slice(2)));
      }
    case "SUMREMOVEORDER":
      {
        console.log(action.data.price);
            return Number(Number(state) - Number(action.data.price));
      }
      default:
        return state;
  }
}

export const account = (state = null, action) => {
  switch (action.type) {
    case "LOGINSUCCESS":
      return action.userData;
    case "LOGOUT":
      return;
    default:
      return state;
  }
};
