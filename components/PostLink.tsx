import Link from 'next/link';
export const PostLink = (props) => <Link as={`/podcast/${props.id}`} href={`/podcast?id=${props.id}`}>
  <a aria-label={props.title} className={props.classes}>{props.children}</a>
</Link>;
