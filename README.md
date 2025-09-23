# 산방식당 B2B 랜딩페이지

제주 밀면의 원조 산방식당의 B2B 파트너십을 위한 전용 랜딩페이지입니다.

## 🎯 프로젝트 개요

- **목적**: 산방식당의 B2B 파트너십 확장을 위한 전용 웹사이트
- **타겟**: 외식 자영업자, 유통업체, 브랜드 기획자
- **기술스택**: Vanilla JavaScript, HTML5, CSS3
- **특징**: 반응형 단일 페이지 애플리케이션 (SPA)

## 📋 주요 기능

### 1. 메인 섹션 (Hero)
- 동영상 배경을 활용한 임팩트 있는 첫인상
- 강력한 헤드라인과 CTA 버튼
- 부드러운 스크롤 애니메이션

### 2. 브랜드 스토리 (Brand Story)
- 1971년부터 시작된 산방식당의 역사
- 3가지 핵심 가치: Original, Philosophy, Heritage
- 인터랙티브 이미지와 텍스트 조합

### 3. 비즈니스 모델 (Business)
- 3가지 파트너십 모델을 탭 형태로 제공
  - 제품 공급 (Product Supply)
  - HMR/밀키트 유통 (HMR & Retail)
  - 브랜드 제휴 (Brand Collaboration)

### 4. 경쟁력 (Competitiveness)
- 맛의 차별점 시각화
- 객관적 지표를 통한 신뢰성 구축
- 인포그래픽 스타일 디자인

### 5. 문의하기 (Contact)
- 실시간 폼 검증
- 파트너십 유형별 분류
- 연락처 정보 및 지도 연동 준비

## 🚀 설치 및 실행

### 요구사항
- 최신 웹브라우저 (Chrome, Firefox, Safari, Edge)
- 로컬 웹서버 (선택사항)

### 실행 방법

1. **파일 다운로드**
   ```bash
   # 프로젝트 폴더로 이동
   cd 20250923_sanbang
   ```

2. **브라우저에서 직접 실행**
   ```
   index.html 파일을 브라우저에서 직접 열기
   ```

3. **로컬 서버 실행 (권장)**
   ```bash
   # Python 3 사용 시
   python -m http.server 8000
   
   # Python 2 사용 시
   python -m SimpleHTTPServer 8000
   
   # Node.js 사용 시
   npx serve .
   ```

4. **브라우저에서 접속**
   ```
   http://localhost:8000
   ```

## 📁 파일 구조

```
20250923_sanbang/
├── index.html              # 메인 HTML 파일
├── styles.css              # 스타일시트
├── script.js               # JavaScript 기능
├── sanbang.md              # 기획서 문서
├── README.md               # 프로젝트 설명
└── sanbang_assets/         # 미디어 에셋 폴더
    ├── 제주산방식당 영상촬영분.mp4
    ├── 제주산방식당 로고 확정본 (1).jpg
    ├── 제주산방_001.jpg
    ├── 산방식당 제주점 (3).JPG
    ├── 밀면.jpg
    ├── 수육이미지.jpg
    ├── 13_차이점2.png
    └── ... (기타 이미지 파일들)
```

## 🎨 디자인 특징

### 컬러 팔레트
- **메인 컬러**: #d4491f (산방식당 시그니처 레드)
- **서브 컬러**: #ff6b3d (그라데이션 효과)
- **배경 컬러**: #f8f9fa, #ffffff
- **텍스트 컬러**: #333, #666

### 타이포그래피
- **메인 폰트**: Noto Sans KR
- **웹폰트**: Google Fonts 연동
- **반응형 텍스트**: 화면 크기별 최적화

### 애니메이션
- **페이드인 효과**: 스크롤 시 요소별 등장
- **호버 효과**: 버튼 및 이미지 인터랙션
- **부드러운 전환**: CSS transition 활용

## 📱 반응형 디자인

### 브레이크포인트
- **Desktop**: 1024px 이상
- **Tablet**: 768px ~ 1023px
- **Mobile**: 480px ~ 767px
- **Small Mobile**: 479px 이하

### 모바일 최적화
- 햄버거 메뉴 구현
- 터치 친화적 버튼 크기
- 세로 스크롤 최적화
- 이미지 자동 크기 조정

## ⚡ 성능 최적화

### 이미지 최적화
- 적절한 해상도로 압축
- WebP 형식 지원 준비
- Lazy Loading 구현

### 코드 최적화
- CSS/JS 압축 준비
- 불필요한 리소스 제거
- 브라우저 캐싱 활용

## 🔧 주요 JavaScript 기능

### 네비게이션
```javascript
// 스크롤 시 네비게이션 활성화
function updateActiveNavLink()

// 부드러운 스크롤 이동
function scrollToSection(sectionId)
```

### 탭 기능
```javascript
// 비즈니스 섹션 탭 전환
function initializeTabs()
```

### 폼 검증
```javascript
// 연락처 폼 실시간 검증
function validateForm(data)

// 폼 제출 처리
function submitForm(data)
```

### 애니메이션
```javascript
// 스크롤 기반 애니메이션
function initializeScrollEffects()
```

## 🌐 브라우저 지원

- **Chrome**: 60+ ✅
- **Firefox**: 55+ ✅
- **Safari**: 12+ ✅
- **Edge**: 79+ ✅
- **IE**: 11+ ⚠️ (제한적 지원)

## 📞 연락처

**산방식당 사업개발팀**
- 전화: 064-794-0000
- 이메일: business@sanbang.co.kr
- 주소: 제주특별자치도 서귀포시 안덕면 사계리

## 📄 라이선스

© 2024 산방식당. All rights reserved.

---

*Since 1971, 제주 밀면의 원조*