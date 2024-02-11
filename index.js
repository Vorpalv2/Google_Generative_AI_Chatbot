import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyAgedioFpkG3dZMIfFSUAc3wd3UTrd3MAg";

const getData = async (userQuestion) => {
  const AI = new GoogleGenerativeAI(API_KEY);
  const model = AI.getGenerativeModel({ model: "gemini-pro" });

  let Question = userQuestion;

  let generateAnswer = await model.generateContent(Question);
  let response = await generateAnswer.response;
  let text = response.text();

  return text;
};

(async () => {
  let data = await getData("Whats the capital of India");
  console.log(data);
})();
