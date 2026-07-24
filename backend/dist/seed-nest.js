"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./src/app.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./src/entities/user.entity");
const bcrypt = require("bcrypt");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const userRepository = app.get((0, typeorm_1.getRepositoryToken)(user_entity_1.User));
    const password = await bcrypt.hash('password123', 10);
    const users = [
        { name: 'Admin User', email: 'admin@abu-yahya.com', role: 'admin', password, isEmailVerified: true },
        { name: 'Tutor User', email: 'tutor@abu-yahya.com', role: 'tutor', password, isEmailVerified: true },
        { name: 'Student User', email: 'student@abu-yahya.com', role: 'student', password, isEmailVerified: true }
    ];
    for (const u of users) {
        const existing = await userRepository.findOne({ where: { email: u.email } });
        if (!existing) {
            await userRepository.save(userRepository.create(u));
        }
        else {
            existing.password = u.password;
            existing.isEmailVerified = u.isEmailVerified;
            await userRepository.save(existing);
        }
    }
    console.log('Seed completed with passwords and verified emails.');
    await app.close();
}
bootstrap();
//# sourceMappingURL=seed-nest.js.map