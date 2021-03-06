import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

export default () =>

<div>
    <Link href="/">
        <a style={linkStyle}>
            Home
        </a>
    </Link>

    <Link href="/blog">
        <a style={linkStyle}>
            Blog
        </a>
    </Link>

    <Link href="/shows">
        <a style={linkStyle}>
            Shows
        </a>
    </Link>

    <Link href="/quote">
        <a style={linkStyle}>
            Quote
        </a>
    </Link>

    <Link href="/about">
        <a style={linkStyle}>
            About
        </a>
    </Link>
</div>