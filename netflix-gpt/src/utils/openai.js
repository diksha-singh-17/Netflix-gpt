import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

export const openai = new OpenAI({
  apiKey: process.env[OPEN_AI_KEY], // This is the default and can be omitted
});
