import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./Login";
import { handleInitData } from '../actions/initialData';

describe("Login", () => {
    it("login component is render", () => {
        const actual = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );
        expect(actual).toBeDefined();
        expect(actual).toMatchSnapshot();
    });

    it('login with invalid password', async () => {
        await store.dispatch(handleInitData());

        const actual = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );

        const username = actual.getByTestId("username");
        const password = actual.getByTestId("password");
        const submitBtn = actual.getByTestId("submit");
        expect(username).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();

        fireEvent.change(username, { target: { value: 'sarahedo' } });
        fireEvent.change(password, { target: { value: 'invalidpassword' } });
        expect(username.value).toBe("sarahedo");
        expect(password.value).toBe("invalidpassword");
        fireEvent.click(submitBtn);
        expect(username.value).toBe("");
        expect(password.value).toBe("");
    });
});