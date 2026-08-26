import { fal } from '@fal-ai/client';

if (!process.env.FAL_KEY) {
  console.error('Set FAL_KEY before running this script.');
  process.exit(1);
}

fal.config({ credentials: process.env.FAL_KEY });
const result = await fal.subscribe('fal-ai/flux-pro/v1.1', {
  input: {
    prompt: 'Editorial photograph for a consumer-law advertorial: United States Capitol at night under dramatic storm clouds, restrained documentary realism, dark navy palette, red warning-light accents, empty foreground space for headline, no text, no logos, no people, 16:9',
    image_size: 'landscape_16_9',
    num_images: 1,
    safety_tolerance: '2'
  }
});
console.log(result.data?.images?.[0]?.url || result.data);
