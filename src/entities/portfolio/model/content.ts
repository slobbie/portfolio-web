import type {
  AdditionalInformationItem,
  CareerProject,
  ExperienceOverviewItem,
  GiggyContent,
  LabProject,
  ProfessionalSummaryItem,
  TechGroup,
} from '@/entities/portfolio/model/types';

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const additionalInformation = [
  {
    title: '학력',
    detail: '경기기계공업고등학교 | 신소재 학과 졸업',
    duration: '2010.03 ~ 2013.02',
  },
  {
    title: '병역',
    detail: '육군 병장 만기 전역',
    duration: '2015.04 ~ 2017.01',
  },
] satisfies readonly AdditionalInformationItem[];

export const professionalSummary = [
  {
    label: '01',
    title: 'AI 서비스 품질·운영 개선',
    description:
      'AI 마케팅 서비스의 생성·검수·승인·게시 흐름을 개선하고, 평가셋 검증과 호출 원가 절감을 운영에 연결했습니다.',
  },
  {
    label: '02',
    title: 'AI 개발 하네스',
    description:
      '역할별 작업 기준을 정의하고, 오케스트레이션으로 담당 역할과 실행 순서를 배정했습니다. 반복 코드 구조는 생성 스크립트로 표준화하고, 작업 완료 단계에서 결과물 구조를 검증했습니다. 커밋 단계에서는 변경 내용을 검증하고 화면설계서를 자동 작성해, 실제 구현을 반영한 최신 문서를 유지했습니다.',
  },
  {
    label: '03',
    title: '오디오 스트리밍 개선',
    description:
      'WebSocket으로 수신한 WAV 파일을 개별 재생하던 방식에서 PCM 연속 재생 방식으로 전환해, 파일 전환 경계에서 발생하던 팝핑 노이즈를 제거하고 음성 응답이 자연스럽게 이어지도록 개선했습니다.',
  },
  {
    label: '04',
    title: '번역 반영 자동화',
    description:
      'Google Sheets 번역 원본을 앱 리소스에 동기화하고 Babel AST로 적용 누락을 탐지해, 수동 파일 반영과 눈으로 하던 누락 점검을 자동화했습니다.',
  },
  {
    label: '05',
    title: '차량 진단 기능 통합',
    description:
      'Android·iOS 차량 진단 SDK의 VIN 조회와 OBD-II 기능을 Native Module로 연동했습니다. 플랫폼별 호출 차이는 공통 인터페이스로 통합해 React Native 앱의 차량 등록·진단 기능에서 동일하게 사용할 수 있도록 했습니다.',
  },
] satisfies readonly ProfessionalSummaryItem[];

export const techGroups = [
  {
    label: 'Skills',
    items: ['TypeScript', 'React Native', 'React', 'Next.js', 'WebSocket', 'Node.js'],
  },
] satisfies readonly TechGroup[];

export const experienceOverview = [
  {
    company: '에스제이소프트텍',
    role: '개발팀',
    duration: '2026.04 ~ 현재',
    highlights: [
      'SJADMOB AI 마케팅 서비스 고도화:',
      '기존 AI 마케팅 서비스의 콘텐츠 생성, 검수, 승인과 게시 흐름을 개선하며, 기획과 화면 설계부터 개발, 품질 평가, 배포와 운영까지 담당했습니다.',
      '콘텐츠 형식과 광고 목적, 업종에 맞춘 글 구조 추천 체계 구축, 고정 글 구조 1종 → 8종으로 확장해 획일적인 광고 원고 생성 방식 개선',
      '브랜드와 채널별 콘텐츠 성과 분석 및 학습 요약 체계 구축, 분석 결과를 다음 콘텐츠 기획과 원고 생성에 반영',
      '법령 및 제재 사례를 바탕으로 광고 문구 검수 기준 정립, 100건당 재검수 발생 건수 개선 전 약 21건 → 개선 후 1건으로 감소, 재검수율 95% 개선',
      '광고 원고 작성과 검수 모델 배정, 공통 브랜드 정보의 프롬프트 캐시 재사용으로 비용 최적화, 콘텐츠 1건당 LLM 호출 원가 개선 전 $0.3631 → 개선 후 $0.1102, 약 70% 절감',
      'AI 개발 워크플로우 구축:',
      '요청 유형별 역할·실행 순서 오케스트레이션과 반복 코드 생성 스크립트를 통한 AI 작업 흐름 표준화',
      '작업 완료·커밋 단계의 생성 결과물·공개 API·문서 정합성 검증 자동화',
      '공통 실시간 채팅 모듈 구축:',
      '메시지 전송·읽음·이벤트 구독, 연결·재연결 처리 공통 모듈화 및 앱별 설정 분리를 통한 중복 구현 제거와 수정·확장 지점 단일화',
      '웹·모바일 공통 디자인 시스템 구축:',
      'UI 컴포넌트·모션 API 통일 및 플랫폼별 구현 분리를 통한 웹·모바일 간 재사용성 확보',
      '디자인 토큰·컴포넌트 상태 로직 공통화를 통한 플랫폼 간 디자인·동작 일관성 확보',
      'Storybook 기반 컴포넌트 테스트 및 Fumadocs를 통한 패키지 API·사용 가이드 통합으로 문서 관리 창구 단일화',
    ],
    tech: [
      'TypeScript',
      'React Native',
      'React',
      'STOMP',
      'WebSocket',
      'Zustand',
      'React Query',
      'ESLint',
      'Husky',
      'Turborepo',
      'GitHub Actions',
      'Storybook',
    ],
  },
  {
    company: '미니레코드',
    role: '개발팀 매니저',
    duration: '2024.07 ~ 2025.06',
    highlights: [
      '오디오 스트리밍 개발:',
      'WebSocket 연결·수신·재생 처리 공통 Hook 구성',
      'WAV 파일 단위 재생에서 PCM 스트리밍 전환을 통한 팝핑 노이즈 제거',
      '번역 데이터 동기화 및 다국어 적용 자동화:',
      'Google Sheets 번역 원본의 언어별 앱 리소스 동기화',
      'Babel AST 기반 한글 문자열 탐지·다국어 함수 적용을 통한 누락 점검 자동화',
      'API 정의 기반 React Query 조회 파이프라인 자동화:',
      '조회 API 추가·변경 시 반복되던 Query Key·호출 함수 작성과 요청·응답 타입 연결을 API 정의 기반 생성 함수로 통합해 React Query 조회 구성 파이프라인 단축',
      '이미지 최적화 및 유형별 캐싱:',
      '아바타·썸네일 등 용도별 해상도·품질 기준과 확대 방지 조건을 적용한 WebP 변환',
      '정적 이미지의 immutable 캐시와 변경 가능한 이미지의 HTTP 조건부 캐시를 구분해 캐시 재사용과 갱신 기준 분리',
    ],
    tech: ['React Native', 'TypeScript', 'WebSocket', 'PCM', 'Google Sheets API', 'Babel AST', 'React Query', 'Axios'],
  },
  {
    company: '이로운소프트',
    role: '개발팀 주임',
    duration: '2022.08 ~ 2024.04',
    highlights: [
      '실시간 설비 모니터링 WebSocket 구조 개선:',
      '차트별 연결·재연결을 단일 WebSocket 연결과 식별자 기반 데이터 분배 구조로 개선해 연결 관리 지점 단일화',
      '산업안전 기기 운영 시스템 개발:',
      '공용 웨어러블 기기의 등록·지급·반납·상태 이력과 권한별 관리 기능을 구축해 수기 운영 과정 시스템화',
      '공공 기상 데이터 수집을 별도 스케줄 서버로 분리하고 DB 적재 후 조회하도록 구성해 외부 API와 사용자 요청 분리',
      '차량 진단 SDK 통합:',
      'Android·iOS 차량 진단 SDK의 초기화·BLE·VIN·OBD-II 기능을 Native Module과 공통 인터페이스로 통합해 플랫폼별 호출 구조 단일화',
      '장치 연결 상태와 차량 진단 결과를 차량 등록·진단 화면에 연동',
    ],
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'React Native', 'React', 'WebSocket', 'Highcharts', 'Native Module'],
  },
] satisfies readonly ExperienceOverviewItem[];

