'use client';
import { CatchCopy } from '~/features/site/components/CatchCopy';
import { Page } from '~/features/site/components/Page';
import { SiteHeader } from '~/features/site/components/SiteHeader';

export default function Home() {
  return (
    <Page>
      <SiteHeader style={{ position: 'sticky', top: 0 }} />
    </Page>
  );
}
