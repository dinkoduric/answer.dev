import React, { memo } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { generateCategoryPath } from '@site/src/utils';
// @ts-ignore
import {useBlogPost} from '@docusaurus/theme-common/internal';

const BlogPostItemHeader = () => {
  const { frontMatter, metadata } = useBlogPost();
   return (
    <header>
      <div className="d-flex align-items-center mb-3">
        <Link to='/blog' className="me-2">
          <Translate id="blogHeader.title">
            Blog
          </Translate>
        </Link>
        <span className="me-2">/</span>
        <Link
          to={generateCategoryPath(frontMatter.category)} className="me-2">
            <Translate id={frontMatter.category}>
              {frontMatter.category}
            </Translate>
        </Link>
      </div>
      <h1 className='mb-3'>
        <Link to={metadata.permalink} className="text-body">
          {metadata.title}
        </Link>
      </h1>

      <div className="d-flex align-items-center text-secondary">
        {metadata.authors.map((author) => {
          return (
            <div className='me-3' key={author.name}>
              {author.name}
            </div>
          )
        })}
          <time className='me-3' dateTime={metadata.date}>
            {metadata.formattedDate}
          </time>
          <div>
            <Translate id="blogPostItem.readingTime" values={{
              reading_time: Math.round(metadata.readingTime),
            }}>
              {'{reading_time} min read'}
            </Translate>
          </div>
      </div>
    </header>
   )
}

export default memo(BlogPostItemHeader)
