import lighthouse from '@lighthouse-web3/sdk'
import path from 'path';



export async function POST() {
  const apiKey = process.env.DATA_API_KEY;

  // Check if apiKey is defined
  if (!apiKey) {
    console.error('API key is undefined');
    return;
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'wow.jpg');

    const uploadResponse = await lighthouse.upload(filePath, apiKey);
    console.log(uploadResponse);
     return Response.json({ uploadResponse })
  } catch (error) {
    console.error('Error uploading file:', error);
    return Response.json({error})
  }
}
