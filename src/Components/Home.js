import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import PlayersCard from "./PlayersCard";

export class Home extends Component {
  static propTypes = {
    userQuestionData: PropTypes.object.isRequired,
  };
  render() {
    const { userQuestionData } = this.props;

    return <Tab panes={panes({ userQuestionData })} className="tab" />;
  }
}

const panes = (props) => {
  const { userQuestionData } = props;
  return [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          {userQuestionData.answered.map((question) => (
            <PlayersCard
              key={question.id}
              question_id={question.id}
              unanswered={true}
            />
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {userQuestionData.unanswered.map((question) => (
            <PlayersCard
              key={question.id}
              question_id={question.id}
              unanswered={false}
            />
          ))}
        </Tab.Pane>
      ),
    },
  ];
};

const mapStateToProps = ({ auth, users, questions }) => {
  const answeredIds = Object.keys(users[auth].answers);
  const answered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    userQuestionData: {
      answered,
      unanswered,
    },
  };
};

export default connect(mapStateToProps)(Home);