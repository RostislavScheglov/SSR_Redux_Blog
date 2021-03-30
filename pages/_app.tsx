import store from "../Redux/store";
import { Provider } from 'react-redux'
import { createWrapper } from "next-redux-wrapper";
import "../styles/globals.css"

 function myApp ({Component, pageProps}){


return (

   <Provider store={store}  >
      <Component {...pageProps} />
   </Provider>

)
}
const makestore =()=>store;
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(myApp);

