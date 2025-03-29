import components from "@/utils/mdx/customComponentListForEmail";
import { MdHandledComponent } from "@/utils/mdx/MdHandledComponent";
import {Html, Head, Font, Body, Container, Text } from "@react-email/components";

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
    <Text style={{padding:'12px',backgroundColor:'#E1F1FE',borderRadius:'12px',border:'1px solid #93CEFC'}}>{"Don't worry I am not going to send you spams! This is first and last my mail to you."}</Text>
    </Container>   
    </Body>
     
    </Html>
  );
};