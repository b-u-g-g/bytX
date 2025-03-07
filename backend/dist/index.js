"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routers/user"));
const worker_1 = __importDefault(require("./routers/worker"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// postgresql://neondb_owner:npg_MUr3Fo8RsKTf@ep-falling-tree-a8qtsj0c-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
app.use("/v1/user", user_1.default);
app.use("/v1/worker", worker_1.default);
app.listen(3000);
