// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime

// const { GoogleGenAI } = require('@google/genai');

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
//   });

//   const tools = [
//     {
//       googleSearch: {}
//     },
//   ];

//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     tools,
//   };

//   const model = 'gemini-2.5-flash';

//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration:1 hours, NoOf Chapters:5, in JSON format
//           `,
//         },
//       ],
//     },
//     {
//       role: 'model',
//       parts: [
//         {
//           text: `**Defining the JSON Structure**

// I'm currently crafting the basic framework for the JSON course tutorial. I've decided on a Python course for beginners.  The structure now includes the course name, description, category, topic, level, total duration, and number of chapters. I'm focusing on defining the chapter structure next, incorporating names, descriptions, and durations.

// **Constructing Chapter Details**

// I've finalized the chapter structure for the JSON tutorial example. I've designed a beginner-level Python course to showcase it, ensuring it fits the specified constraints. The course includes five chapters: an introduction, variables and data types, operators and expressions, control flow, and functions. Each chapter's name, description, and duration are now defined, totaling a one-hour course.
//           `,
//         },
//         {
//           text: `\`\`\`json
// {
//   "Course Name": "Python Basics for Absolute Beginners",
//   "Description": "This course provides a foundational introduction to Python programming, designed for individuals with no prior coding experience. You will learn the core concepts of Python, enabling you to write simple scripts and understand fundamental programming principles. By the end of this tutorial, you'll be ready to explore more advanced topics in Python.",
//   "Category": "Programming",
//   "Topic": "Python",
//   "Level": "Basic",
//   "Total Duration": "1 hour",
//   "NoOf Chapters": 5,
//   "Chapters": [
//     {
//       "Chapter Name": "Chapter 1: Introduction to Python",
//       "About": "Learn what Python is, why it's popular, and how to set up your development environment. This chapter covers a brief history, common applications, and the basics of running your first 'Hello, World!' program.",
//       "Duration": "10 minutes"
//     },
//     {
//       "Chapter Name": "Chapter 2: Variables and Data Types",
//       "About": "Explore the fundamental building blocks of data in Python. This chapter covers how to declare variables, understand different data types like integers, floats, strings, and booleans, and perform basic operations on them.",
//       "Duration": "15 minutes"
//     },
//     {
//       "Chapter Name": "Chapter 3: Operators and Expressions",
//       "About": "Dive into the various types of operators available in Python, including arithmetic, comparison, logical, and assignment operators. Learn how to combine them to form expressions and understand operator precedence.",
//       "Duration": "10 minutes"
//     },
//     {
//       "Chapter Name": "Chapter 4: Control Flow (Conditional Statements)",
//       "About": "Understand how to control the flow of your program using conditional statements. This chapter covers 'if', 'elif', and 'else' statements, enabling your programs to make decisions based on specific conditions.",
//       "Duration": "15 minutes"
//     },
//     {
//       "Chapter Name": "Chapter 5: Functions: Reusable Code Blocks",
//       "About": "Learn the concept of functions to write organized and reusable code. This chapter explains how to define and call your own functions, understand parameters, and return values, setting the stage for more complex program structures.",
//       "Duration": "10 minutes"
//     }
//   ]
// }
// \`\`\``,
//         },
//       ],
//     },
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });

//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();







