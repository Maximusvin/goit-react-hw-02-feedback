import React, { Component } from 'react';

import Layout from './Layout/Layout';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import CardInterface from './CardInterface/CardInterface';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

import './App.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = event => {
    const { name } = event.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => {
      return acc + item;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <Layout>
        <h1>Home Work #2.1</h1>
        <CardInterface>
          <Section title="Please leave feedback">
            <FeedbackOptions onLeaveFeedback={this.clickHandler} />
          </Section>
          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
        </CardInterface>
      </Layout>
    );
  }
}
