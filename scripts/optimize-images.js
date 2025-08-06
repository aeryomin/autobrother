const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const optimizedDir = path.join(__dirname, '../public/images/optimized');

// Создаем папку для оптимизированных изображений
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Список больших изображений для оптимизации
const imagesToOptimize = [
  'bg-image-05.png',
  'bg-image-06.png', 
  'bg-image-07.png',
  'bg-services.png'
];

async function optimizeImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const outputPath = path.join(optimizedDir, filename);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`Файл ${filename} не найден`);
    return;
  }

  try {
    await sharp(inputPath)
      .resize(1920, 1080, { 
        fit: 'cover',
        withoutEnlargement: true 
      })
      .webp({ quality: 80 })
      .toFile(outputPath.replace('.png', '.webp'));
    
    console.log(`✅ Оптимизирован: ${filename} -> ${filename.replace('.png', '.webp')}`);
  } catch (error) {
    console.error(`❌ Ошибка оптимизации ${filename}:`, error);
  }
}

async function optimizeAll() {
  console.log('🚀 Начинаю оптимизацию изображений...');
  
  for (const image of imagesToOptimize) {
    await optimizeImage(image);
  }
  
  console.log('✅ Оптимизация завершена!');
}

optimizeAll(); 