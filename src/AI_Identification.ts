/* LIBS */
import axios from "axios";

/* INTERFACES */
import { HF_ModelSearch } from "./types/HuggingFace";
import { Default_AIModel } from "./types/Default";

/* CLASS */
export class AIIdentity {
  constructor(public name: string) {}
  /* INTERFACES/TYPES */

  /* FUNCTIONS */
  /**
   * Searches for AI models on HuggingFace.
   *
   * @param Name - Name/ID of the AI Model to search for
   * @returns A JSON object with the AI Model information
   *
   */
  async HF_Models(Name: string, Author?: string): Promise<HF_ModelSearch> {
    /* More info about this request at the PostMan Repo */
    const ModelSearch = await axios.request({
      baseURL: "https://huggingface.co/api/models",
      params: {
        search: Name, // Model Name or and Author
        author: Author,
        sort: "downloads", // Sort method
        full: "full", // Full metadata
        limit: "5", // Models per search
        config: "config", // Display Model Config
      },
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
      },
      responseType: "json",
    });

    let Models = ModelSearch.data as HF_ModelSearch[];

    return Models[0];
  }
}
