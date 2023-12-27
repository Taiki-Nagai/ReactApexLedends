import getApex from '../getApex';
import axios from 'axios';

jest.mock('axios');

describe('getApexのテスト', () => {
  it('apiが正常終了すること', async () => {
    const result = await getApex();
    console.log(result);
  });
});
