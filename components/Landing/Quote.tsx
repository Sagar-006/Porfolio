'use client'
import { quotes } from "@/config/Hero";
import { Container } from "../common/Container";
import { useEffect, useState } from "react";

type QuoteType = {
  title:string;
  author:string;
} 
export function Quote(){
  const [quote,setQuote] = useState<QuoteType|null>(null)
  function getRandomQuote(arr:QuoteType[] ){
    if(arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)]; 
  }
  useEffect(() => {
    setQuote(getRandomQuote(quotes))
  },[])
    return (
      <Container className=" p-0 flex flex-col  gap-y-8 pt-12 text-lg ">
        <div className="flex flex-col items-center border p-2 rounded-lg text-black dark:bg-black dark:text-white border-gray-200 dark:border-gray-800">
          <p className=" text-[16px]">
            {quote?.title}
          </p>
          <p className="text-[14px] ml-[420px]">{quote?.author}</p>
        </div>
      </Container>
    );
}