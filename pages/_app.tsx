import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <Sidebar/>
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <Header/>

                <div className="px-6 2xl:container">
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    )
}
