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
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kuetabby',
      database: 'apresiasi',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      logging: false,
    }),
    UserModule,
    // TipReceivedModule,
    PostModule,
    // BalanceModule,
    BankDetailsModule,
    GenderModule,
    TransaksiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
