# Image Format Converter

A modern web application for converting images between JPG and PNG formats. Built with a sleek, user-friendly interface, this application offers a seamless image conversion experience with real-time preview capabilities and an intuitive drag-and-drop interface.

## Features

- Seamless conversion between JPG and PNG formats
- Modern, responsive user interface
- Interactive drag-and-drop file upload zone
- Real-time image preview with visual feedback
- Automatic file format detection
- Instant download of converted images
- Error handling with user-friendly notifications
- High-quality image conversion using Sharp library
- Cross-browser compatibility

## Technologies Used

- Frontend: HTML5, CSS3, JavaScript (Vanilla)
- Backend: Node.js with Express
- Image Processing: Sharp library
- File Upload: Multer middleware
- Modern UI: Custom CSS with responsive design

## Prerequisites

Before running this application, make sure you have:
- Node.js (v14 or higher) installed
- npm (Node Package Manager)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd image-format-converter
```

2. Install the dependencies:
```bash
npm install
```

### Running the Application

1. Start the server:
```bash
npm start
```

2. Open your web browser and navigate to:
```
http://localhost:3000
```

## Usage

1. Access the application through your web browser
2. Upload an image using one of these methods:
   - Drag and drop an image file into the highlighted drop zone
   - Click the drop zone to open the file selector
3. View the image preview in the interface
4. Select your desired conversion:
   - Use "Convert to PNG" for JPG images
   - Use "Convert to JPG" for PNG images
5. The converted file will automatically download to your default downloads folder

### User Interface Features

- Dynamic drop zone with visual feedback
- Real-time file type validation
- Smooth animations and transitions
- Modern, minimalist aesthetic

## Troubleshooting

### Port Issues
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

### Common Issues
- If the conversion button is disabled, ensure your file is in JPG or PNG format
- For large files, allow a few moments for the conversion to complete
- Check your browser's download settings if files aren't downloading automatically

## Project Structure

```
.
├── index.html          # Frontend interface with modern UI
├── server.js           # Express server and conversion logic
├── package.json        # Project dependencies and scripts
└── .gitignore         # Git ignore configuration
```

## Dependencies

- express: ^4.18.2
- multer: ^1.4.5-lts.1
- sharp: ^0.32.6
- cors: ^2.8.5

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

Created by HASH1MX (hashim8work@gmail.com) 
