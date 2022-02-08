import { Controller, Get } from '@nestjs/common';
import { PriceService } from './price.service';

@Controller('GetListOfPriceData')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  // @UseGuards(AuthBasicGuard)
  async getPrice() {
    return await this.priceService.findPrice();
  }
}
