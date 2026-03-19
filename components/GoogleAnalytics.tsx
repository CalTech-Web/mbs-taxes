import Script from "next/script";

const GT_ID = "GT-PLACEHOLDER";

export default function GoogleAnalytics() {
  if (!GT_ID || GT_ID === "GT-PLACEHOLDER") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments)}
          gtag("js",new Date());
          gtag("config","${GT_ID}");
        `}
      </Script>
    </>
  );
}
