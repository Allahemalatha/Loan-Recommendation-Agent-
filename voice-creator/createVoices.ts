// // // import * as XLSX from 'xlsx';
// // // import axios from 'axios';
// // // import FormData from 'form-data';

// // // // ─────────────────────────────────────────
// // // const USERNAME = 'superadmin@example.com';
// // // const PASSWORD = 'Complicated@2026';
// // // const API_BASE = 'https://router.callohm.com';
// // // // ─────────────────────────────────────────

// // // // STEP 1 — Login and get token
// // // async function getToken(): Promise<string> {
// // //   const formData = new FormData();
// // //   formData.append('username', USERNAME);
// // //   formData.append('password', PASSWORD);
// // //   formData.append('grant_type', 'password');

// // //   const response = await axios.post(
// // //     `${API_BASE}/auth/token`,
// // //     formData,
// // //     { headers: formData.getHeaders() }
// // //   );

// // //   const token = response.data.access_token;
// // //   console.log('✅ Login successful! Token received.');
// // //   return token;
// // // }

// // // // STEP 2 — Read Excel file
// // // function readExcel(): any[] {
// // //   const workbook = XLSX.readFile('elevenlabsvoicedetails.xlsx');

// // //   const sheetName = 'Sheet2';
// // //   const sheet = workbook.Sheets[sheetName];

// // //   if (!sheet) {
// // //     console.log('❌ Sheet "Eleven Labs Voice" not found!');
// // //     console.log('Available sheets:', workbook.SheetNames);
// // //     process.exit(1);
// // //   }

// // //   const rows = XLSX.utils.sheet_to_json(sheet);
// // //   console.log(`✅ Found ${rows.length} voices in Excel!`);
// // //   return rows;
// // // }

// // // // STEP 3 — Create one voice
// // // async function createVoice(token: string, row: any): Promise<void> {
// // //   const formData = new FormData();
// // //   formData.append('elevenlabs_voice_id', row['Elevenlabs Voice ID'] || '');
// // // //   formData.append('name', row['Purview Voice Name'] || '');
// // //   formData.append('name', row['Voice name'] || '');
// // //   formData.append('language', row['Language'] || '');
// // //   formData.append('gender', row['Gender'] || '');

// // //   try {
// // //     const response = await axios.post(
// // //       `${API_BASE}/voices/`,
// // //       formData,
// // //       {
// // //         headers: {
// // //           ...formData.getHeaders(),
// // //           Authorization: `Bearer ${token}`
// // //         }
// // //       }
// // //     );
// // //     console.log(`✅ Created voice: ${row['Voice name']}`);
// // //   } catch (error: any) {
// // //     console.log(`❌ Failed: ${row['Voice name']} — ${error.response?.data?.detail || error.message}`);
// // //   }
// // // }

// // // // MAIN — Run everything
// // // async function main() {
// // //   console.log('🚀 Starting Voice Creator...');
// // //   console.log('─────────────────────────────');

// // //   // Step 1 — Login
// // //   let token: string;
// // //   try {
// // //     token = await getToken();
// // //   } catch (error: any) {
// // //     console.log('❌ Login failed! Check your username and password.');
// // //     console.log(error.response?.data || error.message);
// // //     return;
// // //   }

// // //   // Step 2 — Read Excel
// // //   const voices = readExcel();

// // //   // Step 3 — Create each voice
// // //   console.log('─────────────────────────────');
// // //   console.log('📝 Creating voices...');
// // //   console.log('─────────────────────────────');

// // //   for (let i = 0; i < voices.length; i++) {
// // //     const voice = voices[i];
// // //     console.log(`[${i + 1}/${voices.length}] Processing: ${voice['Voice name']}`);
// // //     await createVoice(token, voice);a

// // //     // Small delay between requests
// // //     await new Promise(resolve => setTimeout(resolve, 500));
// // //   }

// // //   console.log('─────────────────────────────');
// // //   console.log('🎉 All done!');
// // // }

