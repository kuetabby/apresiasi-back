import { Test, TestingModule } from '@nestjs/testing';
import { TipReceivedService } from './tip-received.service';

describe('TipReceivedService', () => {
  let service: TipReceivedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipReceivedService],
    }).compile();

    service = module.get<TipReceivedService>(TipReceivedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
