import { useEffect } from "react";

type PageMetadata = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export const DEFAULT_PAGE_METADATA = {
  title: "황민서 포트폴리오 | 신입 백엔드 개발자 · Spring Boot · Laravel",
  description:
    "신입 백엔드 개발자 황민서의 포트폴리오입니다. Spring Boot, Laravel, PHP 기반 웹 프로젝트와 데이터 분석, 모바일·게임 프로젝트를 정리했습니다.",
  image: "https://allen8524.github.io/assets/img/profile/profile_face.png",
  url: "https://allen8524.github.io/",
} as const;

type MetaAttribute = "name" | "property";

function updateMetaTag(attribute: MetaAttribute, key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function applyMetadata({ description, image, title, url }: Required<PageMetadata>) {
  document.title = title;
  updateMetaTag("name", "description", description);
  updateMetaTag("property", "og:title", title);
  updateMetaTag("property", "og:description", description);
  updateMetaTag("property", "og:image", image);
  updateMetaTag("property", "og:url", url);
  updateMetaTag("name", "twitter:title", title);
  updateMetaTag("name", "twitter:description", description);
  updateMetaTag("name", "twitter:image", image);
}

export function usePageMetadata({ description, image, title, url }: PageMetadata) {
  useEffect(() => {
    applyMetadata({
      title,
      description,
      image: image ?? DEFAULT_PAGE_METADATA.image,
      url: url ?? DEFAULT_PAGE_METADATA.url,
    });

    return () => {
      applyMetadata(DEFAULT_PAGE_METADATA);
    };
  }, [description, image, title, url]);
}
