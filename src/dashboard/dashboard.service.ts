import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// import { DashboardDTO } from './dashboard.dto';
import { DashboardEntity } from './dashboard.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(DashboardEntity)
    private dashboardRepository: Repository<DashboardEntity>,
  ) {}

  //   create(data: DashboardDTO): Promise<DashboardEntity> {
  //     return this.dashboardRepository.create({ ...data }).save();
  //   }

  findAll(): Promise<DashboardEntity[]> {
    return this.dashboardRepository.find();
  }

  findOneById(id: string): Promise<DashboardEntity> {
    return this.dashboardRepository.findOne({ id });
  }

  findTipReceivedByOwnerId(id: string): Promise<DashboardEntity[]> {
    return this.dashboardRepository.find({ id });
  }
}
