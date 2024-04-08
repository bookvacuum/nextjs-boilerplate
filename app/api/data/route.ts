import lighthouse from '@lighthouse-web3/sdk'


export async function POST() {
  const apiKey = process.env.DATA_API_KEY;

  // Check if apiKey is defined
  if (!apiKey) {
    console.error('API key is undefined');
    return;
  }

  try {
    const uploadResponse = await lighthouse.upload('/public/wow.jpg', apiKey);
    console.log(uploadResponse);
     return Response.json({ uploadResponse })
  } catch (error) {
    console.error('Error uploading file:', error);
    return Response.json({error})
  }
}
