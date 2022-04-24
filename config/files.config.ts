import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { FileUtil } from "src/common/util/file.util";

export const fileUploadConfig = MulterModule.register({
    storage: diskStorage({
        destination: "./public/uploads",
        filename: FileUtil.editFileName,
    }),
});