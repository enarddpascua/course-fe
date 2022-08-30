import React, {useEffect, useState} from "react";
import Head from "../components/Head";
import Content from "../components/Content";
import ContentCard from '../components/ContentCard';
import axios from 'axios';

const Course =()=>{
    const [courses, setCourses] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchCourses = async () => {
        setLoading(true);
        await axios.get("http://localhost:8080/topics").then(res => {
            setCourses(res);
        });
        setLoading(false);
    }
    useEffect(() => {
        fetchCourses();
    }, []);

    return(
        <>
           <Head>
                <h1>Courses</h1>
          </Head>
          <Content>
            {isLoading ? <p>Spinning</p> : courses.data.map((el, i) => (
            <ContentCard key={i} title={el.topic}/>
            ))}
          </Content>
        </>
    );
}

export default Course;