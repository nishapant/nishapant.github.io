import React from 'react';
import { Typography, List, Tag } from 'antd';

import '../style/General.css'
  
const data = [
{
    key: '1',
    artist: 'Kendrick Lamar',
    songs: [
        { title: 'good kid, m.A.A.D city', year: 2012},
        { title: 'To Pimp a Butterfly', year: 2015 }
    ],
    tags: ['hip hop', 'west coast', 'jazz'],
},
{
    key: '2',
    artist: 'Frank Ocean',
    songs: [
        { title: 'Channel ORANGE', year: 2012 },
        { title: 'Blonde', year: 2016}
    ],
    tags: ['r&b', 'psychedelic pop'],
},
{
    key: '5',
    artist: 'Mac Miller',
    songs: [
        { title: 'KIDS', year: 2011 },
        { title: 'GO:OD AM', year: 2015}
    ],
    tags: ['hip hop', 'r&b'],
},
{
    key: '6',
    songs: [
        { title: 'Late Registration', year: 2005 },
        { title: 'My Beautiful Dark Twisted Fantasy', year: 2010 }
    ],
    artist: 'Kanye West',
    tags: ['hip hop', 'chicago'],
},

{
    key: '15',
    songs: [
        { title: '99.9%', year: 2016 },
        { title: 'Bubba', year: 2019 },
    ],
    artist: 'KAYTRANADA',
    tags: ['edm', 'hip hop', 'r&b'],
},
{
    key: '11',
    songs: [
        { title: 'FORTHEWORLD', year: 2020 },
    ],
    artist: 'Rae Khalil',
    tags: ['hip hop'],
},
{
    key: '9',
    songs: [
        { title: 'French Kiwi Juice', year: 2017 },
    ],
    artist: 'FKJ',
    tags: ['electronic'],
},
{
    key: '10',
    songs: [
        { title: 'The Never Story', year: 2017 }
    ],
    artist: 'JID',
    tags: ['soul', 'r&b'],
},
{
    key: '14',
    songs: [
        { title: 'We got it from Here... Thank You 4 Your service', year: 2016 },
    ],
    artist: 'A Tribe Called Quest',
    tags: ['hip hop', 'jazz', 'east coast'],
},
{
    key: '14',
    songs: [
        { title: 'Bucket List Project', year: 2016 },
    ],
    artist: 'Saba',
    tags: ['hip hop'],
},
{
    key: '7',
    songs: [
        { title: 'Yes Lawd! [NxWorries]', year: 2016 },
        { title: 'Malibu', year: 2016}
    ],
    artist: 'Anderson. Paak',
    tags: ['neo soul', 'hip hop', 'r&b'],
},
{
    key: '2',
    artist: 'REASON',
    songs: [
        { title: 'There You Have It', year: 2018 }
    ],
    tags: ['r&b', 'psychedelic pop'],
},
{
    key: '8',
    songs: [
        { title: 'Free Nationals', year: 2019 },
    ],
    artist: 'Free Nationals',
    tags: ['soul', 'r&b'],
},
{
    key: '9',
    songs: [
        { title: 'CASE STUDY 01', year: 2019 },
    ],
    artist: 'Daniel Caesar',
    tags: ['soul', 'r&b'],
},

{
    key: '12',
    songs: [
        { title: 'Mirrorland', year: 2019 },
    ],
    artist: 'EARTHGANG',
    tags: ['hip hop'],
},
{
    key: '12',
    songs: [
        { title: 'B4.Da.$$', year: 2015 },
    ],
    artist: 'Joey Bada$$',
    tags: ['hip hop', 'east coast'],
},
{
    key: '12',
    songs: [
        { title: 'Cilvia Demo', year: 2014 },
    ],
    artist: 'Isaiah Rashad',
    tags: ['hip hop', 'jazz'],
},
{
    key: '12',
    songs: [
        { title: 'Flower Boy', year: 2017 },
    ],
    artist: 'Tyler the Creator',
    tags: ['r&b'],
}
];

const { Title } = Typography;

class Music extends React.Component {
    render() {
        return (
            <div>
                <Title strong className="heading">
                    Music <span role="img" aria-label="music-note">🎧</span>
                </Title>
                <p>Music is a huge part of my life, I mainly listen to conscious rap and r&b. I had a hard time compiling my top 25
                albums so I did my favorite artists (in no particular order) + their best works.</p>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 3
                    }}
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item className="background-grey">
                        <span className="artist">{item.artist}</span><br />
                        {item.songs.map((song) => 
                            <div>
                                <span className="album-title">{song.title}</span>
                                <span className="year">({song.year})</span>
                            </div>
                        )}
                        <br />
                        {item.tags.map((tag) =>
                            <Tag color="magenta">{tag}</Tag>
                        )}
                    </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default Music;