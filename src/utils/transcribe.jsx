import { AssemblyAI } from 'assemblyai';
import conf from '../conf/conf';

const client = new AssemblyAI({
  apiKey: conf.assemblykey,
});

const FILE_URL =
  'https://assembly.ai/sports_injuries.mp3';


const transcribe = async (FILE_URL) => {
    const data = {
        audio: FILE_URL
      }
    const transcript = await client.transcripts.transcribe(data);
    console.log(transcript.text);
}

export default transcribe;
