import { Resolver, Query, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';

import { DashboardEntity } from './dashboard.entity';
import { DashboardDTO } from './dashboard.dto';
import { DashboardService } from './dashboard.service';

@Resolver(() => DashboardEntity)
export class DashboardResolver {
  constructor(
    @Inject(DashboardService)
    private dashboardService: DashboardService,
  ) {}

  @Query(() => [DashboardDTO])
  async getAllDashboard(): Promise<DashboardEntity[]> {
    return await this.dashboardService.findAll();
  }

  @Query(() => DashboardDTO)
  async getDashboard(@Args('id') id: string): Promise<DashboardEntity> {
    return this.dashboardService.findOneById(id);
  }
}
