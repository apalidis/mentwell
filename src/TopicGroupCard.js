import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TopicGroupCard.css';

class TopicGroupCard extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        popularTopicsList: PropTypes.arrayOf(PropTypes.string).isRequired,
        image: PropTypes.string.isRequired
    }
    
    render() {
        const {title, description, image} = this.props;
        const popularTopicsList = this.props.popularTopicsList.map((topic, index) => (
            <li key={index}>{topic}</li>
        ));
        return (
            <div className="topicGroupCard">
                <div className="topicGroupCard-image">
                    <img src={image} alt={title} />
                </div>
                <div className="topicGroupCard-content">
                    <h3 className="topicGroupCard-title">{title}</h3>
                    <p className="topicGroupCard-description">{description}</p>
                    <ul>
                        {popularTopicsList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopicGroupCard;