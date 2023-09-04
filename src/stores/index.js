import { configureStore } from "@reduxjs/toolkit";

import carNumber from "./carNumber";

const store = configureStore({
   reducer: {
      carNumber
   }
});

export default store;