export const careerProjects = [
  {
    company: '에스제이소프트텍 | 개발팀',
    companyId: 'sjsofttech',
    title: 'SJADMOB | AI 마케팅 서비스 고도화',
    duration: '2026.04 ~ 현재',
    background: [
      '광고주가 등록한 브랜드 정보와 상품 사진을 기반으로 콘텐츠 생성, 검수, 승인, 게시와 성과 확인을 제공하는 AI 마케팅 서비스',
      '기존 MVP 인수 후 콘텐츠 생성 품질, 검수 기준, 생성 원가와 운영 흐름 개선',
    ],
    problems: [
      '콘텐츠 형태와 광고 목적, 업종별 글 구성 기준이 부족해 유사한 원고 생성',
      '맛과 분위기 등 감상 표현의 과잉 경고와 실제 위반 표현 누락으로 판정 근거와 일관성 부족',
      '원고 품질과 검수 오류로 수정과 재검수가 반복되고, 중복 생성과 AI 재호출에 따른 불필요한 비용 발생',
    ],
    roleHeading: '담당 역할',
    roles: [
      'PO / Product Engineer',
      '기존 서비스의 개선 기획과 화면 설계, 프론트엔드와 백엔드 개발, 품질 평가, 배포와 운영 담당',
    ],
    approach: [
      '실제 광고 콘텐츠와 업종별 사례 조사에 따른 글 구조와 생성 규칙 정립',
      '법령과 제재 사례를 광고 문구 검수 기준으로 적용',
      '기획 AI의 구조 선택과 원고 AI의 작성 역할 분리, 승인 상태와 수치 계산은 코드로 확정',
      '변경 전후 원고 품질, 검수 결과와 호출 비용 비교, 판정 오류와 자동 수정 실패를 원인별로 분류해 개선',
    ],
    keyWork: [
      {
        title: '콘텐츠 형식과 글 구조 개선',
        paragraphs: [
          '고정 글 구조 1종 → 8종으로 확장(문제와 해결, 비포애프터, 특징과 이점, 목록형, 오해 바로잡기 등)',
          '업종별 추천과 광고 목적을 바탕으로 기획 AI의 선택 범위를 사전 정의한 글 구조로 제한하고, 선택한 구조의 문단과 장별 구성 순서를 원고 AI에 전달해 생성에 적용',
          '사진별 내용 설명을 사전 저장해 원고 AI가 보유 사진에 맞는 원고를 생성하도록 하고, 각 장의 내용과 사진 설명을 대조해 적합한 사진을 배정',
        ],
      },
      {
        title: '법령 기반 검수와 자동 수정',
        paragraphs: [
          '법령과 제재 사례, 위반 사례를 바탕으로 위반 표현, 근거가 필요한 표현, 단순 감상을 구분하고 공통 기준과 업종별 기준을 검수에 적용',
          '위반 누락과 정상 문구의 과잉 경고를 점검하고, 지적 사항에 따라 원고를 수정해 AI 재호출 비용 절감. 재검수 후에도 차단 판정이 남으면 사용자 승인을 거쳐 학습 데이터에 반영',
        ],
      },
      {
        title: '모델 배정과 프롬프트 캐시 개선',
        paragraphs: [
          '단계별 호출 원가와 요금제 목표 마진을 기준으로 역할별 모델을 배정하고, 품질 비교를 거쳐 생성 비용 절감',
          '광고 원고 작성과 검수 과정에서 반복 전달되는 브랜드 정보와 역할별 공통 규칙을 프롬프트 캐시로 재사용하고, 기존 캡션과 사진 선별 결과를 활용해 중복 생성과 AI 재호출 축소',
        ],
      },
      {
        title: '성과 학습과 다음 기획 반영',
        paragraphs: [
          '사용자의 수정 선호와 실제 게시 성과를 구분하고, 원안과 수정 원고의 성과를 비교해 개인 취향이 성과 판단 기준에 섞이지 않도록 학습 정보 구성',
          '성과 수치는 코드로 집계하고 분석 AI는 해석과 개선점 도출을 담당하도록 분리해, 학습 요약을 다음 콘텐츠 기획과 원고 생성 프롬프트에 반영',
          '브랜드의 실제 성과를 우선해 글 구조를 추천하고, 데이터가 부족하면 같은 업종의 성과나 사전에 정의한 업종별 추천을 활용',
        ],
      },
    ],
    results: [
      '고정 글 구조 1종 → 8종으로 확장해 콘텐츠 형식과 광고 목적, 업종에 맞는 원고 생성',
      '100건당 재검수 발생 건수 약 21건 → 1건, 재검수율 95% 개선',
      '콘텐츠 1건당 LLM 호출 원가 $0.3631 → $0.1102, 약 70% 절감',
      '제품 없는 배경 생성에 맞춰 이미지 모델과 품질 설정을 조정, 장당 생성 원가 $0.042 → $0.006',
      '동일 장면 6장 생성 시간 약 2분 → 약 1분으로 단축',
    ],
    tech: [
      'TypeScript',
      'React',
      'NestJS',
      'Prisma',
      'Redis',
      'Claude API',
      'Playwright',
    ],
  },
  {
    company: '에스제이소프트텍 | 개발팀',
    companyId: 'sjsofttech',
    title: 'NOWEATS | 공통 실시간 채팅 모듈 구축',
    background: [
      '베트남 다낭 지역의 고객용·점주용 배달 앱 개발',
      '두 앱에서 같은 채팅 기능을 사용하되 서버 주소와 채널은 앱마다 다르게 지정해야 하는 구조',
    ],
    problems: [
      '메시지 처리와 연결 관리가 앱별로 구현될 경우 동일한 로직의 중복 발생',
      '앱 설정과 채팅 로직이 결합될 경우 한쪽 앱의 변경이 공통 기능에 영향을 미치는 구조',
      '네트워크 전환과 연결 해제 상황을 고려한 일관된 재연결 정책 필요',
    ],
    roleHeading: '담당 역할',
    roles: ['고객용·점주용 앱의 공통 실시간 채팅 구조 설계·구현'],
    approach: [
      '메시지 처리와 연결 생명주기는 공통 모듈에서 관리하고 서버 주소와 채널은 각 앱에서 지정',
      '고객용·점주용 앱이 동일한 인터페이스로 채팅 기능을 사용할 수 있도록 구성',
    ],
    keyWork: [
      {
        title: '메시지 처리 인터페이스 공통화',
        paragraphs: [
          '메시지 전송·읽음 처리와 이벤트 구독을 공통 인터페이스로 구성',
          '고객용·점주용 앱의 채팅 이벤트 처리 흐름 통합',
        ],
      },
      {
        title: '연결·재연결 처리 모듈화',
        paragraphs: [
          'WebSocket·STOMP 연결, 이벤트 구독, 연결 해제와 재연결 처리 공통화',
          '연결 상태 변경에 따른 구독 처리와 재연결 정책을 공통 모듈에서 관리',
        ],
      },
      {
        title: '앱별 설정 분리',
        paragraphs: [
          '서버 주소와 채널은 각 앱에서 지정하고 메시지 처리와 연결 관리는 공통 모듈에서 담당하도록 구성',
          '서버·채널 설정을 바꿔도 메시지 처리와 연결 로직을 수정하지 않도록 분리',
        ],
      },
    ],
    results: [
      '고객용·점주용 앱의 채팅 중복 구현 제거와 수정·확장 지점 단일화',
      '서버·채널 설정을 앱별로 변경해도 공통 메시지·연결 처리를 그대로 사용할 수 있도록 구성',
      '연결·구독·재연결 정책 통합을 통한 앱 간 채팅 동작 일관성 확보',
    ],
    tech: ['React Native', 'TypeScript', 'STOMP', 'WebSocket', 'Zustand'],
  },
  {
    company: '에스제이소프트텍 | 개발팀',
    companyId: 'sjsofttech',
    title: 'AI 개발 하네스 | 역할 기반 개발 워크플로우 구축',
    background: [
      '고객용·점주용 앱과 공통 기능을 함께 개발하는 환경에서 AI 기반 설계·구현·검토 작업 수행',
    ],
    problems: [
      'AI 작업 과정에서 요청 범위를 벗어난 변경과 공통 모듈을 우회한 개별 구현 반복',
      '공통 구조를 활용하지 않은 중복 코드 생성으로 앱 간 구현 방식과 수정 지점 분산',
      '작업 범위·공통 코드 사용·완료 결과를 통제할 역할 기준과 검증 절차 부재',
    ],
    roleHeading: '담당 역할',
    roles: ['역할 기반 AI 작업 오케스트레이션과 단계별 결과물 검증 체계 설계·구현'],
    approach: [
      '요청 분류부터 역할 배정·실행·검증·실패 반환까지의 작업 흐름 연결',
      '작업 완료 조건을 전제 조건·변경 경로·완료 결과·커밋 단계로 구분',
      '코드 생성과 공개 API·문서 정합성 검증을 작업 완료·커밋 과정에 통합',
    ],
    keyWork: [
      {
        title: '역할 기반 작업 오케스트레이션 설계',
        paragraphs: [
          '요청 유형별 설계·검토·실행 역할과 실행 순서를 배정하고, 선행 작업 완료 조건에 따라 후속 역할 실행을 제어하는 오케스트레이션 구성',
        ],
      },
      {
        title: '단계별 작업 결과 검증 체계 구축',
        paragraphs: [
          '전제 조건·변경 경로·완료 결과·커밋 가능 여부를 단계별로 검증하고 역할별 완료 기준과 실제 결과물 비교',
          '검증 실패 원인에 따라 수정 담당 역할로 작업을 반환하는 피드백 흐름 구성',
        ],
      },
      {
        title: '생성 코드 및 패키지 정합성 검증 자동화',
        paragraphs: [
          '반복 코드 생성과 생성 결과물 검사 기준 표준화',
          '패키지 공개 API·진입점·타입·사용 문서 정합성 검사와 Husky 기반 커밋 차단 연계',
        ],
      },
    ],
    results: [
      '요청 분류부터 역할 배정·실행·검증까지 AI 개발 절차 표준화',
      '검증 실패 원인과 수정 담당 역할을 연결해 작업 반환 기준 명확화',
      '생성 코드·공개 API·문서·커밋 단계의 품질 검증 흐름 단일화',
    ],
    tech: ['TypeScript', 'ESLint', 'Husky'],
  },
  {
    company: '에스제이소프트텍 | 개발팀',
    companyId: 'sjsofttech',
    title: '웹·모바일 공통 디자인 시스템 구축',
    background: [
      '웹·모바일에서 동일한 디자인과 사용 방식을 유지하면서 플랫폼별 렌더링 특성을 반영할 수 있는 UI 기반 필요',
      '컴포넌트·상태 로직·모션을 여러 서비스에서 재사용할 수 있도록 기능별 패키지 구조 필요',
    ],
    problems: [
      '웹과 모바일의 컴포넌트 구현 차이가 서비스 코드의 플랫폼별 분기로 확산될 가능성',
      '플랫폼별 디자인 토큰과 상태 처리 차이로 UI·동작의 일관성 저하',
      '컴포넌트 테스트와 패키지 사용 문서가 분리될 경우 API·가이드 관리 창구 이원화',
    ],
    roleHeading: '담당 역할',
    roles: ['웹·모바일 공통 UI 컴포넌트·디자인 토큰·모션 시스템 설계 및 패키지 구성'],
    approach: [
      '컴포넌트·모션의 공통 API를 설계하고 실제 렌더링과 실행 방식은 플랫폼별로 분리',
      '디자인 토큰과 컴포넌트 상태 로직을 공통화해 플랫폼 간 차이를 구현 계층으로 제한',
      '컴포넌트 테스트와 패키지 문서의 역할을 분리하고 사용 가이드는 단일 문서 체계로 통합',
    ],
    keyWork: [
      {
        title: '크로스 플랫폼 UI 인터페이스 구축',
        paragraphs: [
          '컴포넌트·모션 구현을 패키지 내부에서 .web·.native 파일로 분리하고 빌드 시 플랫폼별로 번들링되도록 구성해 서비스 코드에서는 동일한 API 사용',
          'UI 컴포넌트와 Hook을 기능별 패키지로 나눠 필요한 기능만 선택해 사용할 수 있도록 구성',
        ],
      },
      {
        title: '디자인 토큰 및 상태 로직 공통화',
        paragraphs: [
          '색상·크기·간격·타이포그래피 토큰을 공통 체계로 구성',
          '컴포넌트 상태와 상호작용 로직을 공유해 플랫폼 간 디자인·동작 일관성 확보',
        ],
      },
      {
        title: '컴포넌트 테스트 및 패키지 문서 통합',
        paragraphs: [
          'Storybook 기반 컴포넌트 상태·상호작용 테스트 구성',
          'Fumadocs를 통한 패키지 API·사용 가이드 통합으로 문서 관리 창구 단일화',
        ],
      },
    ],
    results: [
      '웹·모바일 서비스 코드에서 동일한 UI 컴포넌트·모션 API 사용',
      '웹·모바일 구현을 패키지 내부에서 분리해 플랫폼별 코드를 수정해도 서비스의 사용 방식 유지',
      '디자인 토큰·상태 로직 공통화를 통한 플랫폼 간 디자인·동작 일관성 확보',
      '패키지 API와 사용 가이드의 관리 창구 단일화',
    ],
    tech: ['React', 'React Native', 'TypeScript', 'Storybook', 'Fumadocs', 'Turborepo'],
  },
  {
    company: '미니레코드 | 개발팀 매니저',
    companyId: 'minirecord',
    title: 'AI 음성 대화 서비스 | 오디오 스트리밍 개발',
    duration: '2024.07 ~ 2025.06',
    background: [
      'WebSocket으로 수신한 AI 음성 응답을 모바일에서 실시간으로 재생하는 기능 개발',
    ],
    problems: [
      'WAV 파일 단위 재생마다 디바이스의 오디오 출력 스트림이 반복적으로 열리고 닫히면서 파일 경계 구간에 팝핑 노이즈 발생',
      'WebSocket으로 수신한 오디오 데이터를 스트리밍 재생에 적합한 형태로 변환할 처리 흐름 필요',
    ],
    roleHeading: '담당 역할',
    roles: ['WebSocket 수신부터 모바일 오디오 출력까지의 PCM 스트리밍 구조 설계·구현'],
    approach: [
      'WAV 파일 단위 재생을 하나의 오디오 출력 스트림을 유지하는 PCM 스트리밍 방식으로 전환',
      'WebSocket 연결·수신과 PCM 변환·재생 처리를 공통 Hook으로 통합',
    ],
    keyWork: [
      {
        title: 'PCM 스트리밍 재생 구조 구축',
        paragraphs: [
          'WebSocket으로 수신한 오디오 데이터에서 WAV 헤더를 제거하고 PCM 데이터 추출',
          'PCM 데이터를 유지 중인 디바이스 오디오 출력 스트림에 전달해 재생 중단 없이 처리',
        ],
      },
      {
        title: '오디오 처리 흐름 공통화',
        paragraphs: [
          'WebSocket 연결 상태와 오디오 수신·변환·재생 처리를 공통 Hook으로 구성',
          '연결부터 오디오 출력까지의 상태와 처리 순서를 단일 흐름에서 관리',
        ],
      },
    ],
    results: [
      '디바이스 오디오 출력 스트림의 반복적인 시작·중단을 제거해 파일 전환 과정의 팝핑 노이즈 해소',
      'WebSocket 수신부터 PCM 재생까지의 오디오 스트리밍 처리 흐름 단일화',
    ],
    tech: ['React Native', 'TypeScript', 'WebSocket'],
  },
  {
    company: '미니레코드 | 개발팀 매니저',
    companyId: 'minirecord',
    title: '다국어 리소스 동기화 및 코드 적용 자동화',
    background: [
      '실무자는 Google Sheets에서 번역 문구를 관리하고 앱은 언어별 locale JSON을 사용하는 운영 구조',
    ],
    problems: [
      '번역 원본 수정과 앱 리소스 반영 시점 차이로 누락된 번역이나 이전 문구가 남는 문제',
      'locale 파일과 별개로 코드에 직접 작성된 한글 문자열이 다국어 적용에서 제외되는 문제',
      '단순 문자열 검색으로는 JSX·문자열·템플릿 리터럴의 구조에 맞는 탐지와 변환이 어려운 환경',
    ],
    roleHeading: '담당 역할',
    roles: ['번역 원본의 앱 리소스 동기화와 AST 기반 다국어 코드 적용 자동화 스크립트 구현'],
    approach: [
      'Google Sheets를 번역 원본으로 사용하고 언어별 locale JSON 생성 과정 자동화',
      'TypeScript·JSX 코드를 AST로 분석해 한글 문자열을 탐지하고 코드 위치에 맞는 다국어 함수 적용',
    ],
    keyWork: [
      {
        title: '번역 리소스 동기화 자동화',
        paragraphs: [
          'Google Sheets API로 스프레드시트의 언어별 번역 데이터를 읽어 앱 locale JSON을 생성하는 스크립트 구현',
        ],
      },
      {
        title: 'AST 기반 다국어 적용 자동화',
        paragraphs: [
          'JSX 텍스트·속성, 문자열, 템플릿 리터럴에 남은 한글 문자열 탐지',
          '코드 위치에 맞는 t() 변환과 useTranslation 선언 추가 자동화',
          '기존 번역 값 유지와 중복 변환 방지를 적용해 반복 실행 안정성 확보',
        ],
      },
    ],
    results: [
      '실무자가 수정한 번역 데이터를 별도의 locale JSON 수동 작성 없이 앱 리소스에 반영',
      '코드에 직접 작성된 한글 문자열 탐지부터 다국어 함수 적용까지의 반복 작업 자동화',
      '기존 번역을 유지하면서 새로 발견된 번역 키만 반영해 자동화 과정의 데이터 덮어쓰기 방지',
    ],
    tech: ['TypeScript', 'Google Sheets API', 'Babel AST', 'react-i18next'],
  },
  {
    company: '미니레코드 | 개발팀 매니저',
    companyId: 'minirecord',
    title: 'API 정의 기반 React Query 조회 파이프라인 자동화',
    background: [
      '도메인별 API를 React Query와 연결해 서버 상태를 관리하는 앱 구조',
    ],
    problems: [
      '조회 API 추가·변경마다 API 함수와 Query Key·호출 함수를 연결하는 파이프라인이 반복되어 개발·수정 시간 증가',
      'API 함수명과 Query Key를 개별 관리하면서 네이밍과 캐시 키 구성 기준이 달라지는 문제',
    ],
    roleHeading: '담당 역할',
    roles: ['API 래퍼 함수와 Query Key 생성 함수를 통한 React Query 조회 구성 파이프라인 개선'],
    approach: [
      'API 객체를 래퍼 함수에 전달하면 HTTP 메서드에 따라 조회 API를 선별하고 Query Key 생성 단계로 연결',
      '선별된 조회 함수의 이름과 파라미터를 기준으로 Query Key와 호출 함수 생성',
    ],
    keyWork: [
      {
        title: 'API 래퍼·Query Key 생성 파이프라인 구축',
        paragraphs: [
          '도메인 API 객체에서 GET 메서드의 조회 함수만 선별',
          '선별된 조회 함수를 Query Key 생성 함수로 전달해 캐시 식별자와 호출 함수 생성',
          '파라미터 유무에 따라 필요한 React Query 조회 구성 분리',
        ],
      },
    ],
    results: [
      'API 객체 입력부터 React Query 조회 구성 생성까지의 연동 파이프라인 단축',
      'API 함수명을 Query Key 생성 기준으로 사용해 별도 네이밍 과정과 불일치 제거',
    ],
    tech: ['TypeScript', 'React Query', 'Axios'],
  },
  {
    company: '미니레코드 | 개발팀 매니저',
    companyId: 'minirecord',
    title: '이미지 유형별 처리 및 캐시 전략 구축',
    background: [
      '다수의 사용자 프로필 이미지와 정적 이미지 리소스를 여러 화면에서 반복적으로 불러오는 서비스',
    ],
    problems: [
      '정적 이미지와 변경 가능한 이미지에 동일한 로딩·캐시 방식을 적용해 이미지 특성에 맞는 캐시 활용이 어려운 구조',
      '정적 이미지는 재사용할 수 있지만 반복 요청되고, 동적 이미지는 변경 시점에 맞는 갱신 기준 필요',
    ],
    roleHeading: '담당 역할',
    roles: ['이미지 용도별 전처리 기준과 정적·동적 이미지의 캐시 전략 설계·구현'],
    approach: [
      '서비스 이미지의 용도와 변경 가능성을 기준으로 전처리·캐시 정책 분리',
      '정적 이미지는 캐시 재사용을 우선하고 동적 이미지는 서버의 변경 여부에 따라 갱신하도록 구성',
    ],
    keyWork: [
      {
        title: '용도별 이미지 전처리 구성',
        paragraphs: [
          '아바타·썸네일·전체 이미지·배경 이미지별 해상도와 품질 기준 적용',
          '원본 비율 유지와 확대 방지 조건을 적용해 WebP 형식으로 변환',
        ],
      },
      {
        title: '정적·동적 이미지 캐시 분리',
        paragraphs: [
          '변경 가능성이 낮은 정적 이미지에 immutable 캐시를 적용해 로컬 이미지 재사용',
          '변경 가능한 이미지에 HTTP 조건부 캐시를 적용해 서버 변경 여부에 따라 갱신',
        ],
      },
    ],
    results: [
      '이미지 변경 특성에 맞춰 캐시 재사용·갱신 기준 분리',
      '정적 이미지의 반복 요청을 줄이면서 동적 이미지의 변경 사항을 반영할 수 있는 로딩 구조 구축',
      '이미지 유형별 전처리·캐시 기준 공통화로 서비스 이미지 처리 방식 표준화',
    ],
    tech: ['React Native', 'TypeScript', 'FastImage', 'react-native-image-resizer', 'WebP'],
  },
  {
    company: '이로운소프트 | 개발팀 주임',
    companyId: 'erounsoft',
    title: '예천양수발전소 | 실시간 설비 모니터링 구조 개선',
    duration: '2022.08 ~ 2024.04',
    background: [
      '발전 설비의 센서 데이터를 여러 차트로 실시간 모니터링하는 운영 시스템',
    ],
    problems: [
      '차트마다 WebSocket 연결과 재연결 로직을 개별적으로 구성해, 차트가 늘어날수록 연결 수와 오류·재연결 처리 지점도 함께 증가',
    ],
    roleHeading: '담당 역할',
    roles: ['실시간 데이터 수신·분배 구조 개선과 설비 모니터링 차트 구현'],
    approach: [
      '차트별 WebSocket을 단일 연결로 통합하고 수신 데이터를 식별자 기준으로 분배',
      '연결 상태와 재연결 처리를 공통 Hook으로 구성하고 차트 데이터 관리 중앙화',
    ],
    keyWork: [
      {
        title: '단일 WebSocket 수신 구조 구축',
        paragraphs: [
          '하나의 WebSocket 연결에서 전체 설비 데이터 수신',
          '연결 상태와 오류·재연결 처리를 공통 Hook으로 구성해 관리 지점 단일화',
        ],
      },
      {
        title: '식별자 기반 차트 데이터 분배',
        paragraphs: [
          '단일 WebSocket으로 수신한 데이터를 식별자 기준으로 구분해 필요한 차트에만 전달',
        ],
      },
    ],
    results: [
      '차트 수와 관계없이 WebSocket 연결·재연결 관리 지점을 하나로 통합',
      '데이터 수신과 화면 렌더링을 분리해 차트 추가·수정이 연결 로직에 영향을 주지 않도록 개선',
    ],
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'WebSocket', 'Highcharts'],
  },
  {
    company: '이로운소프트 | 개발팀 주임',
    companyId: 'erounsoft',
    title: 'SafeWing | 산업안전 기기 운영 및 공공데이터 수집 시스템',
    background: [
      '심박수·체온을 측정하는 공용 웨어러블 기기를 근무자에게 지급하고 기상 데이터를 근무 환경 확인과 안전교육에 활용하는 산업안전 서비스',
    ],
    problems: [
      '근무일마다 사용자가 달라지는 공용 기기의 등록·지급·반납을 수기로 관리해 현재 상태와 사용 이력 추적이 어려운 환경',
      '응답이 느린 공공데이터 API를 어드민 요청 시점마다 호출해 외부 API 응답 시간이 조회 속도에 직접 영향',
    ],
    roleHeading: '담당 역할',
    roles: ['공용 기기 운영 API·관리 화면과 공공 기상 데이터 수집 서버 설계·구현'],
    approach: [
      '기기를 등록한 뒤 지급·반납할 때 현재 사용자와 상태를 갱신하고, 처리 내역을 이력으로 기록하도록 구성',
      '기상 데이터 갱신 주기에 맞춘 별도 수집 서버를 구성해 외부 API 호출과 어드민 조회 분리',
    ],
    keyWork: [
      {
        title: '공용 웨어러블 기기 운영 시스템 구축',
        paragraphs: [
          '기기 등록·조회·지급·반납과 현재 사용자·상태 이력 관리 기능 구현',
          '관리자 권한에 따라 기기 조회와 지급·반납 실행 기능 분리',
          '기기 운영 API와 관리자 화면을 연결해 수기 관리 업무 시스템화',
        ],
      },
      {
        title: '공공 기상 데이터 수집 서버 구축',
        paragraphs: [
          '기상 데이터 갱신 시간에 맞춰 별도 스케줄 서버에서 공공데이터 API 호출',
          '수집한 날씨 데이터를 데이터베이스에 적재하고 어드민은 내부 데이터를 조회하도록 구성',
        ],
      },
    ],
    results: [
      '공용 기기의 지급·반납과 사용자·상태 이력을 하나의 시스템에서 관리',
      '외부 API 응답 시간과 어드민 조회 흐름을 분리해 운영 화면의 외부 서비스 의존 제거',
      '수집한 기상 데이터를 근무 환경 확인과 안전교육에 활용할 수 있는 조회 구조 구축',
    ],
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'REST API', 'Open API', 'React'],
  },
  {
    company: '이로운소프트 | 개발팀 주임',
    companyId: 'erounsoft',
    title: 'Z-CAR | 차량 진단 SDK 연동',
    background: [
      'VIN·OBD-II 데이터를 활용해 차량 진단과 탄소 배출량 측정을 제공하는 모바일 서비스',
    ],
    problems: [
      'Android·iOS SDK의 초기화와 진단 기능 호출 방식이 달라 플랫폼과 관계없이 동일하게 사용할 수 있는 연동 구조 필요',
    ],
    roleHeading: '담당 역할',
    roles: ['Android·iOS 차량 진단 SDK의 Native Module 연동과 공통 인터페이스 설계·구현'],
    approach: [
      'Android는 Java, iOS는 Objective-C로 Native Module을 구현해 플랫폼별 SDK 기능 연결',
      '초기화·BLE 연결·VIN 조회·OBD-II 기능을 공통 인터페이스로 통합',
    ],
    keyWork: [
      {
        title: '차량 진단 SDK Native Module 구축',
        paragraphs: [
          'Android·iOS SDK의 초기화, BLE 연결·해제, 연결 상태 확인 기능 연동',
          'VIN 조회와 OBD-II 명령 실행 기능을 앱에서 사용할 수 있도록 구성',
          '초기화·연결·진단 단계의 오류 처리 방식 통일',
        ],
      },
      {
        title: '공통 인터페이스 및 화면 연동',
        paragraphs: [
          '플랫폼별 SDK 호출 차이를 공통 인터페이스로 통합',
          '장치 연결 상태와 VIN·OBD-II 진단 결과를 차량 진단·탄소 배출량 측정 기능에 연동',
        ],
      },
    ],
    results: [
      'Android·iOS 차량 진단 기능의 플랫폼별 호출 구조 단일화',
      '앱에서 동일한 인터페이스로 BLE 연결·VIN 조회·OBD-II 기능 사용',
      '차량 진단 결과와 오류 상태를 차량 등록·진단 흐름에 연결',
    ],
    tech: ['React Native', 'TypeScript', 'Java', 'Objective-C', 'BLE', 'OBD-II', 'Native Module'],
  },
] satisfies readonly CareerProject[];

