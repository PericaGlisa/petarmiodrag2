import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateFavicon() {
  try {
    // Read the source PNG
    const sourceImage = './public/icons/icon-192x192.png';
    
    // Create 16x16 and 32x32 versions
    const sizes = [16, 32];
    const buffers = await Promise.all(
      sizes.map(size => 
        sharp(sourceImage)
          .resize(size, size)
          .toFormat('png')
          .toBuffer()
      )
    );

    // Write the ICO file
    const outputPath = './public/favicon.ico';
    
    // ICO header
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // Reserved
    header.writeUInt16LE(1, 2); // ICO type
    header.writeUInt16LE(sizes.length, 4); // Number of images

    // Write the file
    const fd = fs.openSync(outputPath, 'w');
    fs.writeSync(fd, header);

    let offset = 6 + (sizes.length * 16); // Header size + directory entries size

    // Write directory entries
    for (let i = 0; i < sizes.length; i++) {
      const size = sizes[i];
      const buffer = buffers[i];
      const entry = Buffer.alloc(16);
      
      entry.writeUInt8(size, 0); // Width
      entry.writeUInt8(size, 1); // Height
      entry.writeUInt8(0, 2); // Color palette
      entry.writeUInt8(0, 3); // Reserved
      entry.writeUInt16LE(1, 4); // Color planes
      entry.writeUInt16LE(32, 6); // Bits per pixel
      entry.writeUInt32LE(buffer.length, 8); // Image size
      entry.writeUInt32LE(offset, 12); // Image offset
      
      fs.writeSync(fd, entry);
      offset += buffer.length;
    }

    // Write image data
    for (const buffer of buffers) {
      fs.writeSync(fd, buffer);
    }

    fs.closeSync(fd);
    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();
