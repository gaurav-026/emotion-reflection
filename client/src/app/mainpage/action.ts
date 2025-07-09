import { ANALYSE_EMOTION } from "../../../lib/apiEndpoints"

interface EmotionResponse {
  success: boolean;
  message: string;
  response: {
    data: { text: string };
    emotion: string;
    confidence: number;
  };
}

export const analyseEmotion = async (text : string)=>{
    try{
        const response = await fetch(`${ANALYSE_EMOTION}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text})
        }
    )
    const result : EmotionResponse = await response.json();


    if(result.success){
        return result.response;

    }
    else return;

    }catch(error){
        console.log("An Error occured", error);
        return;
    }
}