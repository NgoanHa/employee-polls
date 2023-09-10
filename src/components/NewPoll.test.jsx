import {fireEvent, render} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import NewPoll from "./NewPoll";

describe("NewPoll", () => {
    it("NewPoll component is render", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPoll/>
                </BrowserRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });

    it("value input is match", () => {
        const component = render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPoll/>
                </BrowserRouter>
            </Provider>
        );

        const firstOption = component.getByTestId("firstOption");
        const secondOption = component.getByTestId("secondOption");

        fireEvent.change(firstOption, {target: {value: 'First Option'}});
        fireEvent.change(secondOption, {target: {value: 'Second Option'}});
        expect(firstOption.value).toBe("First Option");
        expect(secondOption.value).toBe("Second Option");
    });
});