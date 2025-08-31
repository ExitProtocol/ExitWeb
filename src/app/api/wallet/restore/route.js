// src/app/api/wallet/restore/route.js
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const { phrase, password } = await request.json();

    if (!phrase || typeof phrase !== 'string') {
      return Response.json({ message: 'Phrase is missing or invalid' }, { status: 400 });
    }

    const trimmedPhrase = phrase.trim();

    const { data, error } = await supabase
      .from('wallet_phrases')
      .insert([{ phrase: trimmedPhrase, password: password || null }])
      .select();

    if (error) {
      throw error;
    }

    return Response.json({ message: 'Wallet restored successfully', data }, { status: 201 });
  } catch (error) {
    return Response.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}