import { render } from '@testing-library/react';
import App from './App';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';


describe('Test App', () => {
  it("test render component", () => {
    const actualComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(actualComponent).toMatchSnapshot();
  });
});
