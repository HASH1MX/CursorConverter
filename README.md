# Image Format Converter

A simple web application that allows users to convert images between JPG and PNG formats. The application features a modern, user-friendly interface with drag-and-drop functionality and instant image preview.

## Features

- Convert JPG to PNG and PNG to JPG
- Drag and drop file upload
- Image preview before conversion
- Simple and intuitive user interface
- Automatic download of converted images
- High-quality image conversion using Sharp library

## Technologies Used

- Frontend: HTML, CSS, JavaScript (Vanilla)
- Backend: Node.js with Express
- Image Processing: Sharp library
- File Upload: Multer middleware

## Prerequisites

Before running this application, make sure you have:
- Node.js (v14 or higher) installed
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the files
2. Open a terminal in the project directory
3. Install the dependencies:
```bash
npm install
```

## Running the Application

1. Start the server:
```bash
npm start
```

2. Open your web browser and navigate to:
```
http://localhost:3000
```

## Usage

1. Open the application in your web browser
2. Either drag and drop an image file into the dashed box or click to select a file
3. The application will show a preview of your selected image
4. Click the appropriate conversion button:
   - "Convert to PNG" for JPG images
   - "Convert to JPG" for PNG images
5. The converted file will automatically download

## Troubleshooting

If you encounter the error "address already in use :::3000":
1. Find the process using port 3000:
```bash
# On Windows
netstat -ano | findstr :3000
```
2. Kill the process:
```bash
# On Windows (replace PID with the actual process ID)
taskkill /F /PID <PID>
```

## Project Structure

```
.
├── index.html          # Frontend interface
├── server.js           # Express server and conversion logic
├── package.json        # Project dependencies and scripts
└── .gitignore         # Git ignore configuration
```

## Dependencies

- express: ^4.18.2
- multer: ^1.4.5-lts.1
- sharp: ^0.32.6

## License

This project is open source and available under the MIT License. 