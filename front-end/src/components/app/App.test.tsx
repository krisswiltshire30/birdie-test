import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as nock from 'nock';
import * as waitUntil from 'async-wait-until';
import { shallow } from 'enzyme';
import App from './App';
import store from '@App/store';


describe('app', () => {
  beforeAll(() => {
    nock('/events')
      .reply(200, {
        id: 1234,
      });
  });

  it('Fetches data from databse', async (done) => {
    const root = shallow(<Weather location="london" />);
    let componentsWeather = {};
    // We wait until the state has a weather summary, but we
    // don't care yet about the content.
    await waitUntil(() => root.state('weather').summary !== null);
    // It is better to have the expectation here and not inside
    // the waitUntil condition.
    expect(componentsWeather.summary).toEqual('sunny');
    done();
  });

  // it('renders without crashing', async (done) => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //     ,
  //     div);
  // });
});


