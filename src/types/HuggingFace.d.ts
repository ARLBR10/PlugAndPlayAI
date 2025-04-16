export interface HF_ModelSearch {
  _id: string;
  id: string;
  author: string;
  gated: boolean;
  lastModified: string;
  likes: number;
  private: boolean;
  sha: string;
  config: HF_ModelConfig;
  downloads: number;
  tags: string[];
  pipeline_tag?: string;
  library_name?: string;
  createdAt: string;
  modelId: string;
  siblings?: HF_ModelSibling[];
}

export interface HF_ModelConfig {
  architectures: string[];
  model_type: string;
  tokenizer_config?: {
    bos_token: string | null;
    chat_template?: string;
    eos_token: string;
    pad_token: string;
    unk_token: string | null;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface HF_ModelSibling {
  rfilename: string;
}