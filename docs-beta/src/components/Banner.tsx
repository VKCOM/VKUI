import * as React from 'react';

interface BannerProps {
  title: string;
  children: React.ReactNode;
  linkTitle: string;
  href: string;
}

export default function Banner({ title, children, linkTitle, href }: BannerProps) {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{children}</p>
      </div>
      <div className="card__footer">
        <a href={href} className="button button--link padding-left--none">
          {linkTitle}
        </a>
      </div>
    </div>
  );
}