export const giggy = {
  title: 'GIGGY',
  subtitle: '호주 워킹홀리데이 구인·구직 매칭 앱',
  github: 'https://github.com/slobbie/giggy-backend',
  intro: [
    '구인 공고와 사용자 프로필을 기반으로 매칭하고, 수락 이후 채팅과 근무 일정으로 이어지는 모바일 서비스입니다.',
  ],
  scope: [
    'NestJS 백엔드의 도메인 구조, 공통 데이터 접근 구조, 인증, 매칭·채팅·알림과 배포 흐름 설계·구현',
  ],
  stack: [
    'Node.js',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'MikroORM',
    'Socket.IO',
    'JWT',
    'Firebase Admin',
    'AWS S3',
    'GitHub Actions',
    'Docker',
    'AWS ECR',
    'AWS EC2',
  ],
  architecture: {
    background:
      '인증, 회원, 구인 공고, 사용자 프로필, 매칭, 채팅과 알림이 연결되면서도 각 기능의 데이터와 책임이 섞이지 않는 구조가 필요했습니다.',
    details: [
      '인증, 회원, 구인 공고, 사용자 프로필, 매칭, 일정, 채팅과 알림을 도메인별로 분리했습니다.',
      '로그인과 HTTP 요청은 REST API, 채팅과 알림 전달은 Socket.IO로 구분했습니다.',
      'Controller와 Gateway는 요청과 연결을 처리하고, 실제 서비스 흐름은 도메인 Service에서 담당하도록 구성했습니다.',
      '데이터 처리는 Repository로 분리하고, 공통 DbRunner를 통해 Entity 조회·변경과 트랜잭션을 처리하도록 구성했습니다.',
      '이미지 저장은 AWS S3, 모바일 푸시는 Firebase FCM으로 분리했습니다.',
      'DB에 저장한 sessionId를 로그인 식별 기준으로 사용해, 동일 계정이 다른 기기에서 로그인하면 기존 로그인 상태가 무효화되도록 구성했습니다.',
    ],
    flow: `                    Mobile Client
                          │
        ┌─────────────────┴─────────────────┐
   REST API                            Socket.IO
   Controller                            Gateway
        └─────────────────┬─────────────────┘
                          ▼
                    Domain Service
    Auth · Member · Job · User Profile
    Match · MatchSchedule · Chat · Notification
                          │
                          ▼
                Repository / External
    DbRunner            AWS S3            Firebase FCM
       DB             이미지 저장             모바일 푸시`,
    note: 'REST API와 Socket.IO는 순서대로 실행되는 인증 과정이 아니라 독립적인 진입 경로입니다. 로그인과 일반 API 요청은 REST API에서 처리하고, 로그인 이후 채팅과 알림을 전달할 때 Socket.IO를 사용합니다.',
  },
  dataAccess: {
    background:
      '도메인별 Repository에서 반복되는 데이터 조회·변경과 트랜잭션 코드를 공통으로 사용할 수 있는 데이터 접근 구조가 필요했습니다.',
    details: [
      'Entity 조회·등록·수정·삭제, 관계 조회와 트랜잭션 기능을 MikroORM 기반의 공통 DbRunner로 구성해 도메인별 Repository에서 재사용했습니다.',
    ],
    flow: `Repository → DbRunner → DB
              조회 · 변경 · 트랜잭션`,
  },
  realtime: {
    background:
      '구인 공고와 사용자 프로필에서 시작된 매칭이 수락 이후 채팅, 알림과 근무 일정으로 연결되어야 했습니다. 각 기능의 데이터와 역할은 분리하면서 사용자에게는 하나의 서비스 흐름으로 제공하도록 구성했습니다.',
    details: [
      '매칭 수락을 기준으로 채팅, 알림과 근무 일정의 후속 작업을 연결했습니다.',
      '알림 저장과 FCM 푸시, 인앱 알림의 실행 흐름은 NotificationService에서 관리했습니다.',
      'Gateway는 사용자 접속 상태 관리와 채팅·알림 전달을 담당하도록 역할을 분리했습니다.',
      '확정된 근무 조건은 채팅 데이터와 분리해 별도 일정으로 관리했습니다.',
    ],
    flow: `      구인 공고 / 사용자 프로필
                 │
                 ▼
             매칭 요청
                 │
                 ▼
             매칭 수락
                 │
   ┌─────────────┼─────────────┐
  채팅           알림         근무 일정
              FCM · 인앱`,
  },
  testing: {
    summary: [
      '인증, 데이터 접근, 매칭·채팅·알림을 포함한 단위 테스트 46개를 작성하고 실행했습니다.',
      '공통 응답 형식을 확인하는 E2E 테스트를 실행했습니다.',
      '실제 DB에서 트랜잭션 도중 오류가 발생했을 때 이전 변경까지 함께 롤백되는지 통합 테스트로 확인했습니다.',
    ],
    stats: [
      { label: '단위 테스트', value: '18개 Suite · 46개 통과' },
      { label: 'E2E 테스트', value: '공통 응답 형식 · 1개 통과' },
      { label: 'DB 통합 테스트', value: '트랜잭션 롤백 · 1개 통과' },
    ],
  },
  deployment: {
    background:
      'Pull Request에서 검증한 코드와 서버에서 실행되는 결과물을 동일하게 유지하고, 실패한 배포가 현재 실행 중인 버전에 영향을 주지 않도록 배포 흐름을 구성했습니다.',
    details: [
      'Pull Request에서 정적 분석, 테스트, 애플리케이션 빌드와 Docker 이미지 생성을 검증했습니다.',
      '검증을 통과해 main에 병합된 커밋만 운영 Docker 이미지로 생성했습니다.',
      'Git commit SHA로 이미지를 태깅해 실행 중인 서버와 소스 커밋을 연결했습니다.',
      '생성한 이미지를 AWS ECR에 저장하고 AWS Systems Manager를 통해 EC2 배포를 요청하도록 구성했습니다.',
      'EC2에서는 신규 이미지를 내려받아 MikroORM Migration을 먼저 적용한 후 신규 컨테이너를 실행했습니다.',
      '신규 컨테이너 실행 후 DB 연결을 포함한 상태 확인을 수행했습니다.',
      'Migration이 실패하면 기존 컨테이너를 유지하고, 신규 컨테이너의 상태 확인이 실패하면 직전 이미지를 다시 실행하도록 구성했습니다.',
    ],
    results: [
      '검증을 통과한 커밋만 동일한 Docker 이미지로 전달하고, 실행 중인 버전을 Git commit SHA로 추적할 수 있도록 구성했습니다. Migration이나 신규 컨테이너의 상태 확인이 실패해도 기존 버전으로 서비스를 유지할 수 있는 배포 흐름을 구성했습니다.',
    ],
    flow: `Pull Request
정적 분석 · 테스트 · 빌드
     │ 검증 통과 커밋
     ▼
main 병합 → Docker 이미지
            Git commit SHA 태그
     │
     ▼
AWS ECR 이미지 저장
     │
     ▼
EC2 배포 · SSM 배포 요청
     │
     ▼
Migration · 상태 확인
  실패 시 기존 컨테이너 유지
  또는 직전 이미지 복구`,
    stack: [
      'GitHub Actions',
      'Docker',
      'AWS ECR',
      'AWS EC2',
      'AWS Systems Manager',
      'MikroORM Migration',
    ],
  },
} satisfies GiggyContent;

