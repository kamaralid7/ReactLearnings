import { render, waitFor, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import Body from "../Body"
import store from "../../utils/store"
import {StaticRouter} from "react-router-dom/server"
import {RESTAURANT_DATA} from "../../mocks/data"


global.fetch = jest.fn(() => {

    return Promise.resolve({
        json: () => { 
            return Promise.resolve(RESTAURANT_DATA); 
        },
    });
});



test("Shimmer to be loaded in homepage", () =>{
    const body = render(
        <StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>   
        </StaticRouter> 
    );


    const shimmer = body.getByTestId("shimmer-UI");
    expect(shimmer.children.length).toBe(10)


})

test("Restaurants should be loaded in homepage", async() =>{
    const body = render(
        <StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>   
        </StaticRouter> 
    );

    await waitFor( () => expect(screen.getByTestId("search-btn")))

    const search_input = body.getByTestId("search-input");

    fireEvent.change(search_input,{ 
        target: {
            value: "zone",
        },
    });

    const search_btn = body.getByTestId("search-btn");

    fireEvent.click(search_btn)
    //

    const res_list = body.getByTestId("res-list")
    expect(res_list.children.length).toBe(1)


})