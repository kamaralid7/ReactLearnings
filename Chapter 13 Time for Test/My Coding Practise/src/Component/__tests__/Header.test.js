import Header from "../Header"
import { render } from "@testing-library/react"
import { Provider} from "react-redux";
import store from "../../utils/store";
import { StaticRouter} from "react-router-dom/server"

test("Logo should load on rendering header", () => {
    // Load Header
    const header =  render(
        <StaticRouter>
            <Provider store = {store}>
                <Header /> 
            </Provider>
        </StaticRouter>
        
        )
    //console.log(header)

    const logo = header.getAllByTestId("logo")

    expect(logo[0].src).toBe("http://localhost/dummy.png")

    // check if logo is loaded
});


test("Online status should be green on rendering heading", () => {
    // Load Header
    const header =  render(
        <StaticRouter>
            <Provider store = {store}>
                <Header /> 
            </Provider>
        </StaticRouter>
        
        )
    //console.log(header)

    const online_status = header.getByTestId("online-status")

    expect(online_status.className).toBe("text-green-600")

    // check if logo is loaded
});



test("Cart Items should be 0", () => {
    // Load Header
    const header =  render(
        <StaticRouter>
            <Provider store = {store}>
                <Header /> 
            </Provider>
        </StaticRouter>
        
        )
    //console.log(header)

    const cart_Items = header.getByTestId("cart_Items")

   expect(cart_Items.innerHTML).toBe("Cart - 0")
});