import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from 'next/link'

function DetailsPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-good">Open Next JS</Link>
        </li>

        <li>Some thing else</li>
      </ul>
    </Fragment>
  );
}

export default DetailsPage;
