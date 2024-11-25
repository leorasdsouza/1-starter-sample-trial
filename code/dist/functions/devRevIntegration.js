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
exports.fetchSprintData = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
// Function to fetch tasks or issues from DevRev
const fetchSprintData = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://api.devrev.ai/dev-users.self'; // Modify this to fetch sprint-related data (tasks/issues)
    try {
        const response = yield axios_1.default.get(url, {
            headers: {
                Authorization: `Bearer ${config_1.config.DEVREV_PAT}`,
            },
        });
        return response.data; // Process and return the sprint-related data
    }
    catch (error) {
        console.error('Error fetching DevRev data:', error);
        throw error;
    }
});
exports.fetchSprintData = fetchSprintData;
