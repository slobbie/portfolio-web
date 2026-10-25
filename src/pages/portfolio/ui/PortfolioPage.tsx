import {
  AdditionalInformationSection,
  CareerSection,
  ExperienceSection,
  GiggySection,
  HeroSection,
  SummarySection,
  TechStackSection,
} from '@/widgets/portfolio';
import { SiteHeader } from '@/widgets/site-header';

import {
  ContentStage,
  PortfolioRoot,
  SiteShell,
  SkipLink,
} from '@/pages/portfolio/ui/PortfolioPage.styles';

const backgroundTexture = `${import.meta.env.BASE_URL}images/bg.png`;

export function PortfolioPage() {
  return (
    <PortfolioRoot backgroundTexture={backgroundTexture} className="portfolio-page" id="top">
      <SkipLink className="skip-link" href="#main-content">
        본문으로 바로가기
      </SkipLink>
      <ContentStage className="content-stage">
        <SiteShell className="site-shell">
          <SiteHeader />
          <main id="main-content">
            <HeroSection />
            <SummarySection />
            <TechStackSection />
            <ExperienceSection />
            <CareerSection />
            <GiggySection />
            <AdditionalInformationSection />
            {/* 이번 배포에서는 Labs를 숨깁니다. 다음 공개 시 LabsSection을 복구합니다. */}
            {/* <LabsSection /> */}
          </main>
        </SiteShell>
      </ContentStage>
    </PortfolioRoot>
  );
}