/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const GenerateCourseLayout_AI = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration:1 hours, NoOf Chapters:5 , in JSON format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"course\": {\n    \"name\": \"Introduction to Python Programming\",\n    \"description\": \"This course provides a comprehensive introduction to the Python programming language, designed for beginners with no prior programming experience. You will learn the fundamental concepts of Python syntax, data types, control flow, and functions. By the end of this course, you will be able to write basic Python programs and solve simple programming problems.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter introduces the Python programming language, its history, features, and why it is a popular choice for beginners and experienced programmers alike.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Basic Syntax and Data Types\",\n        \"about\": \"This chapter covers the fundamental syntax of Python, including variables, data types (integers, floats, strings, booleans), operators, and basic input/output operations.\",\n        \"duration\": \"25 minutes\"\n      },\n      {\n        \"name\": \"Control Flow Statements\",\n        \"about\": \"This chapter explores conditional statements (if-else, elif), loops (for, while), and how to control the flow of execution in your Python programs.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"This chapter introduces functions as reusable blocks of code and explains how to define, call, and use functions in Python. It also covers importing and using modules to extend your Python programs.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Practice Exercises and Project\",\n        \"about\": \"This chapter provides hands-on practice exercises and a small project to solidify your understanding of the concepts learned in the previous chapters.\",\n        \"duration\": \"15 minutes\"\n      }\n    ],\n    \"category\": \"Programming\",\n    \"topic\": \"Python\",\n    \"level\": \"Basic\",\n    \"duration\": \"1 hour\",\n    \"numberOfChapters\": 5\n  }\n}\n```"},
        ],
      },
    ],
  });

  export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "\nExplain the concept in Detail on Topic: Python Basic, Chapter:Variables and Data Types, in JSON Format with list of array with field as title, explanation on give chapter in detail , Code Example(Code field in <precode> format) if applicable\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"Introduction to Variables\",\n    \"explanation\": \"Variables are like containers that hold data in your Python program. They act as labels for storing information you want to use, modify, or refer to later. Think of them as named boxes where you can put different things inside.\",\n    \"codeExample\": \"<precode>\\n# Assigning a value to a variable\\nname = \\\"Alice\\\"\\n\\n# Accessing the value\\nprint(name)  # Output: Alice\\n</precode>\"\n  },\n  {\n    \"title\": \"Variable Naming Rules\",\n    \"explanation\": \"When creating variables, you need to follow these rules:\\n\\n* **Start with a letter or underscore:**  Variable names cannot start with a number. \\n* **Use letters, numbers, and underscores:**  You can combine these characters but no spaces or special symbols.\\n* **Case-sensitive:** Python distinguishes between uppercase and lowercase letters.  `myVariable` is different from `MyVariable`.\\n* **Avoid using Python keywords:** These are reserved words like `if`, `else`, `for`, `while`, etc., that have special meaning in Python.\\n\\nChoosing descriptive names helps make your code more readable.\",\n    \"codeExample\": \"<precode>\\n# Valid variable names\\nmy_variable = 10\\n_age = 25\\nfirstName = \\\"Bob\\\"\\n\\n# Invalid variable names\\n1st_name = \\\"John\\\"  # Starts with a number\\nmy-variable = 5  # Contains a hyphen\\n</precode>\"\n  },\n  {\n    \"title\": \"Data Types\",\n    \"explanation\": \"Data types define the kind of information a variable can hold. Python has several built-in data types:\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Integers (int)\",\n    \"explanation\": \"Integers represent whole numbers without decimal points. Examples: 10, -5, 0, 2023.\",\n    \"codeExample\": \"<precode>\\nnumber = 100\\nprint(type(number))  # Output: <class 'int'>\\n</precode>\"\n  },\n  {\n    \"title\": \"Floats (float)\",\n    \"explanation\": \"Floats represent numbers with decimal points. Examples: 3.14, -2.5, 1.0.\",\n    \"codeExample\": \"<precode>\\npi = 3.14159\\nprint(type(pi))  # Output: <class 'float'>\\n</precode>\"\n  },\n  {\n    \"title\": \"Strings (str)\",\n    \"explanation\": \"Strings are sequences of characters enclosed in single quotes (') or double quotes (\\\"). Examples: \\\"Hello\\\", 'Python', '123' (even though it looks like a number, it's a string because it's enclosed in quotes).\",\n    \"codeExample\": \"<precode>\\nmessage = \\\"Hello, World!\\\"\\nprint(type(message))  # Output: <class 'str'>\\n</precode>\"\n  },\n  {\n    \"title\": \"Booleans (bool)\",\n    \"explanation\": \"Booleans represent truth values, either `True` or `False`. They are used in conditions and logical operations.\",\n    \"codeExample\": \"<precode>\\nis_active = True\\nprint(type(is_active))  # Output: <class 'bool'>\\n</precode>\"\n  },\n  {\n    \"title\": \"Lists (list)\",\n    \"explanation\": \"Lists are ordered collections of items enclosed in square brackets (`[]`). Items can be of different data types. You can access individual items by their index (starting from 0).\",\n    \"codeExample\": \"<precode>\\nfruits = [\\\"apple\\\", \\\"banana\\\", \\\"cherry\\\"]\\nprint(fruits[0])  # Output: apple\\n</precode>\"\n  },\n  {\n    \"title\": \"Tuples (tuple)\",\n    \"explanation\": \"Tuples are similar to lists but are immutable (cannot be changed after creation). They are enclosed in parentheses `()`. Tuples are useful for representing fixed data sets.\",\n    \"codeExample\": \"<precode>\\ncoordinates = (10, 20)\\nprint(coordinates[0])  # Output: 10\\n</precode>\"\n  },\n  {\n    \"title\": \"Sets (set)\",\n    \"explanation\": \"Sets are unordered collections of unique items enclosed in curly braces `{}`. Sets are used for membership testing and eliminating duplicate values.\",\n    \"codeExample\": \"<precode>\\nunique_numbers = {1, 2, 3, 2, 1}  # Duplicates are removed\\nprint(unique_numbers)  # Output: {1, 2, 3}\\n</precode>\"\n  },\n  {\n    \"title\": \"Dictionaries (dict)\",\n    \"explanation\": \"Dictionaries are unordered collections of key-value pairs. Keys are unique and must be immutable data types (like strings, numbers, or tuples). Values can be any data type.\",\n    \"codeExample\": \"<precode>\\nuser = {\\\"name\\\": \\\"Alice\\\", \\\"age\\\": 30, \\\"city\\\": \\\"New York\\\"}\\nprint(user[\\\"name\\\"])  # Output: Alice\\n</precode>\"\n  },\n  {\n    \"title\": \"Data Type Conversion\",\n    \"explanation\": \"You can convert data from one type to another using built-in functions like `int()`, `float()`, `str()`, etc.\",\n    \"codeExample\": \"<precode>\\nnumber_str = \\\"123\\\"\\nnumber_int = int(number_str)\\nprint(type(number_int))  # Output: <class 'int'>\\n</precode>\"\n  }\n]\n```"},
          ],
        },
      ],
    });


  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());
