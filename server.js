const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Serve static files
app.use(express.static(path.join(__dirname)));

// Handle image conversion
app.post('/convert', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded');
        }

        const targetFormat = req.body.format;
        if (!['jpg', 'png'].includes(targetFormat)) {
            return res.status(400).send('Invalid target format');
        }

        let image = sharp(req.file.buffer);

        // Convert to the target format
        if (targetFormat === 'jpg') {
            image = image.jpeg({ quality: 90 });
        } else {
            image = image.png();
        }

        // Convert and send the image
        const buffer = await image.toBuffer();
        res.set('Content-Type', `image/${targetFormat}`);
        res.send(buffer);
    } catch (error) {
        console.error('Conversion error:', error);
        res.status(500).send('Error converting image');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 