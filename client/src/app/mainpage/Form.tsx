"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { analyseEmotion } from "./action";
import { CancelCircleHalfDotIcon} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface responseProps {
  confidence: number;
  data: {
    text: string;
  };
  emotion: string;
}

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState<responseProps | null>(null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text.trim() === "") {
      toast.error("Field is required");
      return;
    } else {
      try {
        setLoading(true);
        const res = await analyseEmotion(text);
        console.log("Final result is", res);
        setResponse(res);
        setText("");
        setOpenModal(true);
      } catch (error) {
        toast.error("Something went wrong!");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <form className="flex flex-col gap-6 items-center">
        <input
          name="text"
          type="text"
          placeholder="What's in your mind ?"
          className="bg-white md:px-10 md:py-4 px-6 py-3 text-gray-900 outline-none rounded-full border-4 border-gray-200 focus:border-yellow-300 max-w-2xl w-full"
          onChange={(e) => setText(e.target.value)}
          value={text}
          suppressHydrationWarning={true}
        />

        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-2 w-fit rounded-full cursor-pointer disabled:opacity-80"
          onClick={handleClick}
          disabled={loading}

        >
          {loading ? "Analyzing Emotions.." : "Analyze Emotions"}
        </button>
      </form>

      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-gray-900 shadow-lg flex flex-col gap-4 max-w-[35rem] w-full mx-8">
            <div className="flex justify-end ">
              <HugeiconsIcon
                icon={CancelCircleHalfDotIcon}
                onClick={() => setOpenModal(false)}
                className="hover:cursor-pointer hover:text-red-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-lg">
                Emotion analysis based on given sentence:
              </h2>
              <p >{response?.data?.text}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="">Confidence: &nbsp;{response?.confidence}</p>
            <p className="">Emotion: &nbsp;{response?.emotion}</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Form;
