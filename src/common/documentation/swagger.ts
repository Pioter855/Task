import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupDocumentation = (app): void => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { name, version, description } = require('../../../package.json');

  const config = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .addTag('task')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
