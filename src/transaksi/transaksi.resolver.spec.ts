import { Test, TestingModule } from '@nestjs/testing';
import { TransaksiResolver } from './transaksi.resolver';

describe('TransaksiResolver', () => {
  let resolver: TransaksiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransaksiResolver],
    }).compile();

    resolver = module.get<TransaksiResolver>(TransaksiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
