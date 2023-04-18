export interface IOpenaiRequest{
    model: string;
    messages: IMessages[];
    temperature: number
}

export interface IMessages{
    role: string;
    content: string;
}


export interface IOpenaiResponse {
    created: number;
    model: string;
    usage: {
      prompt_tokens: number;
      completion_tokens: number;
      total_tokens: number;
    };
    choices: [
      {
        finish_reason: string;
        index: number;
        message: {
          role: string;
          content: string;
        };
      }
    ];
  }

