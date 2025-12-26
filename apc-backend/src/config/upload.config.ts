import { registerAs } from '@nestjs/config';

/**
 * Cấu hình upload và xử lý file
 */
export default registerAs('upload', () => {
  // Parse allowed image types từ environment variable
  const allowedImageTypes = process.env.ALLOWED_IMAGE_TYPES
    ? process.env.ALLOWED_IMAGE_TYPES.split(',').map((type) => type.trim())
    : ['jpg', 'jpeg', 'png', 'gif', 'webp'];

  // Parse allowed video types từ environment variable
  const allowedVideoTypes = process.env.ALLOWED_VIDEO_TYPES
    ? process.env.ALLOWED_VIDEO_TYPES.split(',').map((type) => type.trim())
    : ['mp4', 'avi', 'mov', 'wmv'];

  return {
    path: process.env.UPLOAD_PATH || './uploads',
    publicUrl: process.env.UPLOAD_PUBLIC_URL || '/uploads',
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE ?? '10485760', 10), // 10MB
    maxImageSize: parseInt(process.env.MAX_IMAGE_SIZE ?? '5242880', 10), // 5MB
    maxVideoSize: parseInt(process.env.MAX_VIDEO_SIZE ?? '104857600', 10), // 100MB
    allowedImageTypes,
    allowedVideoTypes,
    autoProcessImages: process.env.AUTO_PROCESS_IMAGES === 'true',
    autoProcessVideos: process.env.AUTO_PROCESS_VIDEOS === 'true',
    // Directories structure
    directories: {
      products: 'products',
      news: 'news',
      employees: 'employees',
      videos: 'videos',
    },
  };
});
