import Link from 'next/link';

export default (props) =>

<li>
    <Link href="/post/[id]/[title]" as={`/post/${props.id}/${props.title}`}>
        <a>{props.title}</a>
    </Link>
</li>