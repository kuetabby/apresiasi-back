import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';
// import { TipReceivedModule } from './tip-received/tip-received.module';
import { PostModule } from './post/post.module';
// import { BalanceModule } from './balance/balance.module';
import { BankDetailsModule } from './bank-details/bank-details.module';
import { GenderModule } from './gender/gender.module';
import { TransaksiModule } from './transaksi/transaksi.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
      cors: {
        origin: '*',
        credentials: true,
      },
      context: ({ req }) => ({ headers: req.headers }),
    }),
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'kuetabby',
      // database: 'apresiasi',
      entities: ['dist/**/*.entity.{js,ts}'],
      // synchronize: true,
      // logging: false,
      type: 'postgres',
      host: 'ec2-184-73-209-230.compute-1.amazonaws.com',
      database: 'd47e918nb6of92',
      username: 'rllizxndswhdvu',
      password:
        '221a5706558f9ba624310cef2b9a56e0dedf32f28df8744b3cdeca8b4cb0c6a5',
      port: 5432,
      // entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    UserModule,
    // TipReceivedModule,
    PostModule,
    // BalanceModule,
    BankDetailsModule,
    GenderModule,
    TransaksiModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
