import { useState, useEffect, createContext } from "react";
import axios from "axios";


const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const [category, setCategory] = useState('general')
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)
    
    const askAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        const { data} = await axios(url)
        //console.log(data.articles)

        setNews(data.articles)
        setTotalNews(data.totalResults)
        setPage(1)
    }
    const askPage = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&paghe=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        const { data} = await axios(url)
        //console.log(data.articles)

        setNews(data.articles)
        setTotalNews(data.totalResults)
    }
    useEffect(() => {
        askPage()
   }, [ page])

    useEffect(() => {
         askAPI()
    }, [category])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }
    const handleChangePage = (e, value) => {
        setPage(value)
    }
    return (
        <NewsContext.Provider
        value={{
            category,
            handleChangeCategory,
            news,
            totalNews,
            handleChangePage,
            page
        }}>
            {children}
        </NewsContext.Provider>
    )
}
export {
    NewsProvider
}
export default NewsContext