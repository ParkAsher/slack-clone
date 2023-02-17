import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './httpException.filter';

declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 3000;

    // class-validator
    app.useGlobalPipes(new ValidationPipe());
    // 모든 컨트롤러에서 발생하는 http exception을 걸러준다.
    app.useGlobalFilters(new HttpExceptionFilter());

    /* swagger */
    const config = new DocumentBuilder()
        .setTitle('Sleact API')
        .setDescription('Sleact 개발을 위한 API 문서입니다.')
        .setVersion('1.0')
        .addCookieAuth('connect.sid')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(port);
    console.log(`listening on port ${port}`);

    if (module.hot) {
        module.hot.accecpt();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
