"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

function shouldForwardProp(prop: string) {
  return isPropValid(prop);
}

export default function StyledRegistry({ children }: { children: React.ReactNode }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return (
      <>
        {styles}
        <style dangerouslySetInnerHTML={{ __html: "body{visibility:visible}" }} />
      </>
    );
  });

  const sheetProps = typeof window === "undefined" ? { sheet: sheet.instance } : {};

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp} {...sheetProps}>
      {children}
    </StyleSheetManager>
  );
}
