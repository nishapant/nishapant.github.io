import React from 'react';
import { Typography } from 'antd';
import { List, Card } from 'antd';

import '../style/General.css'

const { Title } = Typography;

const data = [
    {
      title: 'Melodia',
      source: 'https://github.com/nishapant/melodia',
      content: (
        <p>
            Built a python application that analyzes the lyrics in your top spotify songs and playlists. 
            The applications builds a sentiment analysis graph, word cloud and word frequency graph based 
            on the data provided. Created with Spotify, Lyric Genius, and Parallel Dots apis.
        </p>
      )
    },
    {
      title: 'Suasana',
      source: 'https://github.com/nishapant/suasana',
      content: (
        <p>
            Worked on a team of three to build an eco-friendly habit-tracking application in iOS. 
            The app incorporates a chatbot built with the Dialogflow API that helps users track sustainable 
            habits and learn more about reducing the user’s carbon footprint. Built in Swift.
        </p>
      )
    },
    {
      title: 'Vimeo Siri Shortcuts [Intern Project]',
      source: 'https://apps.apple.com/us/app/vimeo/id425194759',
      demo: 'https://vimeo.com/352957839',
      content: (
          <p>
            The shortcut feature that I created learns which privacy setting a user is uploading videos 
            with most frequently in the Vimeo iOS app. The user will then
            receive a notification to upload a video with their most used privacy setting. By clicking on this notification, the user is immediately 
            brought to the Vimeo upload flow with the privacy setting already populated. This feature is currently in production in the Vimeo iOS application.
          </p>
      )
    },
    {
      title: 'CompSci Kids',
      source: 'https://compscikids.net/',
      content: (
        <p>
            I founded CompSci Kids, a program that promotes the importance of computer science to elementary + 
            middle school students. I helped with creating curriculum, advertising to students, 
            recruiting volunteers, and overseeing six classrooms with students 
            in 1-8 grade. The curriculum I created utilizes technologies such as 
            Scratch, Code.org, Alice, and Visual Basic and incorporates unplugged activites.
        </p>
      )
    },
];

class Projects extends React.Component {
    render() {
        return (
            <div>
                <Title strong className="heading">
                    Projects <span role="img" aria-label="girl-coding">👩🏽‍💻</span>
                </Title>
                <p>
                    I first started getting interested in computer science in high school, during a computer science course. Following that, I participated in <a className="link" href="https://girlswhocode.com/">Girls Who Code</a> and a series of different hackathons. Currently, I enjoy working in the 
                    backend and have proficiency with Java, Ruby (+Rails), Python, and C++. Below are a few of the past leadership and 
                    technical projects I've worked on.
                </p>
                <List
                    grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 2,
                    xl: 2,
                    xxl: 2
                    }}
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <Card>
                        <p className="cardTitle">
                            {item.title}
                        </p>
                        {item.content}
                        <a href={item.source} className="link-2">Source</a>
                        {
                            item.demo && 
                            <a href={item.demo} className="link-2">Demo</a>
                        }
                        </Card>
                    </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Projects;