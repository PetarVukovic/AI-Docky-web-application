# <YOUR_APP_NAME>

This project is based on [OpenSaas](https://opensaas.sh) template and consists of three main dirs:
1. `app` - Your web app, built with [Wasp](https://wasp-lang.dev).
2. `e2e-tests` - [Playwright](https://playwright.dev/) tests for your Wasp web app.
3. `blog` - Your blog / docs, built with [Astro](https://docs.astro.build) based on [Starlight](https://starlight.astro.build/) template.

# AI-Powered Custom Document Chatbot

This repository contains a web application that allows users to interact with a chatbot trained using their own custom documents (Excel sheets, PDFs, Word documents, etc.). The chatbot leverages advanced AI to answer questions and provide insights based on the uploaded documents, making it a powerful tool for automating document-based workflows.

## 🛠️ Tech Stack

- **Frontend**: React (for the user interface)
- **Backend**: FastAPI (for API and business logic)
- **AI Framework**: LlamaIndex (for document indexing and querying)
- **Vector Store**: Quadrant (for efficient vector-based searches)
- **AI Model**: ChatGPT-4.0 Mini (for natural language understanding and conversation)

## 🚀 Features

- **Custom Document Uploads**: Upload documents such as PDFs, Word files, Excel sheets, and more to train the chatbot with domain-specific knowledge.
- **Document-Based Q&A**: The chatbot provides intelligent answers based on the content of uploaded documents, making it easy to retrieve key information.
- **Persistent Storage**: Once documents are uploaded and indexed, they are permanently linked to the user’s project, allowing the chatbot to maintain context across sessions.
- **Seamless User Experience**: The application is designed for ease of use, allowing users to quickly interact with the AI without needing to re-upload documents each time.

