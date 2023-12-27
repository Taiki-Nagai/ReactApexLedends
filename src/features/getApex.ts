import axios from 'axios';

const getApex = async () => {
  const API_KEY = '01258f5d-d7c4-4581-95b8-212ea11e6d87';
  const baseURL =
    'https://public-api.tracker.gg/v2/apex/standard/profile/psn/king-of-vegita';

  try {
    const response = await axios
      .get(
        'https://public-api.tracker.gg/v2/apex/standard/profile/origin/vegita_saikyo',
        { headers: { 'TRN-Api-Key': '01258f5d-d7c4-4581-95b8-212ea11e6d87' } }
      )
      .then((results) => {
        console.log('実行結果' + results.data.data);
      });
    return response;
  } catch (error) {
    console.log('失敗');
    console.log(error);
  }
};

export default getApex;
