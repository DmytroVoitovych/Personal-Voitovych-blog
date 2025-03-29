import components from "@/utils/mdx/customComponentListForEmail";
import { MdHandledComponent } from "@/utils/mdx/MdHandledComponent";
import {Html, Head, Font, Body, Container } from "@react-email/components";

export const Email = (article:string) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="DM Sans"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
            format: "woff2",
          }}
          fontStyle="normal"
        />
        <style>
          {
            `
            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
            *{
            font-family: 'DM Sans', sans-serif;
            }`
          }
        </style>
      </Head>
    <Body>
     <Container style={{maxWidth:'700px'}}>
    <MdHandledComponent source={article} components={components}/>
    </Container>   
    </Body>
     
    </Html>
  );
};