// our-domain.com/news
import Link from "next/link";

function newpage () {
    return(
        <ul>
            <li><Link href="news/1">Yash</Link></li>
            <li><Link href="news/2">Vaibhav</Link></li>
            <li><Link href="news/3">Suresh</Link></li>
        </ul>
    )
}

export default newpage;

