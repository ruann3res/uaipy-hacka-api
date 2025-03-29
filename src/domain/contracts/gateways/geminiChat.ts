export interface ChatGPTGateway {
  sendMessage(params: ChatGPTGateway.Params): Promise<ChatGPTGateway.Response>;
}

/* 
Example payload:

{
contents: [
      {"parts": [
        {
          "inlineData": {
            "mimeType": "application/pdf",
            "data": "$PDF_BASE64"
          }
        },
        {
          "text": "prompt"
        }
      ]}
    ];}

*/

export namespace ChatGPTGateway {
  export type Params = {
    contents: {
      parts: {
        inlineData: {
          mimeType: string;
          data: string;
        };
        text: string;
      }[];
    }[];
  };
  export type Response = {
    message: string;
    history: string[];
  };
}