export const labs = [
  {
    title: 'Shared RN UIKit',
    index: '01',
    description: '웹과 React Native에서 같은 API로 사용하는 크로스플랫폼 디자인 시스템',
    detail: '공통 디자인 토큰과 플랫폼별 구현, Motion·Reanimated 모션 API, Fumadocs 문서와 Vite·Expo 예제를 구성했습니다.',
    image: assetPath('textures/ui-kit-main.png'),
    tech: [
      'React 19.0.0',
      'React Native 0.79.2',
      'Expo 53.0.8',
      'Motion 12.42.2',
      'Reanimated 3.17.4',
      'Storybook 8.6.14',
    ],
    links: [
      { label: 'Live', href: 'https://slobbie.github.io/shared-rn-uikit/' },
      { label: 'GitHub', href: 'https://github.com/slobbie/shared-rn-uikit' },
    ],
  },
  {
    title: '3D Interactive Portal',
    index: '02',
    description: '물리 기반 상호작용을 실험한 3D 웹 인터페이스',
    detail: 'React Three Fiber와 물리 시뮬레이션을 사용해 3D 오브젝트와 사용자의 입력이 연결되는 장면을 구현했습니다.',
    image: assetPath('textures/portal-main.jpg'),
    tech: ['React', 'React Three Fiber', 'Three.js', 'Physics'],
    links: [
      { label: 'Live', href: 'https://slobbie.github.io/portal/' },
      { label: 'GitHub', href: 'https://github.com/slobbie/portal' },
    ],
  },
  {
    title: 'Pokémon CardVault',
    index: '03',
    description: '카드 탐색 경험을 중심으로 만든 인터랙티브 도감',
    detail: 'Next.js 기반 탐색 구조와 카드 중심의 시각적 인터랙션을 구현했습니다.',
    image: assetPath('textures/pokemon-main.jpg'),
    tech: ['Next.js', 'React', 'TypeScript'],
    links: [
      { label: 'Live', href: 'https://slobbie.github.io/PokemonCardBooks/' },
      { label: 'GitHub', href: 'https://github.com/slobbie/PokemonCardBooks' },
    ],
  },
] satisfies readonly LabProject[];
