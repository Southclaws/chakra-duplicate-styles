"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
        {/* -- */}
        {children}
        {/* -- */}
      </ChakraProvider>
    </CacheProvider>
  );
}
