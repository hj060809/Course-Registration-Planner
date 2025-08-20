import { Test, TestingModule } from '@nestjs/testing';
import { MajorResolver } from './major.resolver';

describe('MajorResolver', () => {
  let resolver: MajorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MajorResolver],
    }).compile();

    resolver = module.get<MajorResolver>(MajorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
