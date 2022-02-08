import { Injectable } from '@nestjs/common';
import { currentPrice } from '../api/ptt';
@Injectable()
export class PriceService {
  async findPrice() {
    return await currentPrice();
  }
}
