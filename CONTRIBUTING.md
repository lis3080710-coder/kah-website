# KAH 홈페이지 협업 가이드

## 브랜치 전략

```
master (보호됨 — 직접 push 불가)
  ├── design/홍길동-hero        ← 시안 브랜치
  ├── design/김영희-about       ← 시안 브랜치
  └── feature/채용-페이지       ← 기능 브랜치
```

## 시안 작업 흐름

### 1. 내 시안 브랜치 만들기

```bash
git checkout master
git pull origin master
git checkout -b design/내이름-섹션명
# 예: git checkout -b design/홍길동-hero
```

### 2. 작업 후 GitHub에 올리기

```bash
git add .
git commit -m "design: hero 섹션 레이아웃 변경"
git push origin design/내이름-섹션명
```

### 3. Pull Request 열기

```bash
gh pr create --title "시안: Hero 섹션 리디자인" --body "변경 내용 설명"
```

또는 GitHub 웹사이트에서 직접 PR 생성.

### 4. Vercel 미리보기 URL로 시안 확인

PR을 열면 **Vercel 봇이 자동으로 미리보기 URL을 댓글로 달아줍니다.**

```
✅ Preview: https://kah-website-git-design-홍길동-hero-xxx.vercel.app
```

→ 이 URL을 팀원에게 공유하면 바로 시안 확인 가능

### 5. 리뷰 & 병합

- 팀원 1명 이상의 승인(Approve)을 받아야 master에 merge 가능
- master에 merge되면 **프로덕션(kah-website.vercel.app)에 자동 배포**

---

## 전체 흐름 요약

```
내 브랜치 push
     ↓
Vercel이 미리보기 URL 자동 생성
     ↓
PR에서 팀원과 시안 비교 & 토론
     ↓
승인 받으면 master에 merge
     ↓
프로덕션 자동 배포 완료
```

---

## 커밋 메시지 규칙

| 타입 | 용도 |
|---|---|
| `design:` | 디자인/레이아웃 변경 |
| `feat:` | 새로운 기능 추가 |
| `fix:` | 버그 수정 |
| `content:` | 텍스트, 이미지 등 콘텐츠 수정 |
| `refactor:` | 코드 정리 (기능 변화 없음) |

## 링크

- **프로덕션**: https://kah-website.vercel.app
- **GitHub**: https://github.com/lis3080710-coder/kah-website
- **Vercel 대시보드**: https://vercel.com/inseoks-projects-2b178278/kah-website