// // // main();

// // import * as XLSX from 'xlsx';
// // import axios from 'axios';
// // import FormData from 'form-data';

// // const USERNAME = 'superadmin@example.com';
// // const PASSWORD = 'Complicated@2026';
// // const API_BASE = 'https://router.callohm.com';

// // async function getToken(): Promise<string> {
// //   const formData = new FormData();
// //   formData.append('username', USERNAME);
// //   formData.append('password', PASSWORD);
// //   formData.append('grant_type', 'password');

// //   const response = await axios.post(
// //     `${API_BASE}/auth/token`,
// //     formData,
// //     { headers: formData.getHeaders() }
// //   );

// //   console.log('✅ Login successful! Token received.');
// //   return response.data.access_token;
// // }

// // function readExcel(): any[] {
// //   const workbook = XLSX.readFile('elevenlabsvoicedetails.xlsx');
// //   const sheetName = 'Sheet2';
// //   const sheet = workbook.Sheets[sheetName];

// //   if (!sheet) {
// //     console.log('❌ Sheet not found!');
// //     console.log('Available sheets:', workbook.SheetNames);
// //     process.exit(1);
// //   }

// //   const rows = XLSX.utils.sheet_to_json(sheet) as any[];
// //   console.log(`✅ Found ${rows.length} voices in Excel!`);
// //   console.log('📋 Columns found:', Object.keys(rows[0]));
// //   return rows;
// // }

// // async function createVoice(token: string, row: any): Promise<void> {
// //   const voiceName = row['Voice name'] || '';
// //   const elevenLabsId = row['ElevenLabs Voice ID'] || '';
// //   const language = row['Language'] || '';
// //   const gender = row['Gender'] || '';

// //   console.log(`   → ID: ${elevenLabsId}`);
// // //   console.log(`   → Name: ${voiceName}`);
// //   console.log(`   → Language: ${language}`);
// //   console.log(`   → Gender: ${gender}`);

// //   const formData = new FormData();
// //   formData.append('elevenlabs_voice_id', elevenLabsId);
// //   formData.append('name', voiceName);
// //   formData.append('language', language);
// //   formData.append('gender', gender);

// //   try {
// //     await axios.post(
// //       `${API_BASE}/voices/`,
// //       formData,
// //       {
// //         headers: {
// //           ...formData.getHeaders(),
// //           Authorization: `Bearer ${token}`
// //         }
// //       }
// //     );
// //     console.log(`✅ Created: ${voiceName}`);
// //   } catch (error: any) {
// //     const errMsg = error.response?.data?.detail || error.response?.data || error.message;
// //     console.log(`❌ Failed: ${voiceName} — ${JSON.stringify(errMsg)}`);
// //   }
// // }

// // async function main() {
// //   console.log('🚀 Starting Voice Creator...');
// //   console.log('─────────────────────────────');

// //   let token: string;
// //   try {
// //     token = await getToken();
// //   } catch (error: any) {
// //     console.log('❌ Login failed!');
// //     console.log(error.response?.data || error.message);
// //     return;
// //   }

// //   const voices = readExcel();

// //   console.log('─────────────────────────────');
// //   console.log('📝 Creating voices...');
// //   console.log('─────────────────────────────');

// //   for (let i = 0; i < voices.length; i++) {
// //     const voice = voices[i];
// //     console.log(`[${i + 1}/${voices.length}] Processing: ${voice['Voice name']}`);
// //     await createVoice(token, voice);
// //     await new Promise(resolve => setTimeout(resolve, 500));
// //   }

// //   console.log('─────────────────────────────');
// //   console.log('🎉 All done!');
// // }

// // main();

// import * as XLSX from 'xlsx';
// import axios from 'axios';
// import FormData from 'form-data';

// const USERNAME = 'superadmin@example.com';
// const PASSWORD = 'Complicated@2026';
// const API_BASE = 'https://router.callohm.com';

