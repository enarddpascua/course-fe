import React from "react";
import Head from "../components/Head";
import Content from "../components/Content";
import ContentCard from '../components/ContentCard';

const Course =()=>{
    return(
        <>
           <Head>
            <p>Head</p>
          </Head>
          <Content>
            {[1,2,32,32,3,2,2,23,23,23,23].map((el, i) => (
            <ContentCard key={i}/>
            ))}
          </Content>
        </>
    );
}

export default Course;