import React, {Component} from 'react';
import TopicGroupCard from './TopicGroupCard';
import PropTypes from 'prop-types';
import './TopicGroupList.css'

class TopicGroupList extends Component {
    static defaultProps = {
    topicGroups: [
      {
        title: "title1",
        popularTopicsList: ['one', 'two'],
        description: "description",
        image: "image.jpg"
      },
      {
        title: "title2",
        popularTopicsList: ['one', 'two'],
        description: "description",
        image: "image.jpg"
      },
      {
        title: "title3",
        popularTopicsList: ['one', 'two'],
        description: "description",
        image: "image.jpg"
      }
      ]
    }
    
    static propTypes = {
        topicGroups: PropTypes.arrayOf(PropTypes.object)
    }
    
    render() {
        const topicGroups = this.props.topicGroups.map((topicGroup, index) => (
            <TopicGroupCard key={index} {...topicGroup}/>
        ));
        
        return (
            <div className="topicGroupCard-list">
                {topicGroups}
            </div>
        )
    }
}

export default TopicGroupList;