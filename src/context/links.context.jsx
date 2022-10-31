import { useEffect, useState, createContext } from "react"

const slackName = "gentcod";

const data = [
   {
      id: 0,
      linkName: "Twitter",
      link: "https://www.twitter.com/gentcod",
   },
   {
      id: 1,
      linkName: "Zuri Team",
      link: "https://training.zuri.team",
   },
   {
      id: 2,
      linkName: "Zuri Books",
      link: " http://books.zuri.team",
   },
   {
      id: 3,
      linkName: "Python Books",
      link: `https://books.zuri.team/python-for-beginners?ref_id=${slackName}`,
   },
   {
      id: 4,
      linkName: "Background Check For Coders",
      link: "https://background.zuri.team",
   },
   {
      id: 5,
      linkName: "Design Books",
      link: "https://books.zuri.team/design-rules",
   },
]

export const LinksContext = createContext({
   linksData: null,
})

export const LinksProvider = ({ children }) => {
   const [linksData, setLinks] = useState(data);

   useEffect(() => {
      setLinks(data);
   }, [])

   const value = { linksData }

   return (
      <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
   )
}