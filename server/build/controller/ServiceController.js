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
const Service_1 = __importDefault(require("../models/Service"));
const ServiceController = {
    createService: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { service_name, service_price } = req.body;
            const newService = yield Service_1.default.create(Object.assign({}, req.body));
            if (newService) {
                res.status(200).json({
                    code: 0,
                    data: newService
                });
            }
            else {
                res.status(400).send({ msg: 'error' });
            }
        }
        catch (error) {
            res.status(500).send({ msg: 'Server error' });
        }
    }),
    getService: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield Service_1.default.find().sort('-createdAt');
            if (!data)
                res.status(404).send({ msg: 'not found' });
            res.json({ data });
        }
        catch (error) {
            return res.status(500).send({ msg: error.message });
        }
    }),
    editService: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { service_name, service_price } = req.body;
            const updateTest = yield Service_1.default.findOneAndUpdate({ _id: req.params.id }, Object.assign({}, req.body), { new: true });
            res.json({ msg: 'update success', updateTest });
        }
        catch (err) {
            return res.status(500).send({ msg: 'Sever error' });
        }
    }),
    deleteService: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const service = yield Service_1.default.findByIdAndDelete(req.params.id);
            if (!service)
                return res.status(404).send({ msg: 'Service not found' });
            res.json({ msg: 'delete success' });
        }
        catch (error) {
            res.status(500).json({ msg: 'Server error' });
        }
    }),
};
exports.default = ServiceController;
