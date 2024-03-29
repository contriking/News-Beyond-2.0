import React,{useEffect, useState} from "react";
import Newsitem from "./Newsitem";

function Newsboard({category}){

    const [article,setArticles]=useState([]);

    useEffect(()=>{
        
        // let url=`https://newsapi.org/v2/everything?q=Apple&from=2024-03-26&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`;
        let url=`https://newsapi.org/v2/everything?q=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        // let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(Response => Response.json()).then(data => setArticles (data.articles));
        
    },[category])   

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger ">News</span></h2>
            {article.map((news,index)=>
                {if(news.urlToImage){
                    
                    return <Newsitem key={index} title={news.title.slice(0,50)} description={news.description.slice(0,90)} src={news.urlToImage} url={news.url} />
                }}

            )}
        </div>
    );
}

export default Newsboard;