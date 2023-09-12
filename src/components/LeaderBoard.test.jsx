import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import LeaderBoard from "./LeaderBoard";

describe("LeaderBoard", () => {
    it("LeaderBoard component is render", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <LeaderBoard />
                </BrowserRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});