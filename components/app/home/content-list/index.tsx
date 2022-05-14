import Link from "next/link"

const blogSample = '/templates/blog/blog-sample'

const List: React.FC = () => {
    return (
        <ul>
            <li>
                <Link href={blogSample}>
                    <a className='link-primary' href={blogSample}>Blog sample</a>
                </Link>
            </li>
        </ul>
    )
}

export default List