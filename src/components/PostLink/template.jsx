import "./style.scss";
import Link from 'next/link';

export default (props) =>

<li>
    <Link href="/post/[id]/[title]" as={`/post/${props.data.id}/${props.data.title}`}>
        <a>{props.data.title}</a>
    </Link>
</li>