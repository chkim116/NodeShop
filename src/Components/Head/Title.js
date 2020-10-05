import React from "react";
import { Helmet } from "react-helmet";

export const Title = ({ desc, meta, content }) => {
  const TITLE = "엔비야트 NVIYAT";
  return (
    <Helmet>
      <title>
        {TITLE} | {desc}
      </title>
      <meta name={meta} content={content} />
    </Helmet>
  );
};
