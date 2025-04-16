export interface Default_AIModel {
  id: string;
  size?: number;
  context_window: string;
  name?: string;
  image?: string; // Expected to be PNG
  data_image?: string;
  owner: string;
  type: string; // text-generation | text-to-speech | automatic-speech-recognition | sentence-similarity
  pricing?: {
    input: number; // Per million tokens
    cache?: number; // Per million tokens
    output: number; // Per million tokens
  };
}
