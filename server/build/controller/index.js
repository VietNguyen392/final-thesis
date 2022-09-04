"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeAPI = exports.API = void 0;
var api_1 = require("./api");
Object.defineProperty(exports, "API", { enumerable: true, get: function () { return __importDefault(api_1).default; } });
var timeController_1 = require("./timeController");
Object.defineProperty(exports, "timeAPI", { enumerable: true, get: function () { return __importDefault(timeController_1).default; } });
