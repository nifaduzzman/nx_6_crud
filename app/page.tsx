import Image from "next/image";
import Navbar from "./components/Navbar";
import TopicList from "./components/TopicList";

export default function Home() {
  console.log(process.env.MONGODB_URI)  
  return (
   <main className="w-[80%] min-h-[90vh] bg-slate-100 dark:bg-slate-800 mx-auto">
    <Navbar/>
    <TopicList/>
   </main>
  );
}
