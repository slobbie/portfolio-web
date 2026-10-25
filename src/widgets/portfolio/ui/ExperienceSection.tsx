import type { Variants } from 'framer-motion';

import { experienceOverview, type ExperienceOverviewItem } from '@/entities/portfolio';
import { useViewportFocus } from '@/shared/lib/interaction';
import { useRevealGroup } from '@/shared/lib/motion';
import { PageSection, SectionHeading, TagList } from '@/shared/ui';

import {
  ExperienceCard,
  ExperienceHighlights,
  ExperienceList,
  ExperienceMain,
  ExperienceNumber,
  ExperienceTitle,
} from '@/widgets/portfolio/ui/ExperienceSection.styles';

type ExperienceItemProps = {
  experience: ExperienceOverviewItem;
  index: number;
  reveal: { variants: Variants };
};

type HighlightGroup = {
  title: string;
  items: string[];
};

function groupHighlights(highlights: readonly string[]): HighlightGroup[] {
  return highlights.reduce<HighlightGroup[]>((groups, highlight) => {
    if (highlight.endsWith(':')) {
      groups.push({ title: highlight, items: [] });
      return groups;
    }

    groups.at(-1)?.items.push(highlight);
    return groups;
  }, []);
}

/** 활성 판정은 행마다 자기 위치를 재야 해서 항목을 컴포넌트로 분리합니다. */
function ExperienceItem({ experience, index, reveal }: ExperienceItemProps) {
  const { ref, focused } = useViewportFocus();
  const highlightGroups = groupHighlights(experience.highlights);

  return (
    <ExperienceCard
      className="experience-card"
      ref={ref}
      data-focused={focused}
      {...reveal}
    >
      <ExperienceNumber className="experience-number">
        {String(index + 1).padStart(2, '0')}
      </ExperienceNumber>
      <ExperienceMain className="experience-main">
        <ExperienceTitle className="experience-title">
          <div>
            <h3>{experience.company}</h3>
            <p>{experience.role}</p>
          </div>
          <time>{experience.duration}</time>
        </ExperienceTitle>
        <ExperienceHighlights className="experience-highlights">
          {highlightGroups.map((group) => (
            <li key={group.title}>
              <strong>{group.title}</strong>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ExperienceHighlights>
        <TagList items={experience.tech} />
      </ExperienceMain>
    </ExperienceCard>
  );
}

export function ExperienceSection() {
  /** 목록이 화면을 크게 벗어나지 않아 Tech Stack과 같이 목록 단위로 차례로 등장시킵니다. */
  const { group, item } = useRevealGroup('sm', { stagger: 'block' });

  return (
    <PageSection className="page-section experience-section" id="experience">
      <SectionHeading title="Work Experience" />
      <ExperienceList className="experience-list" {...group}>
        {experienceOverview.map((experience, index) => (
          <ExperienceItem
            experience={experience}
            index={index}
            reveal={item}
            key={experience.company}
          />
        ))}
      </ExperienceList>
    </PageSection>
  );
}
