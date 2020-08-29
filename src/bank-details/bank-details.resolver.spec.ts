import { Test, TestingModule } from '@nestjs/testing';
import { BankDetailsResolver } from './bank-details.resolver';

describe('BankDetailsResolver', () => {
  let resolver: BankDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankDetailsResolver],
    }).compile();

    resolver = module.get<BankDetailsResolver>(BankDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