// async function getToken(): Promise<string> {
//   const formData = new FormData();
//   formData.append('username', USERNAME);
//   formData.append('password', PASSWORD);
//   formData.append('grant_type', 'password');

//   const response = await axios.post(
//     `${API_BASE}/auth/token`,
//     formData,
//     { headers: formData.getHeaders() }
//   );

//   console.log('✅ Login successful! Token received.');
//   return response.data.access_token;
// }

// function readExcel(): any[] {
//   const workbook = XLSX.readFile('elevenlabsvoicedetails.xlsx');
//   const sheetName = 'Sheet2';
//   const sheet = workbook.Sheets[sheetName];

//   if (!sheet) {
//     console.log('❌ Sheet not found!');
//     console.log('Available sheets:', workbook.SheetNames);
//     process.exit(1);
//   }

//   // ✅ Trim all column names and values
//   const rawRows = XLSX.utils.sheet_to_json(sheet) as any[];
//   const rows = rawRows.map((row: any) => {
//     const cleanRow: any = {};
//     Object.keys(row).forEach(key => {
//       const cleanKey = key.trim();
//       cleanRow[cleanKey] = typeof row[key] === 'string' ? row[key].trim() : row[key];
//     });
//     return cleanRow;
//   });

//   console.log(`✅ Found ${rows.length} voices in Excel!`);
//   console.log('📋 Columns found:', Object.keys(rows[0]));
//   return rows;
// }

// // ✅ Convert language name to language code
// function getLanguageCode(language: string): string {
//   const map: { [key: string]: string } = {
//     'kannada': 'kn',
//     'telugu': 'te',
//     'hindi': 'hi',
//     'tamil': 'ta',
//     'english': 'en',
//     'malayalam': 'ml',
//     'marathi': 'mr',
//     'bengali': 'bn',
//     'gujarati': 'gu',
//     'punjabi': 'pa',
//     'te - telugu': 'te',
//     'te-telugu': 'te',
//   };
//   return map[language.toLowerCase()] || language.toLowerCase();
// }

// async function createVoice(token: string, row: any): Promise<void> {
//   const voiceName = row['Voice name'] || '';
//   const elevenLabsId = row['ElevenLabs Voice ID'] || '';
//   const language = row['Language'] || '';
//   const gender = row['Gender'] || '';
//   const languageCode = getLanguageCode(language);

//   console.log(`   → ID: ${elevenLabsId}`);
//   console.log(`   → Name: ${voiceName}`);
//   console.log(`   → Language: ${language} → Code: ${languageCode}`);
//   console.log(`   → Gender: ${gender}`);

//   const formData = new FormData();
//   formData.append('elevenlabs_voice_id', elevenLabsId);
//   formData.append('name', voiceName);
//   formData.append('language_code', languageCode);
//   formData.append('gender', gender);

//   try {
//     await axios.post(
//       `${API_BASE}/voices/`,
//       formData,
//       {
//         headers: {
//           ...formData.getHeaders(),
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );
//     console.log(`✅ Created: ${voiceName}`);
//   } catch (error: any) {
//     const errMsg = error.response?.data?.detail || error.response?.data || error.message;
//     console.log(`❌ Failed: ${voiceName} — ${JSON.stringify(errMsg)}`);
//   }
// }

// async function main() {
//   console.log('🚀 Starting Voice Creator...');
//   console.log('─────────────────────────────');

//   let token: string;
//   try {
//     token = await getToken();
//   } catch (error: any) {
//     console.log('❌ Login failed!');
//     console.log(error.response?.data || error.message);
//     return;
//   }

//   const voices = readExcel();

//   console.log('─────────────────────────────');
//   console.log('📝 Creating voices...');
//   console.log('─────────────────────────────');

//   for (let i = 0; i < voices.length; i++) {
//     const voice = voices[i];
//     console.log(`[${i + 1}/${voices.length}] Processing: ${voice['Voice name']}`);
//     await createVoice(token, voice);
//     await new Promise(resolve => setTimeout(resolve, 500));
//   }

