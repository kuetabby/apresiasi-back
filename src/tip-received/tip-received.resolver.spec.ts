import { Test, TestingModule } from '@nestjs/testing';
import { TipReceivedResolver } from './tip-received.resolver';

describe('TipReceivedResolver', () => {
  let resolver: TipReceivedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipReceivedResolver],
    }).compile();

    resolver = module.get<TipReceivedResolver>(TipReceivedResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
