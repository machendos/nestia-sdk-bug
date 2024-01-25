import { INestiaConfig } from "@nestia/sdk";
import { NestFactory } from "@nestjs/core";
import {AppModule} from "./src/app.module";


const NESTIA_CONFIG: INestiaConfig = {
    input: async () => {
        const app = await NestFactory.create(AppModule);
        // app.setGlobalPrefix("api");
        // app.enableVersioning({
        //     type: VersioningType.URI,
        //     prefix: "v",
        // })
        return app;
    },
    output: "src/api",
    distribute: "packages/api",
};
export default NESTIA_CONFIG;