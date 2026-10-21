import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Avtoon — IT-аутсорсинг для бизнеса",
  },
  description:
    "Корпоративный лендинг компании Avtoon. Разработка программного обеспечения, IT-консалтинг и аутсорсинг для B2B-сегмента.",
  openGraph: {
    url: "/",
    title: "Avtoon — IT-аутсорсинг для бизнеса",
    description:
      "Корпоративный лендинг компании Avtoon. Разработка программного обеспечения, IT-консалтинг и аутсорсинг для B2B-сегмента.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <main className=""></main>;
}
