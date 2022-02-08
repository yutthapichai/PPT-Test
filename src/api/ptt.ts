import axios from 'axios';
import { parse } from 'node-html-parser';
export const currentPrice = async () => {
  try {
    const response = await axios.get(
      'http://gasprice.kapook.com/gasprice.php#ptt',
    );

    const root = parse(response.data);
    return root.querySelector('.ptt').toString();
  } catch (error) {
    throw error;
  }
};

// currentPrice().then((result) => console.log(result));
