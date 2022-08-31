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
        await axios.get("https://simple-course-backend.herokuapp.com/topics").then(res => {
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
            {isLoading ? (
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            ) : (
                courses.data.map((el, i) => (
            <ContentCard key={i} title={el.topic} image={el.thumbnailURL}/>
            )))}
          </Content>
        </>
    );
}

export default Course;