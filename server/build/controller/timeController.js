"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schedule_1 = __importDefault(require("../models/Schedule"));
const timeAPI = {
    createTime: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { time, date, doctorID } = req.body;
            const time_id = yield Schedule_1.default.create({
                time,
                date,
                doctorID
            });
            res.send(time_id);
        }
        catch (e) {
            res.status(500).send({ msg: "Internal Server Error" });
            console.log(e);
        }
    })
};
exports.default = timeAPI;