//   console.log('─────────────────────────────');
//   console.log('🎉 All done!');
// }

// main();

import * as XLSX from 'xlsx';
import axios from 'axios';
import FormData from 'form-data';

const USERNAME = 'superadmin@example.com';
const PASSWORD = 'Complicated@2026';
const API_BASE = 'https://router.callohm.com';

async function getToken(): Promise<string> {
  const formData = new FormData();
  formData.append('username', USERNAME);
  formData.append('password', PASSWORD);
  formData.append('grant_type', 'password');

  const response = await axios.post(
    `${API_BASE}/auth/token`,
    formData,
    { headers: formData.getHeaders() }
  );

  console.log('✅ Login successful! Token received.');
  return response.data.access_token;
}

function readExcel(): any[] {
  const workbook = XLSX.readFile('elevenlabsvoicedetails.xlsx');
  const sheetName = 'Sheet2';
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    console.log('❌ Sheet not found!');
    console.log('Available sheets:', workbook.SheetNames);
    process.exit(1);
  }

  // Trim all column names and values
  const rawRows = XLSX.utils.sheet_to_json(sheet) as any[];
  const rows = rawRows.map((row: any) => {
    const cleanRow: any = {};
    Object.keys(row).forEach(key => {
      const cleanKey = key.trim();
      cleanRow[cleanKey] = typeof row[key] === 'string' ? row[key].trim() : row[key];
    });
    return cleanRow;
  });

  console.log(`✅ Found ${rows.length} voices in Excel!`);
  console.log('📋 Columns:', Object.keys(rows[0]));
  return rows;
}

function getLanguageCode(language: string): string {
  const map: { [key: string]: string } = {
    'kannada': 'kn',
    'telugu': 'te',
    'hindi': 'hi',
    'tamil': 'ta',
    'english': 'en',
    'malayalam': 'ml',
    'marathi': 'mr',
    'bengali': 'bn',
    'gujarati': 'gu',
    'punjabi': 'pa',
    'te - telugu': 'te',
    'te-telugu': 'te',
  };
  return map[language.toLowerCase()] || language.toLowerCase();
}

async function createVoice(token: string, row: any): Promise<void> {
  const voiceName = row['Voice name'] || '';
  const elevenLabsId = row['ElevenLabs Voice ID'] || '';
  const language = row['Language'] || '';
  const gender = row['Gender'] || '';
  const languageCode = getLanguageCode(language);

  console.log(`   → ID: ${elevenLabsId}`);
  console.log(`   → Name: ${voiceName}`);
  console.log(`   → Language Code: ${languageCode}`);
  console.log(`   → Gender: ${gender}`);

  const formData = new FormData();
  formData.append('elevenlabs_voice_id', elevenLabsId);
  formData.append('purviewVoiceName', voiceName);
  formData.append('language_code', languageCode);
  formData.append('gender', gender);

  try {
    const response = await axios.post(
      `${API_BASE}/voices/`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log(`✅ Created: ${voiceName}`);
    console.log(`   Response:`, JSON.stringify(response.data));
  } catch (error: any) {
    const errMsg = error.response?.data?.detail || error.response?.data || error.message;
    console.log(`❌ Failed: ${voiceName} — ${JSON.stringify(errMsg)}`);
  }
}

async function main() {
  console.log('🚀 Starting Voice Creator...');
  console.log('─────────────────────────────');

  let token: string;
  try {
    token = await getToken();
  } catch (error: any) {
    console.log('❌ Login failed!');
    console.log(error.response?.data || error.message);
    return;
  }

  const voices = readExcel();

  console.log('─────────────────────────────');
  console.log('📝 Creating voices...');
  console.log('─────────────────────────────');

  for (let i = 0; i < voices.length; i++) {
    const voice = voices[i];
    console.log(`[${i + 1}/${voices.length}] Processing: ${voice['Voice name']}`);
    await createVoice(token, voice);
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('─────────────────────────────');
  console.log('🎉 All done!');
}

main();