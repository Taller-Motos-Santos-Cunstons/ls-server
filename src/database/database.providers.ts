import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get<string>('HOST'),
        port: configService.get<number>('PORT', 3306),
        username: configService.get<string>('USERNAME'),
        password: configService.get<string>('PASSWORD'),
        database: configService.get<string>('DATABASE'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      console.log(process.env.USERNAME);

      try {
        await dataSource.initialize();
        console.log('Conexión exitosa a la base de datos.');
        return dataSource;
      } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
        throw error;
      }
    },
  },
];
